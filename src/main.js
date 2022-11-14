import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

function desktopAd(src, width) {
  if (window.screen.width > width) {
    const tag = document.createElement("script");
    tag.onload = function () {
      this.setAttribute("loaded", "");
    };
    tag.async = true;
    tag.src = src;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(tag, s);
  }
}

function mobileAd(src, width) {
  if (window.screen.width <= width) {
    const tag = document.createElement("script");
    tag.onload = function () {
      this.setAttribute("loaded", "");
    };
    tag.async = true;
    tag.src = src;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(tag, s);
  }
}

function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}

if (isMobile()) {
  console.log("isMobile");

  mobileAd(
    "https://player.gliacloud.com/player/tw_ftvnews_election_mobile",
    600
  );
  console.log("settimeout");
} else {
  console.log("isDeskTop");
  desktopAd(
    "https://player.gliacloud.com/player/tw_ftvnews_election_desktop",
    600
  );
}
