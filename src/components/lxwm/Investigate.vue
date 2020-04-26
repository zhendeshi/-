<template>
  <div>
    <appHead></appHead>
    <section style="margin-bottom: 50px;" class="divtop">
      <img style="width: 100%;" src="../../assets/images/form_yuyue.jpg" alt />
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
<script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>

<script>
import 'request/faq.css';
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
      realname: "",
      mobile: "",
      address: "",
      content: "",
      bannerArr: [
        // require("../../assets/images/banner1.jpg"),
        require("../../assets/images/banner2.jpg"),
        require("../../assets/images/banner3.jpg"),
        require("../../assets/images/banner4.jpg"),
        require("../../assets/images/banner5.jpg")
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
      }
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    submitBtn() {
      let data = {
        ip_address: window.returnCitySN['cip'],
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
    }
  },
  //定义这个sweiper对象
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
  // console.log(returnCitySN)
    console.log(window)

    console.log(window.returnCitySN)
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>
<style>
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





