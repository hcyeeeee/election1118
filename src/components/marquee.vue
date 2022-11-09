<template>
    <div class="main">

        <!-- <div id="pSlider" class="sss">
            <div class="pop"><img src="../assets/pop.png" alt="">
            </div>
            <ol id="slider-container" dir="ltr">
                <li id="slide_1" class="li_slide" v-for="(item, index) of newsInfo" :key="index">
                    <div class="slide-snapper">
                        <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                            {{ item.Title }}</a>
                    </div>
                </li>
            </ol>
        </div> -->
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;">

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
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
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉&page=1')
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
.li_slide {
    background-size: cover;
    background-position: center;
}

/* Animations */
@keyframes tonext {
    75% {
        margin-left: 0;
    }

    95% {
        margin-left: calc(100% + 150px);
    }

    98% {
        margin-left: calc(100% + 150px);
    }

    99% {
        margin-left: 0;
    }
}

@keyframes snap {
    96% {
        scroll-snap-align: start;
    }

    97% {
        scroll-snap-align: none;
    }

    99% {
        scroll-snap-align: none;
    }

    100% {
        scroll-snap-align: start;
    }
}

@keyframes tostart {
    75% {
        margin-left: 0;
    }

    95% {
        margin-left: calc(-300% - 450px);
    }

    98% {
        margin-left: calc(-300% - 450px);
    }

    99% {
        margin-left: 0;
    }
}

/* Reset */
ol,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

#pSlider {
    width: 100%;
    height: 2.5rem;
    position: relative;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.pop {
    height: 2.5rem;
    background: orange;
}

.pop img {
    height: 2.5rem;
}

.slide-snapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
}

.slide-snapper a {
    padding: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* @media screen and (max-width: 768px) {
    #pSlider {
        height: 2rem;
    }

    .pop {
        height: 2rem;
    }

    .pop img {
        align-items: center;
        justify-content: center;
        height: 2rem;
    }

    .slide-snapper {
        font-size: 1rem;
    }

    .slide-snapper a {
        padding: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }



} */

#pSlider #slider-container {
    display: flex;
    height: 100%;
    width: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
}

#pSlider #slider-container .li_slide {
    position: relative;
    width: 100%;
    border-radius: 0px;
    background-color: #FFF8EE;
    flex: none;
    margin-right: 150px;
}

#pSlider #slider-container .li_slide:last-child {
    margin-right: 0;
}

#pSlider #slider-container .li_slide .slide-snapper {
    /* Auto play */
    scroll-snap-align: start;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-animation: snap 4s infinite ease, tonext 4s infinite ease;
}

@media (prefers-reduced-motion: reduce) {
    #pSlider #slider-container .li_slide .slide-snapper {
        animation-name: none;
    }
}

#pSlider #slider-container .li_slide:last-child .slide-snapper {
    animation-name: tostart, snap;
}

#pSlider #slider-container:focus-within .li_slide .slide-snapper {
    animation-name: none;
}

#pSlider .next_slide {
    display: inline-block;
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    z-index: 2;
    cursor: pointer;
}

#pSlider:before,
#pSlider:after {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
}

#pSlider .next_slide {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 20px;
}

#pSlider .prev_slide {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px;
}



#pSlider:after {
    z-index: 1;
    /* set underneath .next_slide (z: 2)*/
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='60' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cpolyline points='10 10 30 30 10 50' stroke='rgba(255,255,255,0.9)' stroke-width='4' stroke-linecap='butt' fill='none' stroke-linejoin='round'%3E&lt;%3C/polyline%3E%3C/svg%3E");
}

#pSlider:before {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='60' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cpolyline points='30 10 10 30 30 50' stroke='rgba(255,255,255,0.9)' stroke-width='4' stroke-linecap='butt' fill='none' stroke-linejoin='round'%3E&gt;%3C/polyline%3E%3C/svg%3E");
}

/* Scrollbar */
#pSlider #slider-container::-webkit-scrollbar {
    display: none;
    height: 5px;
}

#pSlider #slider-container::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 50px;
}

#pSlider #slider-container::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Input */

#sliderSettings {
    text-align: center;
}

#slider-width,
#slider-height {
    text-align: center;
    margin-bottom: 20px;
}

.sss {
    display: grid;
    grid-template-columns: 1fr 7fr;
}

@media screen and (max-width: 768px) {
    .sss {
        display: none;

    }
}
</style>
