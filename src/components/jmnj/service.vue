<template>
  <div class="section container-wp980 divtop" style=" padding-top:0px; padding-right:0px;">
    <apphead></apphead>
    <!--<h2 class="ttl ttl--vertical-border" style="font-family: serif;">服务优势</h2>-->
    <div class="company-intro" style="margin-top:0px;">
      <div id="company_imglist" style="width: 100%;margin: 0 auto;">
        <div v-for="(item, index) in infoList" :key="index">
          <div v-html="item.content"></div>
        </div>
      </div>
    </div>
    <!-- //.index_sns -->
    <section style="margin-bottom: 50px">
      <img style="width: 100%;" src="../../assets/images/form_img.jpg" alt />
      <div class="form_block">
        <input type="hidden" name="action" value="post" />
        <input type="hidden" name="diyid" value="1" />
        <input type="hidden" name="do" value="2" />
        <div class="form_input" cellpadding="0" cellspacing="1">
          <div class="input_one">
            <div style="display: flex; align-items: center;">
              <span
                style="margin-right: 10px;width: 75px;font-size:18px;text-align-last:justify;height: 28px;"
                align="right"
                valign="top"
                class="fontsize"
              >
                姓名</span>
              <input
                type="text"
                name="f1"
                id="f1"
                style="width:138px;height: 28px;"
                class="intxt"
                v-model="realname"
              />
            </div>
            <div style="margin-left: 45px;display: flex; align-items: center;" class="from_phone">
              <span
                style="width: 75px;font-size:18px;text-align:justify;text-align-last:justify;margin-right: 10px;height: 28px;"
                class="fontsize"

              >电话</span>
              <input
                type="text"
                name="f2"
                id="f2"
                style="width:232px;height: 28px"
                class="intxt"
                value
                v-model="mobile"
              />
            </div>
          </div>
          <div class="from_address" style="display: flex;margin-top: 28px;">
            <span
              style="margin-right: 10px;width: 75px;font-size:18px;text-align-last:justify;"
              align="right"
              valign="top"
                class="fontsize"

            >开园地址</span>
            <input
              type="text"
              name="f3"
              id="f3"
              style="width:500px;height: 28px"
              class="intxt"
              v-model="address"
            />
          </div>
          <div style="display: flex;margin-top: 28px; position: relative;" class="from_message">
            <span
              style="margin-right: 10px;width: 75px;font-size:18px; text-align-last:justify;flex-shrink: 0;"
              align="right"
              valign="top"
                class="fontsize"

            >留言</span>
            <textarea
              name="f4"
              id="f4"
              style="width:501px;height:143px;outline: none;resize: none;"
              v-model="content"
            ></textarea>
            <!-- <input class="submit" type="submit" name="submit" value="提 交" class='coolbg' /> -->
            <!-- <input class="submit" @click="submitBtn" value="提 交" /> -->
            <button class="submit" @click="submitBtn()">提交</button>
          </div>
          <input type="hidden" name="dede_fields" value="f1,text;f2,text;f3,text;f4,multitext" />
          <input type="hidden" name="dede_fieldshash" value="5c5d21f4f5b549f2e6c84cf4e0e09afe" />
        </div>
        <!-- <div align='center' style='height:30px;padding-top:10px;'>
					<input type="submit" name="submit" value="提 交" class='coolbg' />
        </div>-->
      </div>
    </section>
    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
  <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>  

<script>
// console.log(returnCitySN);
import appFooter from '../../pages/footer/footer';
import apphead from '../../pages/head/head'
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    appFooter,
    apphead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      msg: 1,
      infoList: [],
      realname: "",
      mobile: "",
      address: "",
      content: "",
      baseData: [],
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfoList() {
      let data = {
        modul: 4,
        type: 3,
        page: 1,
        page_size: 10000,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        console.log(res);
        this.infoList = res.data;
        setTimeout(function(){
    loads()

        },1000)
      });
    },
    submitBtn() {
      let data = {
        ip_address: window.returnCitySN["cip"],
        realname: this.realname,
        mobile: this.mobile,
        address: this.address,
        content: this.content
      };
      this.$post(`SubmitMessage`, data).then(res => {
        if (res.status == 1) {
          this.realname = "";
          this.mobile = "";
          this.address = "";
          this.content = "";
        }
        this.showToast(res.msg);
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
  created() {
    this.getInfoList();
    this.getBaseData()
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
function loads(){
  console.log('11111111111111111')
  // objectFitImages('.img--of');
  // objectFitImages('.img--of--contain');
  // objectFitImages('.img--of--pos-left');
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
  // $(function() {
    // let $header = $("#header");
    // let $foot_fix = $('.foot-fixed-inquiry');
    let $coll_tgl = $(".collapse-tgl");
    $coll_tgl.on("click", function() {
      $(this).toggleClass("open");
    });

    // let $menu_tgl = $("#header-tgl-btn");
    // $menu_tgl.on("click", function() {
    //   $header.toggleClass("menu-open");
    // });
  // });
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
/* 表单 */

.form_block {
  max-width: 50%;
  background: rgb(1, 43, 91);
  margin: 0 auto;
  color: white;
  box-sizing: border-box;
  min-width: 666px;
}

.form_input {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 60px 0;
  padding-bottom: 140px;
  flex-wrap: wrap;
  justify-content: center;
}

.input_one {
  display: flex;
}

.submit {
  width: 112px;
  line-height: 40px;
  border: none;
  line-height: 40px;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: -80px;
  font-size: 18px;
  font-weight: bold;
  color: #012b5b;
  text-align: center;
}

.txt--center {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>




