(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{638:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1. 选择最小化安装\n2. 不要下载软件更新，否则会很慢\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"开启22端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启22端口"}},[s._v("#")]),s._v(" 开启22端口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# ubuntu系统默认没有开启22端口\nsudo apt-get install openssh-server\nsudo apt-get install ufw\nsudo ufw enable\nsudo ufw allow 22 \n\n# 注意k8s集群需要永久的关闭防火墙\nsystemctl stop ufw\nsystemctl disable ufw\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/yb546822612/article/details/105225138",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu 无法SSH连接，开启22端口"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);