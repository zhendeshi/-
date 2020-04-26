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
        <!-- 上下篇按钮 -->
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
        </div> -->
      </div>
      <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">牛津园所</h4>
          <ul class="news-sidebar-nav">
            <li class="news-sidebar-nav__item category_10">
              <router-link to="survey">集团概况</router-link>
            </li>
            <li class="news-sidebar-nav__item category_10">
              <router-link to="idea">教育教学</router-link>
            </li>
            <li class="news-sidebar-nav__item category_10">
              <router-link to="academy">牛津园所</router-link>
            </li>
            <!-- <li class="news-sidebar-nav__item category_10">
              <router-link to="story">品牌故事</router-link>
            </li> -->
          </ul>
        </section>
      </aside>
    </div>

    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import appHead from '../../pages/head/head'
import appFooter from '../../pages/footer/footer';
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appHead,
    appFooter
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      page: 1, //页数
      bannerArr: [
        // require("./../assets/images/banner1.jpg"),
        // require("./../assets/images/banner2.jpg"),
        // require("./../assets/images/banner3.jpg"),
        // require("./../assets/images/banner4.jpg"),
        // require("./../assets/images/banner5.jpg")
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          //自动播放
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        },
        effect: "fade",
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量
        centeredSlides: true, // active slide 居中
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: false //点击slide时显示/隐藏按钮
        }
      },
      details: ''
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getDetail(oid){
      let data = {
        pk_id: oid
      };
      this.$post('GetDetail', data).then(res=>{
        this.details = res.data
        console.log(res)
      })
    }
  },
  //定义这个sweiper对象
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    this.content = this.$route.query.id
    this.getDetail(this.$route.query.id)
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>





