<template>
  <div>
    <a href="#">
      <picture>
        <!-- <source srcset="../assets/mobile.jpg" media="(max-width: 500px)" /> -->
        <!-- <source srcset="../assets/quizdesktop.png" media="(max-width: 768px)" /> -->
        <!-- <source srcset="../assets/tablet_vertical.jpg" media="(max-width: 1024px)" /> -->
        <img class="banner" src="../assets/banner09.png" alt="">
      </picture>
    </a>
    <Share />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSd03tDJHIa-4IoeL6KkqbY1TMvgGuBvfb3e5FyCwpeSks9hkg/viewform?embedded=true"
      width="640" height="1792" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
  </div>
</template>

<script>


import Share from '../components/share.vue'



export default {
  name: 'App',
  components: {


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
* {
  background: #dce9f4;
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
    height: 1800px;
    overflow-y: visible;

  }
}


img {
  width: 100%;
  margin-top: 4rem;
}
</style>

