<template>
  <div id="app">
    <ContentBanner />
    <!-- <Marquee /> -->
    <ContentProfile />
    <ContentPm />
    <Footer />
    <Share />
  </div>
</template>



<script>
// import Marquee from '@/components/marquee.vue'
import ContentBanner from '@/components/Content_banner.vue'
import ContentProfile from '@/components/Content_profile.vue'
import ContentPm from '@/components/Content_pm.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {
    ContentBanner,
    // Marquee,
    ContentProfile,
    ContentPm,
    Footer,
    Share,
  },
}
</script>

<style>
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



.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  white-space: nowrap;
  width: 100%;
  margin: auto;
  padding: .5rem 1rem;

}

.nav-link {
  color: rgb(26, 26, 26);


}

.nav-link:active {
  box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 2px 0px;
}

.nav {
  --bs-nav-link-padding-x: 0.4rem !important;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: 500;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 0;
  list-style: none;
  margin: auto;
  justify-content: start;


}



.nav-tabs {
  --bs-nav-tabs-border-width: none;
  --bs-nav-tabs-border-color: #8196ab;
  --bs-nav-tabs-border-radius: 10px;
  --bs-nav-tabs-link-active-color: rgb(31, 32, 32);
  --bs-nav-tabs-link-active-bg: #caeb9c;
  --bs-nav-tabs-link-active-border-color: #4889c9;
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
  overflow: scroll;
  margin: 0rem auto;
}

.nav-item {
  border-bottom: 3px solid #c3e88e;
  margin: .5rem 1rem;
  font-size: 1.2rem;


}


.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {

  box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 2px 0px;
}



@media screen and (max-width: 500px) {

  .nav-item {
    border-bottom: 3px solid #c3e88e;
    margin: .4rem;
    font-size: 1rem;


  }
}
</style>