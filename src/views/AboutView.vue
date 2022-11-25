<template>
  <div id="app">
    <ContentBanner />
    <Marquee />
    <ContentProfile />
    <ContentPm />
    <Footer />
    <Share />
  </div>
</template>



<script>
import Marquee from '@/components/marquee.vue'
import ContentBanner from '@/components/Content_banner.vue'
import ContentProfile from '@/components/Content_profile.vue'
import ContentPm from '@/components/Content_pm.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {
    ContentBanner,
    Marquee,
    ContentProfile,
    ContentPm,
    Footer,
    Share,
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}



p {
  font-family: 'Noto Sans TC';
  text-align: left;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.4rem;
  font-size: 1.3rem;
}

.tab-content {
  /* overflow: scroll; */
  max-width: 2000px !important;


}



@media screen and (max-width: 500px) {
  .tab-content {
    overflow: scroll;

  }

  .section-box {
    max-height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}




.tabs {
  max-width: 1300px;
  margin: auto;
}
</style>