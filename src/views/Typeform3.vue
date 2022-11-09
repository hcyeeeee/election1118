<template>
  <div>
    <Share />
    <Typeform3 />

  </div>
</template>

<script>

import Typeform3 from '@/components/Typeform3.vue'
import Share from '../components/share.vue'



export default {
  name: 'App',
  components: {
    Typeform3,
    Share,
  },
  // mounted() {
  //   if (location.href.indexOf('#form') == -1) {
  //     // console.log(1);
  //     location.href = location.href + '#form'
  //     location.reload()
  //   }
  // }
}
</script>

