<template>
  <div>
    <ContentBanner />
    <QA />
    <Share />
    <Footer />
  </div>
</template>


<script>
import ContentBanner from '@/components/Content_banner.vue'
import QA from '@/components/aq.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'
export default {
  name: 'App',
  components: {
    ContentBanner,
    QA,
    Footer,
    Share,

  },
}
</script>
