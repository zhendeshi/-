(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2169b6"],{c2d5:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("appHead"),e("div",{staticClass:"section container-w980 news-wrap divtop datalist",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"news-wrap-main"},[e("article",{staticClass:"news-single"},[e("header",{staticClass:"news-single__header"},[e("h1",{staticClass:"news-single__ttl",staticStyle:{color:"#000","font-family":"serif","margin-top":"8px"}},[t._v(t._s(t.details.name))]),e("div",{staticClass:"news-single-function"},[e("div",{staticClass:"news-single__attr"},[e("p",{staticClass:"news-single__date"},[e("time",{attrs:{datetime:""}},[t._v(t._s(t.details.date_creation))])]),t._m(0)])])]),e("div",{staticClass:"news-single__body"},[e("div",{domProps:{innerHTML:t._s(t.details.content)}})])])]),e("aside",{staticClass:"news-wrap-sidebar"},[e("section",{staticClass:"news-sidebar-widget"},[e("h4",{staticClass:"news-sidebar__ttl"},[t._v("OICE学院")]),e("ul",{staticClass:"news-sidebar-nav"},[e("li",{staticClass:"news-sidebar-nav__item category_10"},[e("router-link",{attrs:{to:"college?type=1"}},[t._v("家长课堂")])],1),e("li",{staticClass:"news-sidebar-nav__item category_10"},[e("router-link",{attrs:{to:"college?type=2"}},[t._v("趋势巡航")])],1),e("li",{staticClass:"news-sidebar-nav__item category_10"},[e("router-link",{attrs:{to:"college?type=3"}},[t._v("线上培训")])],1)])])])]),e("appFooter",{attrs:{"msg-val":t.msg}})],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"news-single-cate"},[e("li",{staticClass:"news-single-cate__item"},[t._v("NEWS")])])}],n=e("fd36"),l=e("58c9");l["a"];var o={name:"HelloWorld",components:{appHead:l["a"],appFooter:n["a"]},data:function(){return{msg:1,page:1,details:""}},methods:{linkTo:function(t){this.$router.push(t)},getDetail:function(t){var s=this,e={pk_id:t};this.$post("GetDetail",e).then((function(t){s.details=t.data,console.log(t)}))}},computed:{},mounted:function(){this.content=this.$route.query.id,this.getDetail(this.$route.query.id),sessionStorage.setItem("oneData","onedata")}},r=o,c=e("2877"),d=Object(c["a"])(r,a,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2169b6.75c8bed1.js.map