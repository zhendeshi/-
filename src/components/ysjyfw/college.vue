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
          <a style="display: block;" :href="item.url">
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

    <div class="section container-w980 news-wrap divtop datalist" style="margin-top: 20px;">
      <div class="news-wrap-main">
        <article class="news-list" v-for="(item, index) in infoList" :key="index">
          <h2 class="news-list__ttl">
            <router-link style="font-family: auto;" :to="'detailA?id='+item.pk_id">{{item.name}}</router-link>
          </h2>
          <div class="news-list__innr">
            <div class="news-list__img">
              <router-link :to="'detailA?id='+item.pk_id">
                <img :srcset="item.img" alt class="w100p" style="height:auto;" />
              </router-link>
            </div>
            <div class="news-list__text">
              <div class="news-list__attr">
                <p class="news-list__date">
                  <time datetime>{{item.date_creation}}</time>
                </p>
                <ul class="news-list-cate">
                  <li class="news-list-cate__item">NEWS</li>
                </ul>
              </div>
              <div class="news-list__excerpt">
                <p>{{item.remark}}</p>
              </div>
              <div class="news-list__read-more">
                <router-link class="btn btn--green btn--thin" :to="'detailA?id='+item.pk_id">查看详情</router-link>
              </div>
            </div>
          </div>
        </article>
        <div v-if="!infoList" class="tips">暂无相关信息</div>

      </div>
      <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">OICE学院</h4>
          <ul class="news-sidebar-nav">
            <li class="news-sidebar-nav__item category_10">
              <a @click="GetCollege(1)">家长课堂</a>
            </li>

            <li class="news-sidebar-nav__item category_10">
              <a @click="GetCollege(2)">趋势巡航</a>
            </li>
             <li class="news-sidebar-nav__item category_10">
              <a @click="GetCollege(3)">线上培训</a>
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
import appFooter from "../../pages/footer/footer";
import appHead from "../../pages/head/head";

import { swiper, swiperSlide } from "vue-awesome-swiper";
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
      },
      msg: 1,
      page: 1, //页数
      infoList: [],
      baseData: {},
      infoListImg: []
    };
  },
  methods: {
        getInfoListimg() {
      let data = {
        modul: 5,
        type: 5,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoListImg = res.data;
        // console.log(res);
      });
    },
    linkTo(to) {
      this.$router.push(to);
    },
    GetCollege(val) {
      let data = {
        page: 1,
        page_size: 10000,
        fk_category_id: val,
        keywords: ""
      };
      this.$post("GetCollege", data).then(res => {
        this.infoList = res.data;
        console.log(res);
      });
    },
    getInfoList() {
      let data = {
        modul: 5,
        type: 2,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoList = res.data;
        console.log(res);
      });
    },
    //获取基础数据（底部）
    getBaseData() {
      let data = {};
      this.$get("BaseData", data).then(res => {
        this.baseData = res.data;
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
    console.log(this.$route.query.type)
    this.$route.query.type ? this.GetCollege(this.$route.query.type) : this.getInfoList();
    this.getBaseData();
    this.getInfoListimg()
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>






<style scoped>
.tips {
      width: 100%;
    text-align: center;
    font-size: 1.6em;
    color: #999;
    letter-spacing: 1px;
}
</style>