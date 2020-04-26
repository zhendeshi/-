<template>
  <div class="hello divtop">
    <appHead></appHead>
    <div class="cen" >
      <div class="video_block">
        <video
          id="video"
          controls
          style="width: 100%; height: 100%;object-fit:contain"
          :src="indexData.video"
          type="video/mp4"
        >
          <!-- <source :src="indexData.video" type="video/mp4" /> -->
        </video>
      </div>
    </div>

    <!-- 广告位轮播  top-->
    <div class="swiperblock">
      <swiper height="750px" :options="swiperOption" ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide class="sweiper_slide" v-for="(item, index) in bannerArr" :key="index">
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

    <!-- 新闻资讯 -->
    <section class="section index_news">
      <div class="container-w1180">
        <h2 class="ttl ttl--vertical-border ttl--eng index_news__ttl">
          新闻资讯
          <span class="ttl__sub">集团资讯</span>
        </h2>
        <dl class="index_news-list">
          <div
            class="index_newx"
            style="width: 100%;display: flex; align-items: center"
            v-for="(item, index) in indexNews"
            :key="index"
          >
            <dt class="index_news-list__head">
              <!-- <span class="index_news-list__date">{{item.date_creation}}</span> -->
              <span class="index_news-list__cate">NEWS</span>
            </dt>
            <dd class="index_news-list__body">
              <!-- <a href="/a/jituanzixun/jiamengdongtai/2020/0301/115.html"></a> -->
              <router-link :to="'detail?type=1&id='+item.pk_id">{{item.name}}</router-link>
            </dd>
          </div>
        </dl>
        <p class="index_news__more">
          <!-- <a href="/a/jituanzixun" style="margin-bottom: 20px;" class="btn btn--green">查看更多</a> -->
          <router-link to="aggregate" style="margin-bottom: 20px;" class="btn btn--green">查看更多</router-link>
        </p>
      </div>
    </section>

    <!-- 集团概况 -->
    <section class="section section--bg-paper index_about">
      <h2 class="ttl ttl--vertical-border ttl--eng index_about__ttl">
        <span class="sml">{{indexData.title}}</span>
        <br />
        <p style="font-family: cursive;margin-top: 10px;">{{indexData.name}}</p>
        <span class="ttl__sub">
          {{indexData.remark}}
          <br />
        </span>
      </h2>
      <div class="index_about__body">
        <!-- <p class="txt--lead">起步，<br class="xs-visible">就与国际同步</p> -->
        <p class="txt--lead">{{indexData.advtips}}</p>
        <p
          class="txt--center w400 mb10"
          style="text-indent: 2em;display:flex; justify-content:center; text-align:left; width:850px; margin:0 auto;"
        >
          <span v-html="indexData.descript"></span>
        </p>
      </div>
      <p class="txt--center index_about__more">
        <a :href="indexData.profile_url" class="btn btn--green btn--large">了解更多</a>
      </p>
      <div class="index_about-vid">
        <!-- <a href="https://www.youtube.com/watch?v=68rw0OnioOY" data-lity="data-lity"> -->
        <img srcset="./../assets/images/pic_about-movie.6e0518d5_02.png" alt class="w100" />
        <img class="play" style="width: 50px;height: 50px;" src="./../assets/images/bofan.png" alt />
        <!-- <div class="index_about-vid-text">
							
						
						<p class="index_about-vid-text__play">PLAY MOVIE!</p>
						<i class="icon-play"></i>
        </div>-->
        <!-- </a> -->
      </div>
    </section>

    <!-- 核心教育品牌 -->
    <!-- //.index_about -->
    <section class="section index_tour">
      <div class="container-w1180">
        <h2 class="ttl ttl--vertical-border ttl--eng">
          核心教育品牌
          <span class="ttl__sub">
            牛津国际
            <br />英豆尔Endearing
            <br />纽津堡New Genius Castle
          </span>
        </h2>
      </div>
      <div
        class="index_tour-blk anim-blk anim-start"
        v-for="(item, index) in indexBrand"
        :key="index"
      >
        <div
          :class="{'index_tour-blk__img': true, 'right' :index%2 == 0 ? true : false,'left' :index%2 == 1 ? true : false,'anim-wrap': true}"
        >
          <div class="anim-opa" id>
            <img :src="item.img" alt />
          </div>
          <div class="anim-item"></div>
        </div>
        <div class="index_tour-blk__text left">
          <h3 class="index_tour-blk__ttl">
            <!-- <div class="anim-wrap anim-warpone delay-1"> -->
            <div class="anim-wrap anim-warpone">
              <span class="eng anim-opa" style="font-size: 14px; color:#9a0000;">核心教育品牌</span>
              <div class="anim-item"></div>
            </div>
            <!-- <div class="anim-wrap anim-warptwo delay-2"> -->
            <div class="anim-wrap anim-warptwo">
              <span class="anim-opa" style="font-family: 黑体;">{{item.name}}</span>
              <ul class="ula">
                <li
                  class="lia"
                  v-for="(itemA, indexA) in item.descript"
                  :key="indexA"
                >{{itemA.name}}</li>
              </ul>
            </div>
          </h3>
          <!-- <div class="anim-wrap anim-warpthree delay-3"> -->
          <div class="anim-wrap anim-warpthree">
            <p class="index_tour-blk__lead anim-opa">{{item.remark}}</p>
            <div class="anim-item"></div>
          </div>
          <div class="index_tour-blk__to-detail anim-wrap anim-warpfour">
            <!-- <a href="/a/hexinjiaoyupinpai/2019/1114/25.html" class="btn btn--green anim-opa">了解更多</a> -->
            <a :href="item.url" class="btn btn--green anim-opa">了解更多</a>
            <div class="anim-item"></div>
          </div>
        </div>
      </div>

      <div class="index_tour-all-tour">
        <p class="lead"></p>
        <!-- <p class="lead">WHAT WE DO？</p> -->
        <p class="txt--center">
          <!-- <a :href="indexData.edu_url" class="btn btn--green btn--large"></a> -->
          <router-link to="idea.html" class="btn btn--green btn--large">牛津国际教育体系</router-link>
        </p>
      </div>
      <div class="container-w1300">
        <section class="index_tour-for-student clearfix">
          <!-- <h3 class="index_tour-for-student__ttl" style="font-family: 黑体;">牛津国际教学系统<br
							class="xs-visible">
          </h3>-->
          <h3 class="index_tour-for-student__ttl" style="font-family: 黑体;">
            {{indexData.edu_sys}}
            <br class="xs-visible" />
          </h3>
          <div class="index_tour-for-student__img">
            <img :src="indexData.edu_img" alt class="img--of--pos-left" />
          </div>

          <p class="index_tour-for-student__lead">
            <span v-html="indexData.edu_remark"></span>
          </p>
          <p class="index_tour-for-student__more">
            <router-link to="idea.html" class="btn btn--green btn--thin">查看详情</router-link>
          </p>
        </section>
      </div>
    </section>

    <!-- 加盟牛津 -->
    <section class="section section--bg-paper index_staff">
      <div class="container-w1300">
        <h2 class="ttl ttl--vertical-border ttl--eng index_staff__ttl">
          加盟牛津
          <br />
          <span style="font-size: .6em;font-weight: lighter;letter-spacing: 2px;">获取幼儿园定制化整体解决方案</span>
        </h2>

        <section class="index_staff-blk clearfix" v-for="(time, index) in indexJoin" :key="index">
          <div class="index_staff-blk__img">
            <img :srcset="time.img" alt class="w100" />
          </div>
          <div class="index_staff-blk__text">
            <h3 class="index_staff-blk__name">
              <span class="catch">{{time.name}}</span>
            </h3>
            <p class="index_staff-blk__prof">
              <span v-html="time.remark"></span>
            </p>

            <p class="index_staff-blk__to-detail">
              <!-- <a :href="time.url" class="btn btn--green btn--thin">{{index == 0 ? '加盟优势' : '服务优势'}}</a> -->
              <router-link
                class="btn btn--green btn--thin"
                :to="index == 0 ? 'joinIn' : 'service'"
              >{{index == 0 ? '加盟优势' : '服务优势'}}</router-link>
            </p>
          </div>
        </section>

        <p class="txt--center txt--centera clear">
          <!-- <a :href="indexData.join_url" class="btn btn--green btn--large">立即加盟</a> -->
          <a class="btn btn--green btn--large" :href="baseData.consult_url">立即加盟</a>
        </p>
      </div>
    </section>

    <!-- 牛津园所 -->
    <section class="section section--bg-paper index_blog">
      <div class="container-w1300">
        <h2 class="ttl ttl--vertical-border ttl--eng">
          牛津园所
          <span class="ttl__sub">一园一目标，为每所园差异化定制办园机制</span>
        </h2>
        <!-- indexGarden -->
        <div class="index_blog-list">
          <article
            class="index_blog-list__item"
            v-for="(item, index) in indexGarden"
            :key="index"
            v-show="index < 3"
          >
            <p class="index_blog-list__img">
              <a href="/a/niujinyuansuo/2019/1224/58.html" target="_blank">
                <img :src="item.img" alt class="w100p hover--opacity" />
              </a>
            </p>
            <h3 class="index_blog-list__ttl">
              <a href="/a/niujinyuansuo/2019/1224/58.html" target="_blank">{{item.name}}</a>
            </h3>
            <p class="index_blog-list__excerpt">{{item.remark}}</p>
            <p class="index_blog-list__more">
              <router-link class="btn btn--green btn--thin" :to="'detailZ?type=1&id='+item.pk_id">
                查看详情
                <i class="icon_external-link">
                  <img src="./../assets/images/icon_external-link.svg" alt />
                </i>
              </router-link>
            </p>
          </article>
        </div>

        <p class="txt--center">
          <router-link to="Academy" class="btn btn--green btn--large">
            查看更多
            <i class="icon_external-link">
              <img src="./../assets/images/icon_external-link.svg" alt />
            </i>
          </router-link>
        </p>
      </div>
    </section>
    <!-- 资讯 -->
    <!-- <section class="section foot-inquiry" :style="{backgroundImage: 'url('+baseData.consult_img+')'}">
      <div class="container-w1180">
        <h2 class="foot-inquiry__ttl" style="margin-top: 135px;"></h2>
        <p>
          <br class="xs-visible" />
    </p>-->
    <!-- target="view_window" -->
    <!-- <p><a  href="javascript:openWin()"  class="btn btn--orange foot-inquiry__btn hover_text" style="position: relative; top: 86px;color: #012b5b; max-width: 220px; height: 66px;">咨询</a></p> -->
    <!-- <p>
          <a
            :href="baseData.consult_url"
            target="_blank"
            class="btn btn--orange foot-inquiry__btn hover_text"
            style="position: relative; top: 86px;color: #012b5b; max-width: 220px; height: 66px;"
          >咨询</a>
        </p>
      </div>
    </section>-->
    <!-- <div v-for="(item, index) in arr" :key="index" :style="{fontSize: (item.b+"px")}">{{item.a}}</div> -->
    <!-- 底部 -->
    <!-- <footer id="footer" class="footer">
      <div class="footer_block">
        <div class="footer__innr clearfix">

          <p class="address">牛津国际文化教育集团</p>
          <p class="address">广州津典科教技术开发有限公司</p>
          <div class="info_phone">
            <p>
              全国统一服务热线：
              <span class="color_white">400-0969-869</span>
            </p>
            <p style="margin-top: 18px; word-break: break-all;">
              公司总机：
              <span class="color_white">020-38019217</span>
              <span class="hoenzhon">|</span>公司传真：
              <span class="color_white">020-38029259</span>
              <span class="hoenzhon">|</span>公司邮箱：
              <span class="color_white">oxfordsky@foxmail.com</span>
            </p>
            <p style="margin-top: 9px;">
              总部地址：
              <span class="color_white">中国·广州·珠江新城</span>
            </p>
            <p style="margin-top: 22px;">
              加盟顾问：
              <span class="color_white">卢老师 186 5369 8023</span>
              <span class="color_white">李老师 181 0270 5220</span>
            </p>
          </div>
          <div class="ahref">
            <p class="ahref_p">
              <a href="/a/lianxiwomen/lianxifangshi/">联系我们</a>
              <span class="hoenzhon">|</span>
              <a href>法律声明</a>
            </p>
            <p class="copyright">Copyright© 广州津典科教技术开发有限公司 备案编号：粤ICP备06096457号</p>
          </div>
        </div>
        <div class="footer-logoImg">
          <div class="name_img">
            <p style="font-size: 13px;width: 120%">牛津国际文化教育</p>
            <div style="
          background: #5379a0;
          padding: 5px;
      ">
              <img style="width: 80px;" src="./../assets/images/fwh.jpg" />
              <p style="font-size: 12px;">微信服务号</p>
            </div>
          </div>
          <div class="name_img">
            <p style="font-size: 12px;width: 120%">牛津国际早幼教</p>
            <div style="
         background: #5379a0;
         padding: 5px;
     ">
              <img style="width: 80px;" src="./../assets/images/dyh.jpg" />
              <p style="font-size: 12px;">微信订阅号</p>
            </div>
          </div>
          <div class="name_img">
            <p style="font-size: 12px;width: 120%">牛津国际文化教育集团</p>
            <div style="
          background: #5379a0;
          padding: 5px;
      ">
              <img style="width: 80px;" src="./../assets/images/sjwl.png" />
              <p style="font-size: 12px;">手机网站</p>
            </div>
          </div>
        </div>
      </div>
    </footer>-->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import appFooter from "../pages/footer/footer";

import appHead from "../pages/head/head";

import $ from "jquery";
$(function() {
  console.log("123");
});
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide,
    appFooter,
    appHead
  },
  data() {
    return {
      msg: 1,
      page: 1, //页数
      bannerArr: [],
      arr: [
        { a: 1, b: 20 },
        { a: 2, b: 30 },
        { a: 3, b: 40 }
      ],
      swiperOption: {
        autoplay: true,
        // autoplay: {
        //   //自动播放
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
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
      // infoList: [],//轮播图
      indexNews: [], //新闻数据
      indexData: {}, //集团概况
      indexJoin: [], //加盟牛津
      indexBrand: [], //核心教育品牌
      indexGarden: [], //牛津园所
      baseData: {} //基础数据
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    // 获取首页数据
    getInfoList() {
      let data = {
        modul: "1",
        type: "1",
        page_size: 10,
        keywords: " ",
        page: 1
      };
      this.$post("InfoList", data).then(res => {
        this.bannerArr = res.data;
        console.log(res);
      });
    },
    // 获取首页轮播图
    getIndexBanner() {
      let data = {};
      this.$get("IndexBanner", data).then(res => {
        this.bannerArr = res.data;
        console.log(res);
      });
    },
    // 获取首页牛津园所
    getIndexGarden() {
      let data = {
        page: 1,
        page_size: 3
      };
      this.$post("IndexGarden", data).then(res => {
        this.indexGarden = res.data;
        console.log(res);
      });
    },
    // 获取首页数据
    getIndexData() {
      let data = {
        page: 1
      };
      this.$get("IndexData", data).then(res => {
        let str = res.data.descript.replace(
          /\r\n/g,
          "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        );
        res.data.descript = str;

        this.indexData = res.data;
        setTimeout(function(){
          loading()
        },800)
        console.log(res);
      });
    },
    //获取首页核心教育品牌
    getIndexBrand() {
      let data = {
        page_size: 10
      };
      this.$post("IndexBrand", data).then(res => {
        // for (let i = 0; i < res.data.length; i++) {
        //   let arr = res.data[i].descript;
        //   let arras = arr.split("\r\n");
        //   res.data[i].descript = arras;
        // }
        this.indexBrand = res.data;

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
    },
    //获取首页牛津加盟信息
    getIndexJoin() {
      let data = {};
      this.$get("IndexJoin", data).then(res => {
        this.indexJoin = res.data;
        console.log(res);
      });
    },
    //获取园长介绍
    getDirectorInfo() {
      let data = {};
      this.$get("DirectorInfo", data).then(res => {
        console.log(res);
      });
    },
    //获取首页新闻
    getIndexNews() {
      let data = {
        page_size: 5
      };
      this.$post("IndexNews", data).then(res => {
        console.log(res.data[0].date_creation.split(" ")[0]);

        for (let i = 0; i < res.data.length; i++) {
          res.data[i].date_creation = res.data[i].date_creation.split(" ")[0];
        }
        this.indexNews = res.data;
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
    this.getInfoList(); //列表数据
    // this.getIndexBanner(); //轮播图
    this.getIndexGarden(); //牛津园所
    this.getIndexData(); //首页数据
    this.getIndexBrand(); //核心教育品牌
    this.getBaseData(); //基础数据
    this.getIndexJoin(); //加盟牛津信息
    this.getDirectorInfo(); //园长介绍
    this.getIndexNews(); //首页新闻
    
  },
  mounted() {
    // sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
//判断是什么端
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
IsPC();

window.onresize = function() {
  // let result = window.matchMedia('(max-width: 768px)');

  // if (result.matches) {
  if (!IsPC()) {
    //console.log('页面宽度小于等于768px');
    //写移动端的js效果
    console.log("res");
    // $(".swiper-wrapper").attr("style", "height: 30vh");
    // $("#mv").attr("style", "height: 30vh");

    // $(".mv-swiper-pagination").attr("style", "bottom: 10px !important");
  } else {
    //console.log('页面宽度大于768px');
    // $('.swiper-wrapper').attr('style', 'height: 100vh')
    // $("#mv").attr("style", "height: 100vh");
    // $(".mv-swiper-pagination").attr("style", "bottom: 80px !important");
    //写页面宽度大于768px的js效果
  }
};
// console.log(window.location.href)
// window.location.href = 'http://www.baidu.com'
console.log("res");

// window.addEventListener("load", function() {
function loading(){
  console.log("res");

  var isIphone = navigator.userAgent.indexOf("iPhone") >= 0;
  console.log("res");
  if (isIphone) {
    $(".index_about-vid").click(function() {
      window.location = "http://niujin.kailly.com/niu1.mp4";
    });
  } else {
    $(".index_about-vid").on("click", function() {
      // 视频播放
      console.log("res");
      $("#video")
        .get(0)
        .play();

      $(".cen").show();
      $("body").addClass("prevetwinow");
    });
  }

  $(".cen").on("click", function() {
    // 视频播放
    $("#video")
      .get(0)
      .pause();

    $(".cen").hide();
    $("body").removeClass("prevetwinow");
  });
}
$(function() {
  // var result = window.matchMedia('(max-width: 768px)');

  // if (result.matches) {
  // if(!IsPC()){

  // 	//console.log('页面宽度小于等于768px');
  // 	//写移动端的js效果
  // 	console.log('res')
  // 	$('.swiper-wrapper').attr('style', 'height: 30vh')
  // 	$('#mv').attr('style', 'height: 30vh')
  // 	$('.mv-swiper-pagination').attr('style', 'bottom: 10px !important')

  // } else {
  // 	console.log('123')
  // 	//console.log('页面宽度大于768px');
  // 	//写页面宽度大于768px的js效果
  // 	$('.swiper-wrapper').attr('style', 'height: 100vh')
  // 	$('#mv').attr('style', 'height: 100vh')
  // 	$('.mv-swiper-pagination').attr('style', 'bottom: 80px !important')

  // }

  // 动画
  var getDiv_md = $(".index_tour-blk");
  var offSetmax = [];
  var offSet = [];

  for (let i = 0; i < getDiv_md.length; i++) {
    // offSetmax[i] = getDiv_md.offset().top + 300;
    offSetmax[i] = getDiv_md[i].offsetTop + 300;
    offSet[i] = getDiv_md[i].offsetTop - getDiv_md[i].scrollHeight;
    // offSet[i] = getDiv_md.offset().top - getDiv_md[i].scrollHeight
    console.log(offSetmax[i] - 500);
    if (
      $(window).scrollTop() > offSet[i] + 85 &&
      $(window).scrollTop() < offSetmax[i] + 85
    ) {
      $(".index_tour-blk")
        .eq(i)
        .find(".index_tour-blk__img")
        .addClass("delay-0");
      $(".index_tour-blk")
        .eq(i)
        .find(".anim-warpone")
        .addClass("delay-1");
      $(".index_tour-blk")
        .eq(i)
        .find(".anim-warptwo")
        .addClass("delay-2");
      $(".index_tour-blk")
        .eq(i)
        .find(".anim-warpthree")
        .addClass("delay-3");
      $(".index_tour-blk")
        .eq(i)
        .find(".anim-warpfour")
        .addClass("delay-4");
    }
  }

  $(window).scroll(function() {
    for (let i = 0; i < getDiv_md.length; i++) {
      if (
        $(window).scrollTop() > offSet[i] + 85 &&
        $(window).scrollTop() < offSetmax[i] + 85
      ) {
        $(".index_tour-blk")
          .eq(i)
          .find(".index_tour-blk__img")
          .addClass("delay-0");

        $(".index_tour-blk")
          .eq(i)
          .find(".anim-warpone")
          .addClass("delay-1");
        $(".index_tour-blk")
          .eq(i)
          .find(".anim-warptwo")
          .addClass("delay-2");
        $(".index_tour-blk")
          .eq(i)
          .find(".anim-warpthree")
          .addClass("delay-3");
        $(".index_tour-blk")
          .eq(i)
          .find(".anim-warpfour")
          .addClass("delay-4");
        console.log($(window).scrollTop());
      } else {
        console.log($(window).scrollTop());
      }
    }
  });

  let $header = $("#header");
  let $foot_fix = $(".foot-fixed-inquiry");
  let $coll_tgl = $(".collapse-tgl");
  $coll_tgl.on("click", function() {
    $(this).toggleClass("open");
  });

  // let $menu_tgl = $("#header-tgl-btn");
  // $menu_tgl.on("click", function() {
  //   console.log('$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl')
  //   $header.toggleClass("menu-open");
  // });

  $(window).on("scroll", function() {
    headerTrans();
    if (window.innerWidth < 767) {
      footFixedInquiry();
    }
  });

  function headerTrans() {
    var scrl = $(this).scrollTop();
    var h = window.innerHeight - $header.height();
    if (scrl >= h) {
      $header.removeClass("header--index-top");
    } else {
      $header.addClass("header--index-top");
    }
  }

  function footFixedInquiry() {
    var scrl = $(this).scrollTop();
    var h = window.innerHeight - $header.height();
    if (scrl >= h) {
      $foot_fix.removeClass("hidden");
    } else {
      $foot_fix.addClass("hidden");
    }
  }

  headerTrans();
  if (window.innerWidth < 767) {
    footFixedInquiry();
  }

  $("#scrol_100vh").on("click", function() {
    var scrl = window.innerHeight - $header.height();
    $("html,body").animate(
      {
        scrollTop: scrl
      },
      300
    );
  });

  let $clippath = $(".index_tour-clippath");
  $(window).on("resize", function() {
    clipResize();
  });

  function clipResize() {
    var wW = window.innerWidth;
    if (wW > 767) {
      var setW = $clippath.parents("div").width() / 980;
      $clippath.attr("transform", "scale(" + setW + " 1)");
    } else {
      let setW = $clippath.parents("div").width() / 980;
      var setH = 220 / 625;
      $clippath.attr("transform", "scale(" + setW + " " + setH + ")");
    }
  }

  clipResize();

  $(".anim-blk").each(function() {
    var $this = $(this);

    $(window).on("scroll", function() {
      var scrl = $(this).scrollTop();
      var ofs = $this.offset();
      var half = window.innerHeight / 1.5;
      if (scrl > ofs.top - half) {
        $this.addClass("anim-start");
        $this.next(".index_tour-footprint").addClass("visible");
      }
    });
  });

  $(".foot-inquiry__btn").click(function() {
    if ($("#nb_invite_ok").length > 0) {
      $("#nb_invite_ok").click();
    }
  });
});

// $(document).ready(function() {

// 		var isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
//         if (isIphone) {
// 			console.log(1)
//             $(".index_about-vid").click(function(){
//                 window.location="http://niujin.kailly.com/niu1.mp4"
//             });
//         }
//         else {
// 			console.log(0)

//             $(document).on('click','.index_about-vid', function () {
// 				// 视频播放
// console.log('12312312312')

// 				$('#video').get(0).play()

// 				$('.cen').show()
// 				$("body").addClass('prevetwinow');
// 			})
//         }

// 			$('.cen').on('click', function () {
// 				// 视频播放
// 				$('#video').get(0).pause()

// 				$('.cen').hide()
// 				$("body").removeClass('prevetwinow');
// 			})
// })
</script>

<style scoped>
.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: linear; /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}
.sweiper_slide {
  overflow: hidden;
  height: auto;
}
.index_about-vid {
  position: relative;
}

.index_about-vid > img:nth-child(2) {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.video_block {
  max-width: 1000px;
  max-height: 500px;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  margin-left: -500px;
  background: black;
  display: flex;
  justify-content: center;
}

.video_block > video {
  max-width: 1000px;
  max-height: 500px;
  object-fit: fill;
}

.cen {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000000;
  position: fixed;
  overflow: hidden;
  display: none;
}

.index_about-vid {
  position: relative;
}

.play {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 50%;
}

.prevetwinow {
  overflow: hidden !important;
}
.index_tour-blk__lead {
  text-indent: 2em;
}
.ula {
  margin-left: 20px;
}
.lia {
  font-size: 14px;
  font-weight: 100;
  list-style-type: disc;
}
</style>


