<template>
  <div id="top">
    <a href="#">
      <picture>
        <!-- <source srcset="../assets/mobile.jpg" media="(max-width: 500px)" /> -->
        <source srcset="../assets/quizdesktop.png" media="(max-width: 768px)" />
        <!-- <source srcset="../assets/tablet_vertical.jpg" media="(max-width: 1024px)" /> -->
        <img class="banner" src="../assets/quizmobile.png" alt="">
      </picture>
    </a>
    <Share />

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSffm-Hsvly86uAuAHeujo2wwTCU8ThfDtrRyhw_gaoI1784mA/viewform?embedded=true"
      width="1000" height="1500" frameborder="0" marginheight="1" marginwidth="1">載入中…</iframe>
    <Footer />
  </div>
</template>

<script>


import Share from '../components/share.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {

    Share,
    Footer,
  },
  method() {
  }

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

  background: #f1ece3;
}

iframe {
  margin: auto 1rem;
  margin-top: 1rem;
  height: 1800px;

}


@media screen and (max-width: 768px) {
  iframe {
    margin: auto;
    margin-top: 0rem;
    width: 500px;
    left: 0%;
    height: 1800px;
    overflow-y: visible;

  }
}

@media screen and (max-width: 500px) {
  iframe {
    margin: auto;
    margin-top: 0rem;
    width: 380px;
    left: 0%;
    height: 2100px;
    overflow-y: visible;

  }
}


img {
  width: 100%;
  margin-top: 4rem;
}
</style>
