(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{347:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# golang lint\ngo install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.53.3\ngo mod vendor\ngolangci-lint run\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[s._v("#")]),s._v(" demo")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("linters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disable-all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭其他linter")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面是开启的linter列表，之后的英文注释介绍了相应linter的功能")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进制使用非ASCII字符")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" asciicheck\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" bidichk\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 降低代码复杂度")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cyclop\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gocognit\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gocyclo\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" maintidx\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 高可拓展性的go源码linter")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gocritic\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止保留未使用的代码块")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#---------------------------------------")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- deadcode  ")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The linter 'deadcode' is deprecated (since v1.49.0) due to: The owner seems to have abandoned the linter")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新版本的linter已经不建议使用deadcode了，不使用的代码不会被报错了")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#---------------------------------------")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ineffassign\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减少代码拷贝")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dupl\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止两个time.Duration类型相乘")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" durationcheck\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有err都要处理")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" errcheck\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在Go 1.13之后使用errors.Wrap可能导致的问题")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" errorlint\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查switch的全面性，以免遗漏场景")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" exhaustive\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止将for-range value的指针暴露给外部")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" exportloopref\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用特定的标识符")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" forbidigo\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止出现长函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" funlen\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 控制golang的包引用的顺序")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gci\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用全局变量  --需要使用  //nolint:gochecknoglobals // 说明原因")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gochecknoglobals\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用init函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gochecknoinits\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有相同的string变量请使用consts替换")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" goconst\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查if语句是否有简单的语法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ifshort\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止出现长语句")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lll\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# struct禁止包含context.Context字段")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" containedctx\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回两个参数，一个数据，一个是err，禁止两个都是nil")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nilnil\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用Sprintf去构造URL中的host和port")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nosprintfhostport\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果知道slice大小，定义时需分配空间")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" prealloc\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查prometheus meteics的指标名是否规范")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" promlinter\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制要求const/import/var在一个组")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" grouper\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查go1.17的版本是否使用os.Setenv替换t.Setenv")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" tenv\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查变量名长度")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" varnamelen\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制一致性的impotr别名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" importas\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型断言时需检查是否成功")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" forcetypeassert\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保证类型、常量、变量和函数的声明顺序和数量")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" decorder\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查err的定义规范--types类型的定义是以Error结尾的，常量的定义是Err打头的")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" errname\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SQL Query方法错误检查")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" execinquery\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止errors使用'=='和'!='等表达式--与nil和io.EOF比较除外")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" goerr113\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方代码格式化")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gofmt\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gofumpt\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" goimports\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用魔法数字")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gomnd\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查依赖的黑白名单")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gomodguard\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查类似printf的函数是否以f结尾")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" goprintffuncname\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安全检查")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gosec\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方错误检查")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" govet\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查拼写错误")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" misspell\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果函数过长，禁用裸返回")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nakedret\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止深度嵌套的if语句")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nestif\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果使用nolint指令需要给出理由-- //nolint:gochecknoglobals // 原因")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nolintlint\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用Go关键字命名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" predeclared\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去掉没有必要的type转换")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" unconvert\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制使用空行")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" wsl\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查文件头部和尾部的换行")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" whitespace\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换golint的")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" revive\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试代码使用*_test的包目录")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" testpackage\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用并行测试")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" paralleltest\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查帮助函数里面有没有调用t.Helper()函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" thelper\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("linters-settings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("errcheck")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check-type-assertions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查类型断言")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check-blank")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查使用 _ 来处理错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("errorlint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查fmt.Errorf错误是否用%w")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exhaustive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check-generated")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不检查生成的文件")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default-signifies-exhaustive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不检查是否有default")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("funlen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lines")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个函数总行数限制")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("statements")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查函数中语句的数量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sections")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" standard                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准库")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" default                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认按字典顺序排序")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" prefix(cos/lobbyplatform) "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 特殊前缀的包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gomodguard")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查依赖的黑白名单")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allowed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List of allowed modules.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default: []")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("modules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gopkg.in/yaml.v2\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List of allowed module domains.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default: []")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("domains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" golang.org\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("blocked")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List of blocked modules.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default: []")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("modules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Blocked module.")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github.com/uudashr/go-module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Recommended modules that should be used instead. (Optional)")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("recommendations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" golang.org/x/mod\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reason why the recommended module should be used. (Optional)")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reason")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"`mod` is the official go.mod parser library."')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List of blocked module version constraints.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default: []")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("versions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Blocked module with version constraint.")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github.com/mitchellh/go-homedir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Version constraint, see https://github.com/Masterminds/semver#basic-comparisons.")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"< 1.1.0"')]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reason why the version constraint exists. (Optional)")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reason")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing if blocked version constraint works."')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set to true to raise lint issues for packages that are loaded from a local path via replace directive.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default: false")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local_replace_directives")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br")])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://golangci-lint.run/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);