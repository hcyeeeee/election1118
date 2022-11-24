<template >

    <div class="section1" id="news">
        <div class="bbb">

            <h3>{{ title }}</h3>
        </div>

        <ul class="desktop">
            <li @click="getData_ftvNews">最新新聞</li>
            <li @click="getData_ftvNews1">政治新聞</li>
            <li @click="getData_ftvNews2">修憲公投</li>
            <li><a href="#district">地方選戰</a></li>
            <!-- <li @click="getData_ftvNews4">新竹選戰</li> -->
        </ul>

        <ul class="mobile">
            <li @click="getData_ftvNews5">最新<br>新聞</li>
            <li @click="getData_ftvNews6">政治<br>新聞</li>
            <li @click="getData_ftvNews7">修憲<br>公投</li>
            <li><a href="#district">地方<br>選戰</a></li>
        </ul>

        <div class="section-box1">
            <div class="news-layout desktop">
                <div class="news" v-for="(item, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                        <div>
                            <img :src="item.Image" alt="新聞封面照" />
                        </div>
                        <div>
                            <h2 class="title">{{ item.Title }}</h2>
                        </div>
                        <div>
                            <p>{{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="news-layout mobile1">
                <div class="news" v-for="(item, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                        <div>
                            <img :src="item.Image" alt="新聞封面照" />
                        </div>
                        <div>
                            <h2 class="title">{{ item.Title }}</h2>
                        </div>
                        <div>
                            <p>{{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <a class="backbtn" href="https://www.ftvnews.com.tw/tag/九合一選舉/" target="blank">更多新聞</a>
    </div>

</template>

<script>
export default {
    data() {
        return {
            title: '最新新聞',
            newsInfo: [],
        }
    },
    mounted() {
        this.getData_ftvNews()
    },
    methods: {
        getData_ftvNews() {
            document.querySelectorAll('.news2').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews1() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews2() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=18歲公民權&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews3() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews4() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

        getData_ftvNews5() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews6() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews7() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=18歲公民權&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews8() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_ftvNews9() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

    },


}
</script>

<style scoped>
.bbb {
    background-image: url('../assets/newtitle.png');
}

.newtitle {
    width: 280px;
    margin: auto;
}

@media screen and (max-width: 900px) {
    .newtitle {
        width: 28px;
        margin: auto;
    }
}

@media screen and (max-width: 768px) {
    .newtitle {
        width: 200px;
        margin: auto;
    }
}


h3 {
    font-size: 2rem;
    font-style: italic;
    font-weight: bolder;
}


.titleimage {
    width: 80px;
    margin-left: -1rem;
    margin-top: -0.5rem;
    position: relative;
    left: -6rem;
    top: 8.5rem;

}

.title {
    display: flex;
    justify-content: center;
}

.backbtn {
    background-color: orange;
    border-radius: 30px;
    width: fit-content;
    padding: .5rem 1rem;
    margin: 1rem;
    color: #fff;
    top: -.5rem;
    position: relative;
    font-weight: bolder;
    font-size: 1.2rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

}

.section1 {
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 0rem 0rem 2rem 0rem;
    height: fit-content;

}


.news-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .news-layout {
        grid-template-columns: 1fr 1fr;
    }

    .titleimage {
        width: 150px;
        margin-left: -1rem;
        margin-top: -0.5rem;
        position: relative;
        left: -5rem;
        top: 10rem;

    }
}

@media screen and (max-width: 500px) {
    .news-layout {
        grid-template-columns: 1fr;

    }

}


.news {
    transition: 0.5s;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.news:hover {
    display: block;
    background-color: #cae3bb;
    text-decoration: none !important;
}

.news:hover h2,
.news:hover p {
    color: rgb(42, 42, 42);
}

.news h2 {
    padding: 0.3rem 1rem;
}

.news p {
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    font-weight: lighter;
}

.news img {
    width: 100%;
}



.title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 解決firefox不支援-webkit-line-clamp的問題 */
    line-height: 30px;
    max-height: 60px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.3rem;
}

.mobile {
    display: none;
}

.mobile1 {

    display: none;
}

/* 導覽列 */

ul {
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: no-wrap;
    position: relative;
    /* top: -3.3rem; */
}

ul li {
    text-align: center;
    margin: 0.5rem;
    border-radius: 10px 10px;
    padding: .8rem 1.2rem;
    opacity: .9;
    cursor: pointer;
    color: #2e2e2e;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    background: white;
    margin-bottom: -1rem;
    font-size: 1.2rem;
    font-weight: bolder;
    line-height: 1.2rem;

}


ul li:hover {
    background-color: orange;
    color: white;
}

ul li a:hover {
    background-color: orange;
    color: white;

}


ul li:active {
    background-color: orange;
    color: white;
}

ul li a:active {
    background-color: orange;
    color: white;

}

.news a div:nth-child(1) {
    overflow-y: hidden;
    max-height: 150px;
}

.btn_more {
    max-width: 300px;
    margin: 2rem auto;

    padding: 0.6rem;
    display: block;
    cursor: pointer;
    text-align: center !important;

}

.btn_more a {

    border: 1px solid #595757;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    box-shadow: 1px 2px 3px gray;
    cursor: pointer;
    font-size: 1.2rem;
    opacity: .9;

}

.btn_more a:hover {
    background-color: rgb(217, 246, 201);
    color: #000000;
    opacity: 1;
}

.btn_more a:active {
    background: rgb(255, 255, 255, .8);
}

a {
    color: #2e2e2e;
}

.section1 {
    margin: 0rem auto;
}

@media screen and (max-width: 768px) {
    .section1 {
        margin: 1rem 1rem;
    }

    ul li {
        text-align: center;
        margin: .5rem;
        border-radius: 10px;
        padding: 0.7rem .5rem;

    }


    ul {
        margin: 0rem;
        position: relative;
        /* top: -3rem; */
    }
}

@media screen and (max-width: 500px) {
    .title {
        font-size: 1.2rem;
    }

    .line {
        display: flex;
        padding: 0px;
    }

    .desktop {
        display: none;
    }

    .mobile {
        display: flex;
        margin: auto 1rem;
    }

    .mobile1 {
        display: grid;
    }

    ul li {
        text-align: center;
        margin: auto .3rem;
        border-radius: 10px;
        padding: .5rem 1rem;
        opacity: .9;
        cursor: pointer;
        color: #2e2e2e;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        background: white;
        font-size: 1rem;
        font-weight: 700;


    }


    ul {
        margin: 0rem;
        position: relative;
        /* top: -2.2rem; */
    }

    .section1 {
        margin: 1rem 1rem;
    }



}


.section-box {
    height: fit-content;
}

.section-box1 {
    margin: 1rem auto;
    padding: 1rem;
}
</style>
