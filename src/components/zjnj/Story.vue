<template>
  <div class="story">
    <appHead></appHead>
    <div
      class="section container-wp980 divtop"
      style=" padding-top:0px; padding-right:0px;padding-bottom:0px;"
    >
      <!-- <h2 class="ttl ttl--vertical-border" style="font-family: serif;">{{details.name}}</h2> -->
      <div class="company-intro" style="margin-top:0px;">
        <div v-html="details.content"></div>
      </div>
    </div>
        <!-- 资讯 -->
      <appFooter :msg-vla="msg"></appFooter>
  </div>
</template>
<script>
import appFooter from '../../pages/footer/footer';
import appHead from '../../pages/head/head';

// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appFooter
    ,
    appHead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
      details: '',
      baseData: null
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfodetail(){
      let data= {
        modul: 2,
        type: 4
      };
      this.$post('Infodetail', data).then(res=>{
        this.details = res.data;
        console.log(res)
      })
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
    this.getInfodetail();
    this.getBaseData();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>



