

<template>
  <div>
    <ContentBanner />
    <Issue />
    <Share />
    <Footer />
  </div>
</template>

<script>

import ContentBanner from '@/components/Content_banner.vue'
// import Marquee from '@/components/marquee.vue'
import Issue from '@/components/Hot_isssue.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'


export default {
  name: 'App',
  components: {
    ContentBanner,
    // Marquee,
    Issue,
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
}</style>

