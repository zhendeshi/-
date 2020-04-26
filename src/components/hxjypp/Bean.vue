<template>
  <div class="international divtop">
    <appHead></appHead>
    <section class>
      <div
        class="section container-wp980"
        style=" padding-top:0px; padding-right:0px;padding-bottom:0px;"
      >
        <!-- <h2 class="ttl ttl--vertical-border" style="font-family: serif;">{{infodetail.name}}</h2> -->
        <div class="company-intro" style="margin-top:0px;">
            <div v-html="infodetail.content"></div>
          <!-- <p>
            <img
              alt
              src="../../assets/images/1-2003011S135428.jpg"
              style="width: 100%; height: 100%;"
            />
          </p> -->
        </div>
      </div>
    </section>
        <!-- 资讯 -->
   <appFooter :msg-val="msg"></appFooter>
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
    appFooter,
    appHead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
    infodetail:'',
    baseData: {},
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
     getInfodetail(){
      let data = {
        modul:3,
        type: 2
      }
      this.$post('Infodetail',data).then(res=>{
        console.log(res)
        this.infodetail = res.data
      })
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
    this.getBaseData();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>



