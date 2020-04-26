<template>
  <div>
    <!-- 资讯 -->
    <section
      class="section foot-inquiry"
      :style="{backgroundImage: 'url('+baseData.consult_img+')'}"
    >
      <div class="container-w1180">
        <h2 class="foot-inquiry__ttl" style="margin-top: 135px;"></h2>
        <p>
          <br class="xs-visible" />
        </p>
        <!-- target="view_window" -->
        <!-- <p><a  href="javascript:openWin()"  class="btn btn--orange foot-inquiry__btn hover_text" style="position: relative; top: 86px;color: #012b5b; max-width: 220px; height: 66px;">咨询</a></p> -->
        <p v-if="msgVal">
          <a
            :href="baseData.consult_url"
            target="_blank"
            class="btn btn--orange foot-inquiry__btn hover_text"
            style="position: relative; top: 86px;color: #012b5b; max-width: 220px; height: 66px;"
          >咨询</a>
        </p>
      </div>
    </section>
    <!-- 底部 -->
    <footer id="footer" class="footer">
      <div class="footer_block">
        <div class="footer__innr clearfix">
          <!-- <div class="footer-logo-address"> -->

          <p class="address">{{baseData.ent_name}}</p>
          <p class="address">{{baseData.name}}</p>
          <!-- <p class="address">广州津典科教技术开发有限公司</p> -->
          <div class="info_phone">
            <p>
              全国统一服务热线：
              <span class="color_white">{{baseData.hotline}}</span>
            </p>
            <p style="margin-top: 18px; word-break: break-all;">
              总机：
              <span class="color_white">{{baseData.telephone}}</span>
              <span class="hoenzhon">|</span>传真：
              <span class="color_white">{{baseData.fax}}</span>
              <span class="hoenzhon">|</span>邮箱：
              <span class="color_white">{{baseData.email}}</span>
            </p>
            <p style="margin-top: 9px;">
              总部地址：
              <span class="color_white">{{baseData.address}}</span>
            </p>
            <p style="margin-top: 22px;">
              加盟顾问：
              <span class="color_white" v-html="baseData.join_info"></span>
              <!-- <span class="color_white">李老师 181 0270 5220</span> -->
            </p>
          </div>
          <div class="ahref">
            <p class="ahref_p">
              <!-- <a :href="baseData.url">联系我们</a> -->
              <a>
                <router-link to="contactMode">联系方式</router-link>
              </a>
              <span class="hoenzhon">|</span>
              <a>法律声明</a>
            </p>
            <p class="copyright">
              Copyright© 广州津典科教技术开发有限公司 备案编号：
              <a
                style="color: #d1d1d1;"
                href="http://www.beian.miit.gov.cn/"
                target="_blank"
              >{{baseData.recordnum}}</a>
              <a
                target="_blank"
                href="https://si.trustutn.org/info?sn=550161027024991797088&certType=1 "
                class="a_href"
              >
                <img src="../../assets/images/bottom_large_img.png" />
              </a>
            </p>
          </div>
        </div>
        <!-- <div class="footer-logoImg"> -->
        <viewer :images="signImages" class="footer-logoImg">
          <!-- <img v-for="src in signImages" :src="src" :key="src" width="50" /> -->
          <div class="name_img" v-for="(src, index) in signImages" :key="src">
            <p
              style="font-size: 12px;width: 120%"
            >{{index==0 ? '牛津国际文化教育' : index==1 ? '牛津国际早幼教' : '牛津国际文化教育集团'}}</p>
            <div
              style="
         background: #5379a0;
         padding: 5px;
         height: 100%;
         overflow: hidden;
     "
            >
              <img style="width: 80px;height: 80px;" :src="src" />
              <p style="font-size: 12px;">{{index==0 ? '微信服务号' : index==1 ? '微信订阅号' : '手机网站'}}</p>
            </div>
          </div>
          <span class="footer_tips" >投资有风险 加盟需谨慎</span>
        </viewer>
        <!-- <div class="name_img">
            <p style="font-size: 13px;width: 120%">牛津国际文化教育</p>
            <div
              style="
          background: #5379a0;
          padding: 5px;
         height: 100%;
         overflow: hidden;

      "
            >
              <img style="width: 80px;height: 80px;" :src="baseData.qrcode1" />
              <p style="font-size: 12px;">微信服务号</p>
            </div>
        </div>-->
        <!-- <div class="name_img">
            <p style="font-size: 12px;width: 120%">牛津国际早幼教</p>
            <div
              style="
         background: #5379a0;
         padding: 5px;
         height: 100%;
         overflow: hidden;
     "
            >
              <img style="width: 80px;height: 80px;" :src="baseData.qrcode2" />
              <p style="font-size: 12px;">微信订阅号</p>
            </div>
        </div>-->
        <!-- <div class="name_img">
            <p style="font-size: 12px;width: 120%">牛津国际文化教育集团</p>
            <div style=" background: #5379a0;padding: 5px;height: 100%;overflow: hidden;">
              <img style="width: 80px;height: 80px;" :src="baseData.qrcode3" />
              <p style="font-size: 12px;">手机网站</p>
            </div>
        </div>-->
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseData: {},
      signImages: []
    };
  },
  props: {
    msgVal: {
      required: 0
    }
  },
  methods: {
    //获取基础数据（底部）
    getBaseData() {
      let data = {};
      this.$get("BaseData", data).then(res => {
        let arrimg = [];
        arrimg.push(res.data.qrcode1);
        arrimg.push(res.data.qrcode2);
        arrimg.push(res.data.qrcode3);
        this.signImages = arrimg;
        // res.data.qrcode1 = this.httpurl + res.data.qrcode1
        // res.data.qrcode2 = this.httpurl + res.data.qrcode2
        // res.data.qrcode3 = this.httpurl + res.data.qrcode3
        this.baseData = res.data;
        console.log(res);
      });
    }
  },
  created() {
    this.getBaseData();
  }
};
</script>