<template>
  <div>

    <ContentBanner />
    <Marquee />
    <Board />
    <Eighteen />
    <ContentLive />
    <ContentNews />
    <ContentDistrict />
    <ContentVideo2 />
    <Footer />
    <Share />


  </div>
</template>



<script>
import Board from '@/components/board.vue'
import ContentBanner from '@/components/Content_banner.vue'
import Marquee from '@/components/marquee.vue'
import ContentLive from '@/components/Content_live.vue'
import ContentVideo2 from '@/components/Content_video2.vue'
import ContentNews from '@/components/Content_news.vue'
import ContentDistrict from '@/components/Content_district.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'
import Eighteen from '@/components/eighteen.vue'

export default {
  name: 'App',
  components: {
    ContentBanner,
    Marquee,
    Board,
    ContentNews,
    ContentDistrict,
    ContentVideo2,
    ContentLive,
    Footer,
    Share,
    Eighteen,

  },


}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@100;300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700&display=swap');

html,
body {
  overflow-x: hidden;
}

html,
body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  background-color: #F3FFF5;
  font-family: 'Noto Sans TC'
}



div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i {
  font-family: 'Noto Sans TC';
}

center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>

<style scoped>
/* ???????????? */
* {
  scroll-behavior: smooth;
  font-family: 'Noto Sans TC'
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

#app {
  font-family: 'Noto Sans TC', sans-serif, '???????????????', '???????????????', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #595757;
  transition: 0.3s;
  width: 100%;
  overflow-x: hidden;
}

h1,
h2 {
  font-family: 'Noto Sans TC';
  font-size: 1.8rem;
}

h3 {
  font-family: 'Noto Sans TC';
  text-align: center;
  font-size: 1.6rem;
  padding: 0.1rem 0;
  margin: 2rem 0 0.1rem 0;
  color: rgb(59, 59, 59);

}

h4 {
  font-family: 'Noto Sans TC';
  font-size: 1.3rem;
}

ul li {
  font-family: 'Noto Sans TC';
  text-align: left;
  margin: 1rem 0 1rem 0;
  font-size: 1.2rem;
  line-height: 1.4rem;
}

p {
  font-family: 'Noto Sans TC';
  text-align: left;
  /* margin: 0.5rem 0 2rem 0; */
  line-height: 1.4rem;
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {

  p,
  ul li {
    font-size: 1rem;
  }
}

a {
  font-family: 'Noto Sans TC';
  color: #888888;
  text-decoration: none !important;
}

a:hover {
  font-family: 'Noto Sans TC';
  color: black;
}

figure {
  font-family: 'Noto Sans TC';
  margin: 0;
}

.layout {
  font-family: 'Noto Sans TC';
  max-width: 1000px;
}

.section {
  font-family: 'Noto Sans TC';
  margin: 2rem auto;
  max-width: 1000px;


}

.nav-tabs {
  max-width: 1000px;
}

.section-box {
  font-family: 'Noto Sans TC';
  margin: 1rem auto;
  padding: 1rem;
}




@media screen and (max-width: 350px) {
  .flex {
    display: block;
  }
}

.name {
  text-align: center;
  font-weight: bolder;
  font-size: 1.6rem;
  margin: 1rem 0;
  line-height: 2rem;
}





hr {
  color: inherit;
  border: 0;
  border-top: 2px solid;
  opacity: .9;

}

.nav-tabs {
  --bs-nav-tabs-border-color: transparent;
}

.nav.nav-tabs.nav-fill {
  display: flex;
  flex-flow: nowrap !important;
  /* overflow: scroll; */
  margin: auto;


}

.nav-link {
  color: rgb(26, 26, 26);
}


.section-box {
  max-width: 1000px;
}
</style>
