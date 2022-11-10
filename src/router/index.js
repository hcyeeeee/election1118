import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import VoteView from "../views/VoteView.vue";
import QaView from "../views/QaView.vue";
import Typeform from "../views/Typeform.vue";
import Typeform2 from "../views/Typeform2.vue";
import Typeform3 from "../views/Typeform3.vue";
import HotView from "../views/HotView.vue";
import ING from "../views/ING.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title:
        "2022九合一選舉專區｜1126縣市長大選、六都戰況分析、18歲修憲公投即時新聞專區｜民視新聞專題",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title:
        "2022九合一選舉專區｜1126縣市長大選、六都戰況分析、18歲修憲公投即時新聞專區｜民視新聞專題",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/vote",
    name: "vote",
    component: VoteView,
    meta: {
      title:
        "2022九合一選舉專區｜1126縣市長大選、六都戰況分析、18歲修憲公投即時新聞專區｜民視新聞專題",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/qa",
    name: "qa",
    component: QaView,
    meta: {
      title:
        "2022九合一選舉專區｜1126縣市長大選、六都戰況分析、18歲修憲公投即時新聞專區｜民視新聞專題",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/form",
    name: "form",
    component: Typeform,
    meta: {
      title: "2022九合一選舉 - 政治術語大考驗｜民視新聞網",
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/issue",
    name: "issue",
    component: HotView,
    meta: {
      title:
        "2022九合一選舉專區｜1126縣市長大選、六都戰況分析、18歲修憲公投即時新聞專區｜民視新聞專題",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/quiz",
    name: "quiz",
    component: Typeform2,
    meta: {
      title: "2022九合一選舉 - 修憲公投模擬考｜民視新聞網",
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/quiz2",
    name: "quiz2",
    component: Typeform3,
    meta: {
      title: "2022九合一選舉 - 6都市長選戰，你的理念接近誰？｜民視新聞網",
      description:
        "九合一選舉即將於11月26日登場！備受矚目的6都選戰，你對於候選人的理念瞭解了嗎？一起來做個小測驗，看看你心中的想法與哪位政治人物較為相近！",
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/ing",
    name: "ing",
    component: ING,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  document.title = `${to.meta.description}`;
  next();
});

export default router;
