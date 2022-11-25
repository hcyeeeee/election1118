<template>
  <div>
    <Share />
    <a href="#">
      <picture>
        <!-- <source srcset="../assets/mobile.jpg" media="(max-width: 500px)" /> -->
        <!-- <source srcset="../assets/quizdesktop.png" media="(max-width: 768px)" /> -->
        <!-- <source srcset="../assets/tablet_vertical.jpg" media="(max-width: 1024px)" /> -->
        <img class="banner" src="../assets/banner10.png" alt="">
      </picture>
    </a>
    <!-- <Typeform2 /> -->
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdf40sb5wSkDgZ2l84o1rSfkMWT0zn4rnMnTh2SGro1LyNRRg/viewform?embedded=true"
      width="640" height="1804" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
  </div>
</template>

<script>

// import Typeform2 from '@/components/Typeform2.vue'
import Share from '../components/share.vue'



export default {
  name: 'App',
  components: {
    // Typeform2,

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

* {
  background: #ebe4f4;
}

iframe {
  margin: auto 1rem;
  margin-top: 1rem;
  height: 1600px;

}


@media screen and (max-width: 768px) {
  iframe {
    margin: auto;
    margin-top: 0rem;
    width: 500px;
    left: 0%;
    height: 1600px;
    overflow-y: visible;

  }
}

@media screen and (max-width: 500px) {
  iframe {
    margin: auto;
    margin-top: 0rem;
    width: 380px;
    left: 0%;
    height: 1600px;
    overflow-y: visible;

  }
}


img {
  width: 100%;
  margin-top: 4rem;
}
</style>
