<template>
  <div>
    <appHead></appHead>
    <!-- 广告位轮播  top-->
    <div class="swiperblock divtop">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide
          class="sweiper_slide"
          v-for="(item, index) in infoListImg"
          :key="index"
          style="height: auto;"
        >
          <a :href="item.url">
          <img style="width: 100%" :src="item.img" class="index_img" />

          </a>
          <!-- <div class="swiper-btn"> -->
          <!-- <div class="swiper-button-next">
              <img class="swiper-button-img" src="../assets/img/zuo_sweiper.png" alt />
            </div>
            <div class="swiper-button-prev">
              <img class="swiper-button-img" src="../assets/img/you_sweiper.png" alt />
          </div>-->
          <!-- </div> -->
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <section style="width:80%;margin: 0 auto;" class>
      <div id="contents" style="position: relative;">
        <div class="commonSection" :class="iFmargin">
          <div class="inner">
            <!-- <p class="foreword scrollReveal" style="visibility: visible;">牛津国际教育<br class="spDisplay">人才招聘，期待您的到来！</p> -->
            <ul class="accordionWrap">
              <li
                class="scrollReveal"
                style="visibility: visible;"
                v-for="(item, index) in infoList"
                :key="index"
              >
                <div class="question">
                  <p>
                    <router-link :to="'detailB?type=2&id='+item.pk_id">{{item.name}}</router-link>
                  </p>
                  <router-link class="status" :to="'detailB?type=2&id='+item.pk_id"></router-link>
                </div>
                <!--         <div class="answer" style="position:relative;">
                  <p>广州天河区/3-5年/大专/0.8-1.2W/五险一金/周末双休/带薪年假/全勤奖/节日福利/员工旅游</p><a href="/a/lianxiwomen/rencaizhaopin/2019/1227/66.html" style="right:20px; position:absolute; bottom:20px; color:white;">查看详情</a>
                </div>-->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import "../../request/faq.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import appFooter from "../../pages/footer/footer";
import appHead from "../../pages/head/head";
// import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appFooter,
    appHead,
    swiper,
    swiperSlide
  },
  data() {
    return {
      iFmargin: "",
      msg: 1,
      infoListImg: [],
      infoList: [],
      page: 1, //页数
      // bannerArr: [
      //   // require("../../assets/images/banner1.jpg"),
      //   require("../../assets/images/banner2.jpg"),
      //   require("../../assets/images/banner3.jpg"),
      //   require("../../assets/images/banner4.jpg"),
      //   require("../../assets/images/banner5.jpg")
      // ],
      swiperOption: {
        // loop: true,
        
        // autoplay: {
        //   //自动播放
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          loop: true
        },
        effect: "fade",
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量
        centeredSlides: true, // active slide 居中
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: false //点击slide时显示/隐藏按钮
        }
      }
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfoListimg() {
      let data = {
        modul: 7,
        type: 1,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoListImg = res.data;
        // console.log(res);
      });
    },
    getInfoList() {
      // let that = this;
      let data = {
        modul: 7,
        type: 2,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoList = res.data;
        // setTimeout(function(){

        //   that.iFmargin = 'commonSectionhover'
        // },500)
        // console.log(res);
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
    this.getInfoListimg();
    this.getInfoList();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>
<style>
.swiper-wrapper {
  height: auto !important;
}
.commonSection {
  /* margin-top: 50px; */
  /* transition:margin-top 2s; */
  /* opacity: 0; */
}
.commonSectionhover {
  /* margin-top: 0px; */
  /* opacity: 1; */
}
</style>




