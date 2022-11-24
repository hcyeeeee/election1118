<template>
  <div>

    <ContentBanner />
    <Marquee />
    <City />
    <Eighteen />
    <ContentLive />
    <ContentNews />
    <ContentDistrict />
    <ContentVideo2 />
    <Footer />
    <Share />

  </div>
</template>

<script>
import ContentBanner from '@/components/Content_banner.vue'
import Marquee from '@/components/marquee.vue'
import City from '@/components/city.vue'
import Eighteen from '@/components/eighteen.vue'
import ContentLive from '@/components/Content_live.vue'
import ContentVideo2 from '@/components/Content_video2.vue'
import ContentNews from '@/components/Content_news.vue'
import ContentDistrict from '@/components/Content_district.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'



export default {
  name: 'App',
  components: {
    ContentBanner,
    Marquee,
    City,
    Eighteen,
    ContentLive,
    ContentVideo2,
    ContentNews,
    ContentDistrict,
    Footer,
    Share,
  },
}
</script>


<style scoped>
/* 全局自訂 */
* {
  scroll-behavior: smooth;
  font-family: 'Noto Sans TC'
}

body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  background-color: #F3FFF5;
  font-family: 'Noto Sans TC'
}

#app {
  font-family: 'Noto Sans TC', sans-serif, '微軟正黑體', '蘋果儷中黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #595757;
  transition: 0.3s;
  width: 100%;
  overflow-x: hidden;
}

h1,
h2 {
  font-family: 'Noto Sans TC';
  font-size: 1.8rem;
}

h3 {
  font-family: 'Noto Sans TC';
  text-align: center;
  font-size: 1.6rem;
  padding: 0.1rem 0;
  margin: 2rem 0 0.1rem 0;
  color: rgb(59, 59, 59);

}

h4 {
  font-family: 'Noto Sans TC';
  font-size: 1.3rem;
}

ul li {
  font-family: 'Noto Sans TC';
  text-align: left;
  margin: 1rem 0 1rem 0;
  font-size: 1.2rem;
  line-height: 1.4rem;
}

p {
  font-family: 'Noto Sans TC';
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {

  p,
  ul li {
    font-size: 1rem;
  }
}

a {
  font-family: 'Noto Sans TC';
  color: #888888;
  text-decoration: none !important;
}

a:hover {
  font-family: 'Noto Sans TC';
  color: black;
}

figure {
  font-family: 'Noto Sans TC';
  margin: 0;
}

.layout {
  font-family: 'Noto Sans TC';
  max-width: 1000px;
}

.section {
  font-family: 'Noto Sans TC';
  margin: 2rem auto;
  max-width: 1000px;


}

.nav-tabs {
  max-width: 1000px;
}




@media screen and (max-width: 350px) {
  .flex {
    display: block;
  }
}

.name {
  text-align: center;
  font-weight: bolder;
  font-size: 1.6rem;
  margin: 1rem 0;
  line-height: 2rem;
}





hr {
  color: inherit;
  border: 0;
  border-top: 2px solid;
  opacity: .9;

}

.nav-tabs {
  --bs-nav-tabs-border-color: transparent;
}

.nav.nav-tabs.nav-fill {
  display: flex;
  flex-flow: nowrap !important;
  /* overflow: scroll; */
  margin: auto;


}

.nav-link {
  color: rgb(26, 26, 26);
}


.section-box {
  max-width: 1000px;
}


.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;

  padding: 0rem !important;
  color: #fff;
  text-align: center;
}
</style>
