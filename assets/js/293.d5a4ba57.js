(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{607:function(a,s,e){"use strict";e.r(s);var t=e(7),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# https://www.modb.pro/db/216294\n# 创建命名空间\nkubectl create namespace argocd \n# 部署 argo cd\nwget https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\nkubectl apply -n argocd -f install.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"查看密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看密码"}},[a._v("#")]),a._v(" 查看密码")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("kubectl get secret -n argocd argocd-initial-admin-secret -o yaml\necho xxxxxxxxxxQ3Jaag== | base64 -d\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://obsidian-foveagge.oss-cn-beijing.aliyuncs.com/blog/WMuuud.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[a._v("#")]),a._v(" 操作")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 注意下面的操作是必须的\nargocd repo add git@github.com:PanGuData/ProxyHub.git --ssh-private-key-path ~/.ssh/id_rsa  \n\nargocd login ip:port  \nargocd repo add git@github.com:PanGuData/ProxyHub.git --ssh-private-key-path ~/.ssh/id_rsa  \nargocd app create railway-proxy --repo git@github.com:PanGuData/ProxyHub.git --path deploy/railway --revision HEAD --dest-server https://kubernetes.default.svc --dest-namespace proxy --project crawler --upsert --grpc-web  \nargocd app sync railway-proxy --timeout 60 --grpc-web  \nargocd app wait railway-proxy --timeout 60 --grpc-web  \n  \nargocd app create http-gateway --repo git@github.com:PanGuData/ProxyHub.git --path deploy/gateway --revision HEAD --dest-server https://kubernetes.default.svc --dest-namespace proxy --project crawler --upsert --grpc-web  \nargocd app sync http-gateway --timeout 60 --grpc-web  \nargocd app wait http-gateway --timeout 60 --grpc-web  \n  \nargocd app create dial-proxy --repo git@github.com:PanGuData/ProxyHub.git --path deploy/dail --revision HEAD --dest-server https://kubernetes.default.svc --dest-namespace proxy --project crawler --upsert --grpc-web  \nargocd app sync dial-proxy --timeout 60 --grpc-web  \nargocd app wait dial-proxy --timeout 60 --grpc-web\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("h2",{attrs:{id:"k8s配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s配置"}},[a._v("#")]),a._v(" k8s配置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 下面的这一步也是必须的  k8s 仓库权限是针对namespace的 不是全局的 应注意\nkubectl create secret docker-registry codeup-registry --docker-server=registry.cn-shanghai.aliyuncs.com --docker-username=sdgaozhe@qq.com --docker-password=xxxx --docker-email=sdgaozhe@qq.com -n proxy  \nkubectl config get-contexts  \nkubectl create ns proxy  \n  \n# 目录下部署：https://blog.csdn.net/xixihahalelehehe/article/details/107925618  \nkustomize build proxy |\\  \nkubectl apply -f - -n proxy  \n  \nkustomize build pigway |\\  \nkubectl apply -f - -n proxy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install argocd\nbrew cleanup argocd\n# 本地登录\necho y | argocd login ip:30989 --password 'xxxxx' --username admin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面"}},[a._v("#")]),a._v(" 界面")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://obsidian-foveagge.oss-cn-beijing.aliyuncs.com/blog/1fiyMM.png",alt:""}}),a._v(" "),s("img",{attrs:{src:"https://obsidian-foveagge.oss-cn-beijing.aliyuncs.com/blog/NUpuvb.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);