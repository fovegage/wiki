---
title: 如何使用gitlab ci构建maven应用
date: 2023-07-25 19:22:18
permalink: /pages/13b4a6/
categories:
  - 运维
  - 自动化
  - 构建
tags:
  - 
author: 
  name: fovegage
  link: https://github.com/fovegage
---
## demo

```
stages:
  - jar
  - build
  - cd

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"

cache:
  paths:
    - .m2/repository

build_jar:
  stage: jar
  image: maven:latest
  before_script:
    - echo '<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
      <localRepository>/cache/.m2</localRepository>
      <mirrors>
      <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>*</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
      </mirror>
      </mirrors>
      </settings>' > $HOME/.m2/settings.xml
  script:
    - mvn clean package
  artifacts:
    paths:
      - target/*.jar

build_image:
  stage: build
  only:
    - main
    - dev
  image: docker:stable
  before_script:
    - export IMAGE_TAG="registry.cn-beijing.aliyuncs.com/biyao/spider:${CI_COMMIT_SHA}"
  script:
    - ｜
      cat > Dockerfile << __EOF__
      FROM openjdk:8
      EXPOSE 8080
      ADD target/com.biyao.algorithmsign-0.9.8-SNAPSHOT.jar /releases/app/algorithmsign.jar
      ADD target/com.biyao.browsersign-0.9.8-SNAPSHOT.jar /releases/app/browsersign.jar
      ADD target/com.biyao.emulatesign-0.9.8-SNAPSHOT.jar /releases/app/emulatesign.jar
      ADD target/com.biyao.hooksign-0.9.8-SNAPSHOT.jar /releases/app/hooksign.jar
      ADD target/com.biyao.cdpsign-0.9.8-SNAPSHOT.jar /releases/app/cdpsign.jar
      __EOF__
    - echo $IMAGE_TAG
    - echo "${ACR_PASSWORD}" | docker login registry.cn-beijing.aliyuncs.com -u ${ACR_USERNAME} --password-stdin
    - docker build . --file Dockerfile --tag $IMAGE_TAG --build-arg "CI_JOB_TOKEN=${CI_JOB_TOKEN}" --build-arg "GITLAB_USERNAME=${GITLAB_USERNAME}" --build-arg "GITLAB_PASSWORD=${GITLAB_PASSWORD}"
    - docker push $IMAGE_TAG

cd-job:
  stage: cd
  image: smartive/kustomize
  only:
    - main
    - dev
  before_script:
    - export IMAGE_TAG="registry.cn-beijing.aliyuncs.com/biyao/spider:${CI_COMMIT_SHA}"
    - git config --global user.name gaozhe
    - git config --global user.email gaozhe@idstaff.com
    - git clone https://gitlab-cd:${CD_TOKEN}@git.hongyuan.com/spider/BiyaoCD.git
  script:
    - |
      export ARGO_APP=$(echo $CI_PROJECT_NAME | tr '[A-Z]' '[a-z]')
      echo "$ARGO_APP"
      echo "print CI_COMMIT_TITLE"
      echo "$CI_COMMIT_TITLE"
      if [ -d "BiyaoCD/${ARGO_APP}/overlays" ]; then
        cd BiyaoCD/${ARGO_APP}/overlays
        # 发布到测试环境
        if [[ "$CI_COMMIT_REF_NAME" != "main" ]]; then
          if echo "$CI_COMMIT_TITLE" | grep -q "algorithmsign"; then
            cd algorithmsign/dev && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "browsersign"; then
            cd browsersign/dev && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "cdpsign"; then
            cd cdpsign/dev && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "hooksign"; then
            cd hooksign/dev && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "emulatesign"; then
            cd emulatesign/dev && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          else
            echo "Please select branch";
            exit 1;
          fi
        fi

        # 发布到生产环境
        if [ "$CI_COMMIT_REF_NAME" == "main" ]; then
          if echo "$CI_COMMIT_TITLE" | grep -q "algorithmsign"; then
            cd algorithmsign/prod && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "browsersign"; then
            cd browsersign/prod && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "cdpsign"; then
            cd cdpsign/prod && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "hooksign"; then
            cd hooksign/prod && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          elif echo "$CI_COMMIT_TITLE" | grep -q "emulatesign"; then
            cd emulatesign/prod && kustomize edit set image k8s_image=${IMAGE_TAG} && cd ../../
          else
            echo "Please select branch";
            exit 1;
          fi      
        fi
        git add .
        git commit -m "CD: update ${ARGO_APP}: ${IMAGE_TAG}"
        git fetch && git rebase origin/main && git push
      fi
```

## 参考
- [GitLab CI/CD maven项目加速](https://blog.csdn.net/chen_hao_181/article/details/123559055)