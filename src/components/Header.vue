<template>
    <div id="app">
        <div>
            <b-navbar toggleable="md" type="light" variant="light">
                <!-- logo -->
                <b-navbar-brand class="flex-logo logo">
                    <a href="https://www.ftvnews.com.tw/" target="blank"> <img src="../assets/logo.png" alt="民視新聞網"></a>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="ddd" to="/">首頁
                        </b-nav-item>
                    </b-navbar-nav>
                    <!-- 下拉選單start -->
                    <b-navbar-nav>
                        <b-nav-item-dropdown id="dropdown-1" text="新聞專區">
                            <b-dropdown-item class="ddd" to="/" @click="jump('news')">新聞專區</b-dropdown-item>
                            <b-dropdown-item class="ddd" to="/" @click="jump('dis')">地方選戰</b-dropdown-item>
                            <b-dropdown-item class="ddd" to="/" @click="jump('vid')">影音專區</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <!-- 下拉選單end -->
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="選將名單" right>
                            <b-dropdown-item class="ddd" to="/about" @click="jump('profile')">縣市長候選人
                            </b-dropdown-item>
                            <b-dropdown-item class="ddd" to="/about" @click="jump('pm')">議員候選人</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                    <!-- 下拉選單start -->
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="熱門議題" right>
                            <b-dropdown-item class="ddd" to="/qa">修憲公投</b-dropdown-item>
                            <b-dropdown-item class="ddd" href="https://bit.ly/3erX5R7">議題懶人包</b-dropdown-item>
                            <b-dropdown-item class="ddd" href="https://bit.ly/3CFJQFt">歷年版圖</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <!-- 下拉選單end -->
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="互動專區" right>
                            <b-dropdown-item class="ddd" href=" https://bit.ly/3fNaR1a">你像哪位<br>候選人？ </b-dropdown-item>
                            <b-dropdown-item class="ddd" href="https://bit.ly/3zwDKp2">公投模擬考</b-dropdown-item>
                            <b-dropdown-item class="ddd" href="https://bit.ly/3T1xwFt">政治術語<br>大考驗</b-dropdown-item>

                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>



    </div>
</template>
  
<script>

</script>
  
  
  <script>

  export default {
  
    name: 'App',
    components: {
    
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
          }else if (tag === 'profile') {
            window.location.hash = '#profile'
          }else {
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
  
  
  
<style scoped>
span {
    position: fixed;
    top: 5rem;
    left: 1rem;
    z-index: 1;
    padding: .5rem;
    border-radius: 10px;
    background-color: #f3fff5;
    color: rgb(92, 92, 92);
    box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 2px 0px;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 4rem;
    left: 0;
    background-color: #f3fff5;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 100px;
    z-index: 100;
    opacity: .98;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.sidenav a {
    /* padding: 8px 8px 8px 32px; */
    text-decoration: none;
    font-size: 1.1rem;
    color: #303030;
    display: block;
    transition: 0.1s;
    /* padding: .2rem; */

}


.sidenav a:hover {
    font-size: 1.2rem;

}

.sidenav .closebtn {
    position: absolute;
    top: 1rem;
    margin: 0rem 1rem;
    transform: rotate(45deg);
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 16px;
    }


}



/* 漢堡選單 */

#navbarBtn {
    display: none;
}


#navbarBtn {
    position: fixed;
    display: none;
    margin: 20px 10px;
    cursor: pointer;
    z-index: 100;
    background: #f5fff6;
    padding: 10px;
    border-radius: 10px;
    top: 3.3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.fa-solid,
.fas {
    font-weight: 900;
    color: rgb(98, 96, 96);
}






.bg-light {
    opacity: 0.9;
}

::-webkit-scrollbar {
    width: 0;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: transparent;
}

/* logo  start*/
.logo {
    max-width: 100%;
    width: 250px;
}

.logo img {
    width: 180px;
}

@media screen and (max-width: 768px) {
    .logo {
        width: 200px;
    }

    .logo img {
        width: 180px;
    }


}

@media screen and (max-width: 450px) {
    .logo {
        width: 200px;
    }

    .logo img {
        width: 160px;
    }
}

/* logo end*/

a {
    font-size: 1.2rem;
    margin: 1.2rem;
    display: block;
    color: black;
    transition: 0.3s;


}


.navbar {

    position: fixed;
    z-index: 999;
    width: 100%;
    opacity: .9;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.nav {
    display: none;
}

.nav a {
    font-size: 1.2rem !important;
    margin: 0rem 1rem;
    text-align: center;
}

.computer {

    display: flex;
}

.mobile {
    display: none;
}



@media screen and (max-width: 768px) {
    .computer {
        display: none;
    }

    .mobile {
        display: block;
    }

}

.icon {
    display: flex;
    width: 10px;
    display: fixed;
}

/* .tab-content {
    overflow: scroll;
    
  } */

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

.section {
    max-width: 1200px
}

nav a {
    font-size: 1.2rem;
    margin: 0rem 1rem;
    display: block;
    color: black;
    transition: 0.3s;
    text-align: center;
}

.navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    justify-content: end;
    margin: 0 1rem;
}

.bg-light {
    --bs-bg-opacity: 1;
    /* background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important; */
    background-color: #f3fff5 !important;
    ;
}

.nav-item {
    color: rgb(32, 32, 32);
    border-bottom: none;
    margin: 0.5rem;
}

b-navbar {
    position: fixed;
}




@media screen and (max-width: 768px) {
    #navbarBtn {
        display: none;
    }

    .computer {
        display: none;
    }

    nav a {
        font-size: 1rem;
        margin: 0rem 1rem;
        display: block;
        color: black;
        transition: 0.3s;
        text-align: center;
    }
}

.ddd {
    text-align: center;
    margin: .5rem 0rem;

}



.title {
    font-size: 1.4rem;
    font-weight: bolder;

}

h3 {
    margin: .5rem;
}
</style>
  
  
  
    