<template>
  <div class="section divtop">
    <appHead></appHead>
    <div style="display: flex;" class="section container-w980 news-wrap academy">
      <div class="news-wrap-main">
        <article class="news-list" v-for="(item, index) in infoList" :key="index">
          <h2 class="news-list__ttl">
            <!-- <a href="#" style="font-family: auto;"></a> -->
            <router-link :to="'detailZ?id='+item.pk_id">{{item.name}}</router-link>
          </h2>
          <div class="news-list__innr">
            <div class="news-list__img">
              <router-link :to="'detailZ?id='+item.pk_id">
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
                <router-link class="btn btn--green btn--thin" :to="'detailZ?id='+item.pk_id">查看详情</router-link>
              </div>
            </div>
          </div>
        </article>
        <p v-if="iFrequert" class="load_data" @click="getInfodetail">加载更多</p>
        <!-- <p v-if="!iFrequert" class="load_data" @click="getInfodetail" style="color: #999;background: none">没有更多了~~</p> -->
        <div v-if="!infoList.length" class="tips">暂无相关信息</div>
      </div>
      <aside class="news-wrap-sidebar">
        <section class="news-sidebar-widget">
          <h4 class="news-sidebar__ttl">牛津园所</h4>
          <ul class="news-sidebar-nav">
            <li class="news-sidebar-nav__item category_10">
              <router-link to="survey">集团概况</router-link>
            </li>
            <li class="news-sidebar-nav__item category_10">
              <router-link to="idea.html">教育教学</router-link>
            </li>
            <li class="news-sidebar-nav__item category_10">
              <router-link to="academy">牛津园所</router-link>
            </li>
            <!-- <li class="news-sidebar-nav__item category_10">
              <router-link to="story">品牌故事</router-link>
            </li>-->
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
  components: {
    appFooter,
    appHead
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      page: 1, //页数
      infoList: [],
      iFrequert: true,
      baseData: "",
      msg: 1
    };
  },
  methods: {
    //加载更多
    // moreData(){

    // },
    linkTo(to) {
      this.$router.push(to);
    },
    // 获取单条详情
    getInfodetail() {
      let data = {
        modul: 2,
        type: 3,
        page: this.page,
        page_size: 10,
        keywords: ""
      };
      if (this.iFrequert) {
        this.$post("InfoList", data).then(res => {
          console.log(res)
          if (this.page == 1 && res.data == null) {
            console.log('1')
            this.iFrequert = false;
            return;
          } else {
            if (res.data.length % 10 == 0) {
              this.page = this.page + 1;
              this.iFrequert = true;
            } else {
              console.log('111')
              this.iFrequert = false;
            }
          }

          let data = this.infoList;
          this.infoList = data.concat(res.data);
        });
      }
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
  computed: {},
  mounted() {
    this.getInfodetail();
    this.getBaseData();
    sessionStorage.setItem("oneData", "onedata");
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //this.swiper.slideTo(0, 0, false);
  }
};
</script>



<style scoped>
/* .news-wrap {
  min-height: 300px;
} */
.tips {
  width: 100%;
  min-height: 500px;
  text-align: center;
  font-size: 1.6em;
  color: #999;
  letter-spacing: 1px;
}
</style>