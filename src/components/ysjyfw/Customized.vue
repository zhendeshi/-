<template>
  <div class="customized divtop">
    <appHead></appHead>
    <!-- <h2 class="ttl ttl--vertical-border" style="font-family: serif;">{{infodetail.name}}</h2> -->
    <div class="company-intro" style="margin-top:0px;">
      <div id="company_imglist" style="width: 100%;margin: 0 auto;">
        <div v-html="infodetail.content"></div>
      </div>
    </div>

    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import appFooter from "../../pages/footer/footer";
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
      infodetail: {},
      baseData: {}
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfodetail() {
      let data = {
        modul: 5,
        type: 1
      };
      this.$post("Infodetail", data).then(res => {
        this.infodetail = res.data;
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
    this.getInfodetail();
    this.getBaseData();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>
<style>
/* .section {
      padding-bottom: 0px;}
		#company_imglist {
			display: flex;
			flex-direction: column;
		}
		#company_imglist>div {
			position: relative;
		}

		#company_imglist>div>div {
			position: relative;
			top: 200px;
			transition: top 1s;
			transition-timing-function: ease-out;
			z-index: 2;
			
		}

		.diva {
			top: 0px !important;
		}*/
</style> 




