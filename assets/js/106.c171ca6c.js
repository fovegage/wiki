(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{418:function(n,s,t){"use strict";t.r(s);var a=t(7),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"函数式选项设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式选项设计模式"}},[n._v("#")]),n._v(" 函数式选项设计模式")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("1. 将参数抽离到option，通过with的形式按需扩展修改（这儿相当于java的函数重载）\n2. 接口版本（如果参数过多，则应该使用接口版本apply，golang grpc库用了该模式）\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://obsidian-foveagge.oss-cn-beijing.aliyuncs.com/blog/eTY39a.png",alt:""}})]),n._v(" "),s("h3",{attrs:{id:"普通版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通版本"}},[n._v("#")]),n._v(" 普通版本")]),n._v(" "),s("div",{staticClass:"language-golang line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package main\n\ntype Option func(*Options)\n\ntype Options struct {\n\tname string\n\tage  int\n}\n\nfunc WithAge(age int) Option {\n\t// 外部传入修改\n\treturn func(o *Options) {\n\t\t// 这儿相当于更新了Options 将传入的重新复制对age\n\t\tprintln(o.name, o.age)\n\t\to.age = age\n\t}\n}\n\nfunc NewOptions(opts ...Option) *Options {\n\to := &Options{\n\t\tname: "gage",\n\t}\n\tfor _, opt := range opts {\n\t\topt(o)\n\t}\n\t// 值传递\n\tprintln("modify:", o.age)\n\treturn o\n}\n\nfunc testOption() {\n\t// https://www.liwenzhou.com/posts/Go/functional-options-pattern/\n\topt := NewOptions(WithAge(29))\n\tprintln(opt.age, opt.name)\n\n\tage := WithAge(29)\n\tage(&Options{\n\t\tname: "gage",\n\t})\n\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br")])]),s("h3",{attrs:{id:"接口版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口版本"}},[n._v("#")]),n._v(" 接口版本")]),n._v(" "),s("div",{staticClass:"language-golang line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.liwenzhou.com/posts/Go/functional-options-pattern/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Go语言设计模式之函数选项模式"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);