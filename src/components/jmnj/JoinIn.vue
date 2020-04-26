<template>
  <div class="section container-wp980 divtop" style=" padding-top:0px; padding-right:0px;">
    <appHead></appHead>
    <!--<h2 class="ttl ttl--vertical-border" style="font-family: serif;">办学优势</h2>-->
    <div class="company-intro" style="margin-top:0px;">
      <div id="company_imglist" style="width: 100%;margin: 0 auto;">
        <div v-for="(item, index) in infoList" :key="index">
          <div v-html="item.content"></div>
        </div>
      </div>
    </div>

    <!-- 资讯 -->
      <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import appFooter from '../../pages/footer/footer';
import appHead from '../../pages/head/head'

// import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  components: {
    appFooter,
    appHead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
      appFooter,
      page: 1, //页数,
      infoList: {},
      baseData:{},
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfoList() {
      let data = {
        modul: 4,
        type: 2,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        console.log(res);
        this.infoList = res.data;
        setTimeout(function(){
          funa()
        },500)

      });
    },
    //获取基础数据（底部）
    getBaseData() {
      let data = {};
      this.$get("BaseData", data).then(res => {
        this.baseData = res.data;
        console.log(res);
      });
    },
        //获取基础数据（底部）
    getBaseDataa() {
      let data = {
        modul: 4,
        type: 2
      };
      this.$post("Infodetail", data).then(res => {
        // this.baseData = res.data;
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
  created() {
    this.getBaseData();
    this.getBaseDataa();
    this.getInfoList();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
function funa(){
  // objectFitImages('.img--of');
  // objectFitImages('.img--of--contain');
  // objectFitImages('.img--of--pos-left');
  console.log("1111");
  let imgLists = $("#company_imglist > div");
  let winscr = $(window).scrollTop();
  let winhei = $(window).height();
  for (let i = 0; i < imgLists.length; i++) {
    console.log(winscr);
    var offSetmax = $("#company_imglist > div")
      .eq(i)
      .offset().top;
    if (winscr > offSetmax - winhei) {
      $("#company_imglist > div")
        .eq(i)
        .children("div")
        .addClass("diva");
    }
  }
  $(window).scroll(function() {
    // let imgLists = $('#company_imglist > div')
    // console.log($(document).scrollTop())

    for (let i = 0; i < imgLists.length; i++) {
      // var getDiv_md = imgLists[];

      var offSetmax = imgLists.eq(i).offset().top;
      console.log($(window).scrollTop());
      console.log(offSetmax + "==" + $(window).height());
      if ($(window).scrollTop() >= offSetmax - $(window).height()) {
        console.log(i + "---------------------------------");
        $("#company_imglist > div")
          .eq(i)
          .children("div")
          .addClass("diva");
        // return
      }
      // console.log(i + '-' + offSetmax)
    }
  });
  $(function() {
    // let $header = $("#header");
    // let $foot_fix = $('.foot-fixed-inquiry');
    let $coll_tgl = $(".collapse-tgl");
    $coll_tgl.on("click", function() {
      $(this).toggleClass("open");
    });

    // let $menu_tgl = $("#header-tgl-btn");
    // $menu_tgl.on("click", function() {
      // $header.toggleClass("menu-open");
    // });
  });
}
</script>
<style>
.section {
  padding-bottom: 0px;
}
#company_imglist {
  display: flex;
  flex-direction: column;
}
#company_imglist > div {
  position: relative;
}

#company_imglist > div > div {
  position: relative;
  top: 200px;
  transition: top 1s;
  transition-timing-function: ease-out;
  z-index: 2;
}

.diva {
  top: 0px !important;
}
</style>




