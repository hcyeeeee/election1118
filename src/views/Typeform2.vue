<template>
  <div>
    <Share />
    <Typeform2 />

  </div>
</template>

<script>

import Typeform2 from '@/components/Typeform2.vue'
import Share from '../components/share.vue'



export default {
  name: 'App',
  components: {
    Typeform2,

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

