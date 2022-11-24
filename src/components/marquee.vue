<template>

    <div class="main">
        <div class="pop">
            <h4 class="desktop">快訊</h4><img src="../assets/pop.png" alt="">
        </div>
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" background="#FFF8ED"
            style=" background=#FFF8ED, box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <b-carousel-slide v-for="(item, index) of newsInfo" :key="index">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                    {{ item.Title }}</a>
            </b-carousel-slide>
        </b-carousel>

        <div class="mumu">
            開票倒數：
            <span class="num" id="hours"></span><span>時</span>

            <span class="num" id="minutes"></span><span>分</span>

            <span class="num" id="seconds"></span><span>秒</span>
        </div>

    </div>
</template>


<script>

export default {
    data() {
        return {
            title: '九合一選舉',
            newsInfo: [],
            slide: 0,
            sliding: null
        }
    },
    methods: {

        getData_ftvNews() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉')
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
    mounted() {
        this.getData_ftvNews()
        var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24
        var countDown = new Date('Nov 26, 2022 16:00:00').getTime()

        setInterval(() => {
            var now = new Date().getTime(), distance = countDown - now;
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            document.getElementById('hours').innerText;
            document.getElementById('minutes').innerText;
            document.getElementById('seconds').innerText;
        }, second);
    },
}
</script>

<style scoped>
.mumu {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    font-weight: blod;
    align-items: center;
    background: #f7e1e1;
    box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
}

#carousel-1 {
    padding: 1rem .8rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

.main {
    display: grid;
    grid-template-columns: 1fr 9fr 3fr;
}

.pop {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    height: 35;
    background: orange;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    text-shadow: rgb(0 0 0 / 50%) 0px 2px 10px;

}

.pop h4 {
    margin: auto
}

.pop img {
    height: 2rem;
    margin: .5rem 0rem;
}

.desktop {
    display: inline-block;
}

@media screen and (max-width: 900px) {
    .desktop {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .pop {
        color: white;
        font-size: 1.2rem;
        height: 35;
        background: orange;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        text-shadow: rgb(0 0 0 / 50%) 0px 2px 10px;

    }

    .pop img {
        height: 2.5rem;
        padding: .3rem;
    }

    .main {
        display: grid;
        grid-template-columns: 1fr 9fr;
    }

    .mumu {
        display: none;
    }

}
</style>



