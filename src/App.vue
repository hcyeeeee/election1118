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
  },
  methods: {
    jump(tag) {
      setTimeout(() => {

        if (tag === 'news') {
          window.location.hash = '#news'
        } else if (tag === 'dis') {
          window.location.hash = '#district'
        } else if (tag === 'pm') {
          window.location.hash = '#pm'
        } else if (tag === 'profile') {
          window.location.hash = '#profile'
        } else {
          window.location.hash = '#video'
        }
      }, 100);
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
}
</script>



<style >
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
</style>



  