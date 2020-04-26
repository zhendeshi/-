import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"

console.log(Router)
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // mode: 'history',
  // base: '/web',
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld,
      meta: {
        title: '首页'
      },
      // children: [
      //   {
      //     path: 'homeList',
      //     name: 'homeList',
      //     component: ()=> import('../components/homeList.vue')
      //   },
      // ]
    },

    {
      path: '/homeList',
      name: 'homeList',
      component: ()=> import('../components/homeList.vue')
    },
    {
      path: '/idea.html',
      name: 'idea.html',
      component: () => import ('../components/zjnj/Idea.vue'),
      meta: {
        title: '教育教学'
      }
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import ('../components/zjnj/Survey.vue'),
      meta: {
        title: '集团概况'
      }
    },
    {
      path: '/academy',
      name: 'academy',
      component: () => import ('../components/zjnj/Academy.vue'),
      meta: {
        title: '牛津园所'
      }
    },
    {
      path: '/story',
      name: 'story',
      component: () => import ('../components/zjnj/Story.vue'),
      meta: {
        title: '品牌故事'
      }
    },
    {
      path: '/detailZ',
      name: 'detailZ',
      component: () => import ('../components/zjnj/detail.vue'),
      meta: {
        title: '详情'
      }
    },
    {
      path: '/international',
      name: 'international',
      component: () => import ('../components/hxjypp/international.vue'),
      meta: {
        title: '牛津国际'
      }
    },
    {
      path: '/bean',
      name: 'bean',
      component: () => import ('../components/hxjypp/Bean.vue'),
      meta: {
        title: '牛津国际英豆尔'
      }
    },
    {
      path: '/hamburger',
      name: 'hamburger',
      component: () => import ('../components/hxjypp/Hamburger.vue'),
      meta: {
        title: '牛津国际'
      }
    },
    {
      path: '/schoolRunning',
      name: 'schoolRunning',
      component: () => import ('../components/jmnj/schoolRunning.vue'),
      meta: {
        title: '办学优势'
      }
    },
    {
      path: '/joinIn',
      name: 'joinIn',
      component: () => import ('../components/jmnj/JoinIn.vue'),
      meta: {
        title: '加盟优势'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: () => import ('../components/jmnj/service.vue'),
      meta: {
        title: '服务优势'
      }
    },
    {
      path: '/customized',
      name: 'customized',
      component: () => import ('../components/ysjyfw/Customized.vue'),
      meta: {
        title: '定制化办园方案'
      }
    },   {
      path: '/college',
      name: 'college',
      component: () => import ('../components/ysjyfw/college.vue'),
      meta: {
        title: 'OICE学院'
      }
    },
    {
      path: '/design',
      name: 'design',
      component: () => import ('../components/ysjyfw/Design.vue'),
      meta: {
        title: 'OICE设计学院'
      }
    },
    {
      path: '/detailA',
      name: 'detailA',
      component: () => import ('../components/ysjyfw/detail.vue'),
      meta: {
        title: '详情'
      }
    },
    {
      path: '/choice',
      name: 'choice',
      component: () => import ('../components/ysjyfw/Choice.vue'),
      meta: {
        title: '津典严选'
      }
    },{
      path: '/enterprise',
      name: 'enterprise',
      component: () => import ('../components/jtzx/enterprise.vue'),
      meta: {
        title: '企业动态'
      }
    },
    {
      path: '/joinIns',
      name: 'joinIns',
      component: () => import ('../components/jtzx/joinIns.vue'),
      meta: {
        title: '加盟动态'
      }
    },{
      path: '/park',
      name: 'park',
      component: () => import ('../components/jtzx/Park.vue'),
      meta: {
        title: '园区动态'
      }
    },
    {
      path: '/aggregate',
      name: 'aggregate',
      component: () => import ('../components/jtzx/aggregate.vue'),
      meta: {
        title: '园区动态'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import ('../components/jtzx/detail.vue'),
      meta: {
        title: '园区动态'
      }
    },{
      path: '/recruit',
      name: 'recruit',
      component: () => import ('../components/lxwm/recruit.vue'),
      meta: {
        title: '人才招聘'
      }
    },{
      path: '/contactMode',
      name: 'contactMode',
      component: () => import ('../components/lxwm/contactMode.vue'),
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/investigate',
      name: 'investigate',
      component: () => import ('../components/lxwm/Investigate.vue'),
      meta: {
        title: '预约考察'
      }
    },
    {
      path: '/detailB',
      name: 'detailB',
      component: () => import ('../components/lxwm/detail.vue'),
      meta: {
        title: '详情'
      }
    },
    // {
    //   path: '/introduction',
    //   name: 'introduction',
    //   component: () => import ('../components/HomeIndex/Introduction.vue'),
    //   meta: {
    //     title: '小镇简介'
    //   }
    // },
    // {
    //   path: '/information',
    //   name: 'information',
    //   component: () => import ('../components/HomeIndex/information.vue'),
    //   meta: {
    //     title: '投融资讯'
    //   }
    // },
    // {
    //   path: '/townDateil',
    //   name: 'townDateil',
    //   component: () => import ('../components/HomeIndex/townDateil.vue'),
    //   meta: {
    //     title: ''
    //     // 首页的详情
    //   }
    // },
    // {
    //   path: '/financing',
    //   name: 'financing',
    //   component: () => import ('../components/HomeIndex/financing.vue'),
    //   meta: {
    //     title: '入驻/登录'
    //   }
    // },
    // {
    //   path: '/personal',
    //   name: 'personal',
    //   component: () => import ('../components/HomeIndex/personal.vue'),
    //   meta: {
    //     title: '个人中心'
    //   }
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import ('../components/HomeIndex/contact.vue'),
    //   meta: {
    //     title: '小镇简介'
    //   }
    // },
   
  ]
})
