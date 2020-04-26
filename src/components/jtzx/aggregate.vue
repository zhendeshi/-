<template>
  <div>
    <appHead></appHead>
    <div class="section container-w980 news-wrap divtop datalist" style="margin-top: 20px;">
      <div class="news-wrap-main">
        <article class="news-list" v-for="(item, index) in infoList" :key="index">
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
        <p v-if="iFrequert" class="load_data" @click="getInfoList">加载更多</p>

        <div v-if="!infoList.length" class="tips">暂无相关信息</div>
      </div>
      <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">集团资讯</h4>
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
      </aside>
    </div>

    <!-- 资讯 -->
    <appFooter :msg-val="msg"></appFooter>
  </div>
</template>
<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import $ from "jquery";
import appFooter from "../../pages/footer/footer";
import appHead from "../../pages/head/head";

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
      infoList: [],
      iFrequert: true
    };
  },
  methods: {
    linkTo(to) {
      this.$router.push(to);
    },
    getInfoList() {
      let data = {
        modul: 6,
        type: 99,
        page: this.page,
        page_size: 10,
        keywords: ""
      };
      this.$post("InfoList", data).then(res => {
        if (this.page == 1 && res.data == null) {
          console.log("1");
          this.iFrequert = false;
          return;
        } else {
          if (res.data.length % 10 == 0) {
            this.page = this.page + 1;
            this.iFrequert = true;
          } else {
            console.log("111");
            this.iFrequert = false;
          }
        }

        let data = this.infoList;
        this.infoList = data.concat(res.data);
        // this.infoList = res.data;
        // console.log(res);
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
    this.getInfoList();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>

<style scoped>
.tips {
  min-height: 500px;
  text-align: center;
  width: 100%;
  color: #999;
  font-size: 1.6em;
}
</style>



