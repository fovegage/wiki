(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{522:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"美团demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#美团demo"}},[s._v("#")]),s._v(" 美团demo")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('def meituan():\n    """\n    需要管理 websocket 链接   这些websocket服务常驻\n    :return:\n    """\n    signData = {\n        "url": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1677641906206",\n        "headers": {},\n        "method": "post",\n        "data": "optimus_code=10&optimus_risk_level=71&pageSize=20&page_index=0&offset=0&content_personalized_switch=0&sort_type=&slider_select_data=&activity_filter_codes=&wm_latitude=40105324&wm_longitude=116297288&wmUuidDeregistration=0&wmUserIdDeregistration=0&openh5_uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8&uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8"\n    }\n    # print(f\'(await window.H5guard.sign({json.dumps(signData)}))\')\n    # const data = (async () => {\n    #     return await CSVtoJSON().fromFile(\'./input.csv\')\n    # })\n    js = \'\'\'\n    (function (){\n    var sign1 = "";\n    let signData = {"url": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1677641906206", "headers": {}, "method": "post", "data": "optimus_code=10&optimus_risk_level=71&pageSize=20&page_index=0&offset=0&content_personalized_switch=0&sort_type=&slider_select_data=&activity_filter_codes=&wm_latitude=40105324&wm_longitude=116297288&wmUuidDeregistration=0&wmUserIdDeregistration=0&openh5_uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8&uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8"}\n    H5guard.sign(signData).then((signreq) => {\n        # sign1 = signreq;\n        console.log(signreq)\n    })\n    # console.log(sign1)\n    # return sign1;\n    })()\n    \'\'\'\n    #     // H5guard.sign(signData).then((signreq) => { return JSON.stringify(signreq)})\n    js1 = \'\'\'\n    var signData = {"url": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1677641906206", "headers": {}, "method": "post", "data": "optimus_code=10&optimus_risk_level=71&pageSize=20&page_index=0&offset=0&content_personalized_switch=0&sort_type=&slider_select_data=&activity_filter_codes=&wm_latitude=40105324&wm_longitude=116297288&wmUuidDeregistration=0&wmUserIdDeregistration=0&openh5_uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8&uuid=18639df5e45c8-0c138b3ed7158a-16525635-16a7f0-18639df5e45c8"}\n    H5guard.sign(signData).then((signreq) => { return signreq.headers.mtgsig})\n    \'\'\'\n    command = {\n        \'method\': "Runtime.evaluate",\n        \'id\': request_id,\n        \'params\': {\n            "expression": js1,\n            "awaitPromise": True\n        }\n    }\n    print(json.dumps(command))\n    baidu = "ws://192.168.12.126:9222/devtools/page/7113CB96A91DBA00DD028A4F5AB2832D"\n    # baidu = "ws://192.168.12.155:31333/devtools/page/D2964E71C1F9A6DD9E4C3084D9478E4A"\n    conn = websocket.create_connection(baidu)\n    conn.send(json.dumps(command))\n    msg = json.loads(conn.recv())\n    conn.close()\n    print(msg)\n    # print(msg[\'result\'][\'result\'][\'value\'])\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://github.com/Zenika/alpine-chrome\nhttps://www.cnblogs.com/imgss/p/12852595.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);