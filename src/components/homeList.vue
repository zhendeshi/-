<template>
  <div>
      <appHead :inputName="homeList"  v-on:childByValue="childByValue"></appHead>
    <div class="section container-w980 news-wrap divtop" style="margin-top: 20px;min-height: 500px;">
      <div class="news-wrap-main">
        <article  class="news-list" v-for="(item, index) in infoList" :key="index">
          <h2 class="news-list__ttl">
            <router-link
              :to="'detail?type=1&id='+item.pk_id"
              style="font-family: auto;"
            >{{item.name}}</router-link>
          </h2>
          <div class="news-list__innr">
            <div class="news-list__img">
              <router-link :to="'detail?type=1&id='+item.pk_id">
                <img :srcset="item.img" alt class="w100p" style="height:auto;" />
              </router-link>
            </div>
            <div class="news-list__text">
              <div class="news-list__attr">
                <p class="news-list__date">
                  <time datetime>{{item.date_creation}}</time>
                </p>
                <ul class="news-list-cate">
                  <li class="news-list-cate__item">NEWS</li>
                </ul>
              </div>
              <div class="news-list__excerpt">
                <p>{{item.remark}}</p>
              </div>
              <div class="news-list__read-more">
                <router-link
                  :to="'detail?type=1&id='+item.pk_id"
                  class="btn btn--green btn--thin"
                >查看详情</router-link>
              </div>
            </div>
          </div>
        </article>
        <div class="tips" v-if="!infoList">暂无相关信息</div>
      </div>
      <!-- <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">企业动态</h4>
          <ul class="news-sidebar-nav">
            <li class="news-sidebar-nav__item category_10">
              <router-link to="enterprise">企业动态</router-link>
            </li>

            <li class="news-sidebar-nav__item category_10">
              <router-link to="joinIns">加盟动态</router-link>
            </li>

            <li class="news-sidebar-nav__item category_10">
              <router-link to="park">园区动态</router-link>
            </li>
          </ul>
        </section>
      </aside> -->
    </div>

    <!-- 资讯 -->
    <appFooter :msg-val="msg" ></appFooter>
    
  </div>
</template>
<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
import appFooter from "../pages/footer/footer";
import appHead from "../pages/head/head";


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
      page: 1, //页数
      homeList: 'homeList',
      infoList: [],
      value: '',
      msg: 1
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    childByValue(value){
        console.log('res')
         let data = {
        modul: 6,
        type: 1,
        page: 1,
        page_size: 100,
        keywords: value || ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoList = res.data;
        console.log(res);
      });
    },
    getInfoList(value) {
      let data = {
        modul: 6,
        type: 1,
        page: 1,
        page_size: 100,
        keywords: value || ""
      };
      this.$post("InfoList", data).then(res => {
        this.infoList = res.data;
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
    this.value = this.$route.query['value']
    this.getInfoList(this.value);

    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>
<style scoped>
.tips {
      width: 100%;
    text-align: center;
    font-size: 1.6em;
    color: #999;
    letter-spacing: 1px;
}
</style>




