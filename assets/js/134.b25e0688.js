(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{445:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 原始数据\nODS\n\n# 保证数据的质量和完整，方便后续层中特征分析\nDWD：data warehouse details 细节数据层，是业务层与数据仓库的隔离层。\n主要对ODS数据层做一些数据清洗和规范化的操作。（依企业业务需求）数据清洗：去除空值、脏数据、超过极限范围的\n\n# \nDWM：也有的称为DWB（data warehouse base） 数据基础层，对数据进行轻度聚合，存储的是客观数据，\n一般用作中间层，可以认为是大量指标的数据层。这里最容易搞混，实际生产中甚至跳过这个，只有dwd和dws层，其实严格要求上来讲，dwd层数据来源于生产系统，只对数据负责，别的不考虑。\n而到了dwm层，已经开始向我们的业务层靠拢，要根据数据来进行分析和轻度聚合，进行细粒度统计和沉淀。\n\n# \nDWS：data warehouse service 数据服务层，基于DWB上的基础数据，整合汇总成分析某一个主题域的服务数据层，一般是宽表。\n按照业务进行划分：流量、用户、订单....用于提供后续的业务查询，OLAP分析，数据分发等。\n\n# 报表数据\nADS：applicationData Service应用数据服务，该层主要是提供数据产品和数据分析使用的数据，\n一般会存储在ES、mysql等系统中供线上系统使用。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://obsidian-foveagge.oss-cn-beijing.aliyuncs.com/blog/PUO3mK.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/zyp0519/p/15353930.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("数据仓库"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);