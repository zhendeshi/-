<template>
  <div id="app-head" style="height: 90px;">
    <header class="header" id="header">
      <div class="header__innr">
        <div
          class="header-logo"
          style="
			display: flex;
			align-items: center;
			justify-content: center;
		"
        >
          <div class="header-logo__item" @click="home()">
            <a style="display: flex;">
              <!--?xml version="1.0" encoding="utf-8"?-->
              <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <img style="width: 48px;height: 57px;" :src="baseData.logo" />
              <div class="title_block">
                <p
                  class="title_max"
                  style="
							width: 200px;
							font-size: 1.2em;
							color: #e6e3e7;
							font-weight: bold;
							font-family: fantasy;
							line-height: 1.2em;
						"
                >{{baseData.ent_name}}</p>
                <p
                  class="title_min"
                  style="
							width: 200px;
							font-size: 1em;
							color: #ced6df;
							font-family: fantasy;
						"
                >{{indexData.advtips}}</p>
              </div>
            </a>
          </div>
        </div>
        <div id="header-nav" class="header-nav">
          <nav>
            <ul class="dropdown dropdowna">
              <li class="drop dropaa" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <a class="aherf" href="/">首页</a>
              </li>

              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">-
                <span class="li_span">走进牛津</span>

                <ul class="sub_menu">
                  <li>
                    <router-link to="survey">集团概况</router-link>
                  </li>

                  <li>
                    <router-link to="idea.html">教育教学</router-link>
                  </li>

                  <li>
                    <router-link to="academy">牛津园所</router-link>
                  </li>

                  <!-- <li>
                    <router-link to="story">品牌故事</router-link>
                  </li>-->
                </ul>
              </li>
              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <span class="li_span">核心教育品牌</span>

                <ul class="sub_menu">
                  <li>
                    <router-link to="international">牛津国际</router-link>
                  </li>

                  <li>
                    <router-link to="bean">英豆尔</router-link>
                  </li>

                  <li>
                    <router-link to="hamburger">纽津堡</router-link>
                  </li>
                </ul>
              </li>

              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <span class="li_span">加盟牛津</span>

                <ul class="sub_menu">
                  <li>
                    <router-link to="schoolRunning">办学优势</router-link>
                  </li>

                  <li>
                    <router-link to="joinIn">加盟优势</router-link>
                  </li>

                  <li>
                    <router-link to="service">服务优势</router-link>
                  </li>
                </ul>
              </li>
              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <span class="li_span ">教育服务项目</span>

                <ul class="sub_menu oneul">
                  <li>
                    <router-link to="customized">OICE早幼教联盟</router-link>
                  </li>

                  <li>
                    <router-link to="college">OICE学院</router-link>
                  </li>

                  <li>
                    <router-link to="design">OICE设计院</router-link>
                  </li>

                  <li>
                    <router-link to="choice">津典严选</router-link>
                  </li>
                </ul>
              </li>
              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <span class="li_span">集团资讯</span>

                <ul class="sub_menu">
                  <li>
                    <router-link to="enterprise">企业动态</router-link>
                  </li>

                  <li>
                    <router-link to="joinIns">加盟动态</router-link>
                  </li>

                  <li>
                    <router-link to="park">园区动态</router-link>
                  </li>
                </ul>
              </li>
              <li class="drop" style="color: #fff; font-family:微软雅黑; font-weight: 100;">
                <span class="li_span">联系我们</span>
                <ul class="sub_menu">
                  <li>
                    <router-link to="recruit">人才招聘</router-link>
                  </li>

                  <li>
                    <router-link to="contactMode">联系方式</router-link>
                  </li>

                  <li>
                    <router-link to="investigate">预约考察</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-inquiry">
          <p class="header-inquiry__tel">
            <img style="width:17px;" src="./../../assets/img/phone.png" />
            {{baseData.hotline}}
          </p>
          <p class="header-inquiry__mail">
            <!-- <form name="formsearch" action="/plus/search.php"> -->
            <!-- <input type="hidden" name="kwtype" value="0" /> -->
            <input
              type="text"
              id="search-keyword"
              v-model="vlau"
              class="search-input"
              v-on:keyup.13="submit()"
              placeholder
              style="height: 25px;width:140px;border-radius: 5px;"
            />
            <input
              type="submit"
              class="search-btn"
              value="搜索"
              v-on:click="submit()"
              style="width: 36px;border-radius: 5px;margin-left: 5px;height: 26px;"
            />
            <!-- </form> -->
          </p>
        </div>
        <div class="header-tgl">
          <button type="button" id="header-tgl-btn" class="header-tgl-btn">
            <span class="header-tgl-btn__hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>    
<script>
import $ from "jquery";
export default {
  name: "appHead",
  props: ["inputName"],
  data() {
    return {
      baseData: {}, //基础数据
      indexData: {}, //首页数据
      content: "head.vue",
      vlau: ""
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    submit() {
      if (this.inputName == "homeList") {
        this.$emit("childByValue", this.vlau);
      } else {
        this.$router.push(`homeList?value=${this.vlau}`);
      }
    },
    getBaseData() {
      let data = {};
      this.$get("BaseData", data).then(res => {
        this.baseData = res.data;
      });
    },
    getIndexData() {
      let data = {};
      this.$get("IndexData", data).then(res => {
        this.indexData = res.data;
      });
    }
  },
  mounted() {
    console.log(this.inputName);
    this.getBaseData();
    this.getIndexData();
    loading();
  }
};

function loading() {
  console.log("$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl");

  let $header = $("#header");
  let $menu_tgl = $("#header-tgl-btn");
  $menu_tgl.on("click", function() {
    console.log("$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl$menu_tgl");
    console.log($header);
    $header.toggleClass("menu-open");
  });
}
</script>
<style scope>
.anim-item {
  background: #00346d;
}
ul.dropdown > li {
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 0.6s;
  background: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}
ul.dropdown > li::before {
  content: "";
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 5px;
  transition: width 0.6s;
  background: white;
  /* border-radius: 10px; */
  z-index: 100;
  opacity: 0;
}

ul.dropdown > li:hover .sub_menu {
  display: block;
}
ul.dropdown li:hover {
  background: rgba(0, 0, 0, 0.6);
}
ul.dropdown li:hover::before {
  width: 100%;
  opacity: 1;
  display: block;
  animation: myfirst 0.6s;
}

@keyframes myfirst {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.header-logo__item {
  height: 100%;
}
.header-logo__item > a {
  height: 100%;
}

@media screen and (max-width: 700px) {
  .header-logo div a > p:nth-child(1) {
    font-size: 1em !important;
  }
  .header-logo div a > p:nth-child(2) {
    font-size: 0.8em !important;
  }

  .header-logo__item > a img {
    width: 40px !important;
    height: 46px !important;
    margin: 0;
    margin-bottom: -10px;
  }

  .address {
    font-size: 22px;
  }
  .hoenzhon {
    margin: 0 8px;
  }
  .info_phone,
  .color_white {
    font-size: 14px;
  }
  .ahref_p a {
    font-size: 14px;
    font-weight: bold;
  }

  .info_phone {
    margin-bottom: 50px;
  }

  .footer-logoImg {
    width: 500px;
    margin-left: 50px;
  }
  .name_img img {
    width: 81px;
    height: 81px;
  }
}
.name_img {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 990px){
ul.dropdown .oneul {
    width: 150px !important;
    top: 45px !important;
    font-size: 1em;
    position: absolute;
    right: 0;
}
}

</style>