<template>
  <div id="app">
    <Header />
    <AdditionButton />

    <router-view />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import AdditionButton from './components/Addition_bottom.vue'
export default {
  name: 'App',
  components: {
    AdditionButton,
    Header,
  }

}
</script>



<style >
#app {
  font-family: 'Noto Sans TC', sans-serif, '微軟正黑體', '蘋果儷中黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #595757;
  transition: 0.3s;
  width: 100%;
  overflow-x: hidden;
}



.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 100% !important;
  --bs-dropdown-padding-x: 0rem;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: #212529;
  --bs-dropdown-bg: #eefdf0;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: 0.375rem;
  --bs-dropdown-border-width: .2px;
  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  --bs-dropdown-link-color: #212529;
  --bs-dropdown-link-hover-color: #0e1010;
  --bs-dropdown-link-hover-bg: #c5e7b6;
  --bs-dropdown-link-active-color: rgb(18, 18, 18);
  --bs-dropdown-link-active-bg: #dff7d5;
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: .5rem;
  --bs-dropdown-header-color: #727d6c;
  --bs-dropdown-header-padding-x: 1.2rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: 1.1rem;
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
  line-height: 1.5rem;

}


.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.tf-v1-widget {
  width: 100%;

}

.tf-v1-widget {
  width: 100%;
  height: 95vh !important;
  border: none;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 4rem;

}

@media screen and (max-width: 768px) {
  .tf-v1-widget {
    width: 100%;

  }

  .tf-v1-widget {
    width: 100%;
    height: 85vh !important;
    border: none;
    overflow: hidden;
    border-radius: 8px;

    padding: 1rem 1rem 5rem;

  }

  .dropdown-menu {
    --bs-dropdown-border-width: 0px;
  }

}

.navbar-toggler {
  display: flex;
  justify-content: end;
  border: none !important;
  margin-right: 0.1rem;

}

.carousel-caption {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0%;
  bottom: 0rem;
  left: 0%;
  padding-top: 0rem;
  padding-bottom: 0rem;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
}


@media screen and (max-width: 768px) {

  .carousel-caption {
    font-size: 1.2rem;
    justify-content: start;
    display: -webkit-box;
    overflow: hidden;
  }
}

@media screen and (max-width: 768px) {

  .carousel-caption {
    font-size: 1.2rem;
    justify-content: start;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;

  }
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

/* 全局自訂 */

body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  background-color: #F3FFF5;
  font-family: 'Noto Sans TC'
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
  padding: 1rem 0;
  margin: 2rem 0 0.1rem 0;
  color: rgb(59, 59, 59);

}

h4 {
  font-family: 'Noto Sans TC';
  font-size: 1.3rem;
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
  color: #595757;
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

.section-box {
  font-family: 'Noto Sans TC';
  margin: 1rem auto;
  padding: 1rem;
}
</style>


  