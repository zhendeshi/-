<template>
  <div class="survey divtop">
    <appHead></appHead>
    <div v-html="infodetail.content"></div>
      <!-- <img src="../../assets/images/1-20022QJ13C20.jpg" alt="">
      <img src="../../assets/images/1-20022QJ121431.jpg" alt="">
      <img src="../../assets/images/1-20022QJ02I37.jpg" alt="">
      <img src="../../assets/images/1-20022QJ05Q29.jpg" alt="">
      <img src="../../assets/images/1-191230143K45S.jpg" alt="">
      <img src="../../assets/images/1-200109120045N2.jpg" alt="">
      <img src="../../assets/images/1-20010G51424W0.jpg" alt="">
      <img src="../../assets/images/1-20010G51440V5.jpg" alt="">
      <img src="../../assets/images/1-20010G51452P4.jpg" alt=""> -->
          <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import appFooter from '../../pages/footer/footer';
import appHead from '../../pages/head/head'

// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appFooter,
    appHead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
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
      infodetail: {},
      baseData: {}
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    // 获取单条详情
    getInfodetail (){
      let data = {
        modul: 2,
        type: 1
      };
      this.$post("Infodetail", data).then(res => {
        console.log(res)
        this.infodetail = res.data
      });
    },
        //获取基础数据（底部）
    getBaseData() {
      let data = {};
      this.$get("BaseData", data).then(res => {
        this.baseData = res.data
        console.log(res);
      });
    },
  },
  //定义这个sweiper对象
  computed: {
    
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }

   
  },
  mounted() {
    this.getInfodetail();
    this.getBaseData()
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};

</script>



