(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8af2"],{3076:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("appHead"),s("div",{staticClass:"section container-w980 news-wrap divtop datalist",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"news-wrap-main"},[s("article",{staticClass:"news-single"},[s("header",{staticClass:"news-single__header"},[s("h1",{staticClass:"news-single__ttl",staticStyle:{color:"#000","font-family":"serif","margin-top":"8px"}},[t._v(t._s(t.details.name))]),s("div",{staticClass:"news-single-function"},[s("div",{staticClass:"news-single__attr"},[s("p",{staticClass:"news-single__date"},[s("time",{attrs:{datetime:""}},[t._v(t._s(t.details.date_creation))])]),t._m(0)])])]),s("div",{staticClass:"news-single__body"},[s("div",{domProps:{innerHTML:t._s(t.details.content)}})])])]),s("aside",{staticClass:"news-wrap-sidebar"},[s("section",{staticClass:"news-sidebar-widget"},[s("h4",{staticClass:"news-sidebar__ttl"},[t._v("牛津园所")]),s("ul",{staticClass:"news-sidebar-nav"},[s("li",{staticClass:"news-sidebar-nav__item category_10"},[s("router-link",{attrs:{to:"survey"}},[t._v("集团概况")])],1),s("li",{staticClass:"news-sidebar-nav__item category_10"},[s("router-link",{attrs:{to:"idea"}},[t._v("教育教学")])],1),s("li",{staticClass:"news-sidebar-nav__item category_10"},[s("router-link",{attrs:{to:"academy"}},[t._v("牛津园所")])],1)])])])]),s("appFooter",{attrs:{"msg-val":t.msg}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"news-single-cate"},[s("li",{staticClass:"news-single-cate__item"},[t._v("NEWS")])])}],n=s("58c9"),l=s("fd36"),r={name:"HelloWorld",components:{appHead:n["a"],appFooter:l["a"]},data:function(){return{page:1,bannerArr:[],swiperOption:{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination"},effect:"fade",slidesPerView:"auto",centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",hideOnClick:!1}},details:""}},methods:{linkTo:function(t){this.$router.push(t)},getDetail:function(t){var e=this,s={pk_id:t};this.$post("GetDetail",s).then((function(t){e.details=t.data,console.log(t)}))}},computed:{},mounted:function(){this.content=this.$route.query.id,this.getDetail(this.$route.query.id),sessionStorage.setItem("oneData","onedata")}},o=r,c=s("2877"),d=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b8af2.b23a43fe.js.map