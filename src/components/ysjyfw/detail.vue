<template>
  <div>
    <appHead></appHead>
    <div class="section container-w980 news-wrap divtop datalist" style="margin-top: 20px;">
      <div class="news-wrap-main">
        <article class="news-single">
          <header class="news-single__header">
            <h1
              class="news-single__ttl"
              style="    color: #000;
    font-family: serif;
    margin-top: 8px;"
            >{{details.name}}</h1>
            <div class="news-single-function">
              <div class="news-single__attr">
                <p class="news-single__date">
                  <time datetime>{{details.date_creation}}</time>
                </p>
                <ul class="news-single-cate">
                  <li class="news-single-cate__item">NEWS</li>
                </ul>
              </div>
            </div>
          </header>
          <div class="news-single__body">
            <div v-html="details.content"></div>
          </div>
        </article>

        <!-- 上下篇按钮 =====-->

        <!-- <div class="pagination">
          <ul class="pagination-list pagination-list--single">
            <li class="pagination-list__item">
              上一篇：
              <a
                href="/a/jituanzixun/jiamengdongtai/2020/0301/113.html"
              >让更多的孩子受益——重庆奥司夫特早幼一体幼儿园加入牛津国际</a>
            </li>
            <li class="pagination-list__item">
              下一篇：
              <a href="/a/jituanzixun/jiamengdongtai/2020/0301/115.html">牛津国际0~6岁早幼一体园成功进驻河南许昌</a>
            </li>
          </ul>
        </div>-->
      </div>
      <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">OICE学院</h4>
          <ul class="news-sidebar-nav">
            <li class="news-sidebar-nav__item category_10">
              <!-- <a @click="GetCollege(1)">家长课堂</a> -->
              <router-link to="college?type=1">家长课堂</router-link>
            </li>

            <li class="news-sidebar-nav__item category_10">
              <!-- <a @click="GetCollege(2)">趋势巡航</a> -->
              <router-link to="college?type=2">趋势巡航</router-link>
            </li>
             <li class="news-sidebar-nav__item category_10">
              <!-- <a @click="GetCollege(2)">趋势巡航</a> -->
              <router-link to="college?type=3">线上培训</router-link>
            </li>
          </ul>
        </section>
      </aside>
    </div>

    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
appHead;
import appFooter from "../../pages/footer/footer";
import appHead from "../../pages/head/head";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appHead,
    // swiper,
    appFooter
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
      page: 1, //页数
      details: ""
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    // GetCollege(val) {
    //   console.log(val)
    //   // let data = {
    //   //   page: 1,
    //   //   page_size: 100,
    //   //   fk_category_id: val,
    //   //   keywords: ""
    //   // };
    //   // this.$post("GetCollege", data).then(res => {
    //   //   this.infoList = res.data;
    //   //   console.log(res);
    //   // });
    // },
    getDetail(oid) {
      let data = {
        pk_id: oid
      };
      this.$post("GetDetail", data).then(res => {
        this.details = res.data;
        console.log(res);
      });
    }
  },
  //定义这个sweiper对象
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    this.content = this.$route.query.id;
    this.getDetail(this.$route.query.id);
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>





