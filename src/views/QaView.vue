<template>
  <div>
    <ContentBanner />
    <Marquee />
    <City/>
    <QA />
    <Share />
    <Footer />
  </div>
</template>


<script>
import ContentBanner from '@/components/Content_banner.vue'
import Marquee from '@/components/marquee.vue'
import City from '@/components/city.vue'
import QA from '@/components/aq.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'
export default {
  name: 'App',
  components: {
    ContentBanner,
    Marquee,
    City,
    QA,
    Footer,
    Share,

  },
}
</script>
