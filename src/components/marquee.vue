<template>
    <div class="main">
        <div class="pop">快訊<img src="../assets/pop.png" alt=""></div>
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" background="#FFF8ED" img-width="1024"
            img-height="60"
            style=" box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <b-carousel-slide v-for="(item, index) of newsInfo" :key="index" img-blank img-alt="Blank image">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                    {{ item.Title }}</a>
            </b-carousel-slide>
        </b-carousel>

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
            axios
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
    },
}
</script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 9fr;
}

.pop {
    color: white;
    font-size: 1.3rem;
    height: 35;
    background: orange;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    text-shadow: rgb(0 0 0 / 50%) 0px 2px 10px;

}

.pop img {
    height: 2.5rem;
    padding: .3rem;
}


</style>



