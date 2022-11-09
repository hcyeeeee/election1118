

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
