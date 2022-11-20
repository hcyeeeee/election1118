<template>
    <div class="section" id="district">
        <h3><img src="../assets/districttitle.png" alt="title">{{ title }}</h3>

        <ul class="desktop">
            <li @click="get_ftvNews">台北市</li>
            <li @click="get_ftvNews1">新北市</li>
            <li @click="get_ftvNews2">桃園市</li>
            <li @click="get_ftvNews3">新竹市</li>
            <li @click="get_ftvNews4">台中市</li>
            <li @click="get_ftvNews5">台南市</li>
            <li @click="get_ftvNews6">高雄市</li>
            <li @click="get_ftvNews15">花蓮縣</li>
        </ul>

        <ul class="mobile" :class="{ fixed: active }">
            <li @click="get_ftvNews7">台北市</li>
            <li @click="get_ftvNews8">新北市</li>
            <li @click="get_ftvNews9">桃園市</li>
            <li @click="get_ftvNews10">新竹市</li>
            <li @click="get_ftvNews11">台中市</li>
            <li @click="get_ftvNews12">台南市</li>
            <li @click="get_ftvNews13">高雄市</li>
            <li @click="get_ftvNews14">花蓮縣</li>
        </ul>

        <div class="section-box1">
            <div class="news-layout desktop">
                <div class="news1" v-for="(item, index) of newsInfo" :key="index">
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

                <div class="gliaplayer-container" data-slot="tw_ftvnews_election_desktop"
                    data-article="ftvnew.com.tw/election">
                </div>

            </div>

            <div class="news-layout mobile1">
                <div class="news1 " v-for="(item, index) of newsInfo" :key="index">
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

            <div class="gliaplayer-container limit" data-slot="tw_ftvnews_election_mobile"
                data-article="ftvnew.com.tw/election">
            </div>

            <a class="backbtn" href="https://www.ftvnews.com.tw/tag/六都選戰/" target="blank">更多新聞</a>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            title: '地方選戰',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            district: '',
            newsInfo: [],
            active: false, // 控制nav高度到達條件就轉成true，並加入class="fixed"
        }
    },
    mounted() {
        this.get_ftvNews()
    },
    methods: {
        get_ftvNews() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=8')
                .then((response) => {
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
        get_ftvNews1() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=8')
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
        get_ftvNews2() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=8')
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
        get_ftvNews3() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=8')
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
        get_ftvNews4() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=8')
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

        get_ftvNews5() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=8')
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
        get_ftvNews6() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=8')
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
        get_ftvNews7() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=4')
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
        get_ftvNews8() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=4')
                .then((response) => {
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews9() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=4')
                .then((response) => {
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
        get_ftvNews10() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=4')
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
        get_ftvNews11() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=4')
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
        get_ftvNews12() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=4')
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
        get_ftvNews13() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=4')
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
        get_ftvNews14() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=花蓮縣選戰&Page=1&sp=4')
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
        get_ftvNews15() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=花蓮縣選戰&Page=1&sp=8')
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
    }
}
</script>

<style scoped>
h3 {
    margin: 2rem 0 0rem;
    font-size: 2rem;
    font-style: italic;
    font-weight: bolder;
}


h3 img {
    width: 60px;
    margin-top: -0.5rem;
}

.section {
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 0rem 0rem 2rem 0rem;
    height: fit-content;

}

.backbtn {
    background-color: orange;
    border-radius: 30px;
    width: fit-content;
    padding: .5rem 1rem;
    margin: 1rem;
    color: #fff;
    top: 1.5rem;
    position: relative;
    font-weight: bolder;
    font-size: 1.2rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.news-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 1rem;
}

.fixed {
    z-index: 9999 !important;
    position: fixed !important;
    top: 0 !important;
    overflow-y: hidden;
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    background-color: #f3fef5;
    opacity: .9;

}


.limit {
    display: none;
}

@media screen and (max-width: 768px) {
    .news-layout {
        grid-template-columns: 1fr 1fr;
    }

    .gliaplayer-container {
        padding: 2rem;
    }


}

@media screen and (max-width: 500px) {
    .news-layout {
        grid-template-columns: 1fr;
    }

    .limit {
        display: block;
    }

}


.news1 {
    transition: 0.5s;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.news1:hover {
    display: block;
    background-color: #cae3bb;
    text-decoration: none !important;
}

.news1:hover h2,
.news1:hover p {
    color: rgb(42, 42, 42);
}

.news1 h2 {
    padding: 0.3rem 1rem;
}

.news1 p {
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    font-weight: lighter;
}

.news1 img {
    width: 100%;
}

/* ul {
    margin: 2rem;
} */

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





ul {
    display: flex;
    justify-content: center;

}

ul li {
    text-align: center;
    margin: 0.5rem;
    border-radius: 10px;
    padding: .8rem 1.2rem;
    opacity: .9;
    cursor: pointer;
    color: #2e2e2e;
    background: white;
    font-size: 1.2rem;
    font-weight: bolder;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

.news1 a div:nth-child(1) {
    overflow-y: hidden;
    max-height: 150px;
}


a {
    color: #2e2e2e;
}

@media screen and (max-width: 768px) {
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .section {
        margin: 2rem 1rem !important;

    }


}

@media screen and (max-width: 500px) {


    .desktop {
        display: none;
    }

    .mobile {
        display: grid;
        padding: 0rem 1rem;
    }

    .mobile1 {
        display: grid;
        overflow: hidden;
        /* height: 1720px; */
        height: 860px;
    }


    ul li {
        text-align: center;
        margin: 0.3rem;
        border-radius: 10px;
        padding: 0.8rem .5rem;
        opacity: .9;
        cursor: pointer;
        color: #2e2e2e;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        background: white;
        font-size: 1rem;
        font-weight: bolder;
        border-radius: 1px solid rgb(255, 165, 0, );
    }

    .section {
        margin: 2rem 1rem !important;

    }



}

.section-box1 {
    margin: 1rem auto;
    padding: 1rem;
}
</style>

