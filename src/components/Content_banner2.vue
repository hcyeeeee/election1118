<template>
    <div class="main">
        <h1>{{ title }}</h1>
        <a href="#">
            <picture>
                <source srcset="../assets/banner2.png" media="(max-width: 500px)" />
                <source srcset="../assets/banner2.png" media="(max-width: 768px)" />
                <source srcset="../assets/banner2.png" media="(max-width: 1024px)" />
                <img class="banner" src="../assets/banner2.png" alt="">
            </picture>
        </a>
        <!-- 倒數 -->
        <div class="addition">
            <div class="vote-box">
                <img class="box" src="../assets/投票箱.png" alt="box">
                <p>開票中</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '九合一選舉',
            newsInfo: [],
        }
    },


}
</script>

<style scoped>
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
    top: 4rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.fa-solid,
.fas {
    font-weight: 900;
    color: rgb(98, 96, 96);
}

#navbar1 {
    position: fixed;
    height: 100vh;
    z-index: 99;
    width: fit-content;
    margin: auto;
    display: flex;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    justify-content: center;
    background: #f5fff6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}


#navbar1 a {
    color: black;
    color: rgb(90, 87, 87);
}



#navbarBtn {
    display: flex;
}

#navbar1 {
    display: none;
}

.bg-light {
    opacity: 0.94;
}

h1.layout {
    font-size: 2.6rem;
    display: flex;
}

p.layout {
    font-size: 1.8rem;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
}

.guideText {
    margin: 10% 0;
}

.layout {
    max-width: 900px;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .layout {
        margin: 5%;
    }
}

h1 {
    position: absolute;
    top: -100%;
}

.main {
    position: relative;
}

.main,
.main a,
.main img.banner {
    width: 100%;
}

img.banner {
    margin-top: 4rem;
}

/* 投票箱 */

.addition {
    background: white;
    position: absolute;
    bottom: 0;
    right: 15%;
    padding: .5rem 4rem 0.5rem 0.5rem;
    border-radius: 30px 30px 0 0;

}

.addition .vote-box {
    display: flex;
    align-items: center;
    position: relative;
}

.addition .vote-box img {
    width: 120px;
    height: 120px;
    position: absolute;
    right: -4.8rem;
    top: -4rem;
}

.addition .vote-box p {
    margin: 0;
    padding: 1rem;

}


.timebox {
    display: flex;
}

#show {
    font-size: 3rem;
}




@media screen and (max-width: 768px) {
    .addition {
        background: white;
        position: absolute;

        right: 15%;
        padding: .2rem 1rem 0.1rem 0.1rem;
        border-radius: 25px 25px 0 0px;
    }

    .addition .vote-box img {
        width: 100px;
        height: 110px;
        position: absolute;
        right: -4.5rem;
        top: -3rem;
    }

    .addition .vote-box p {
        margin: 0;
        padding: .5rem .5rem 1rem;
    }

    #show {
        font-size: 2.2rem;
    }

}



@media screen and (max-width: 500px) {
    .addition {
        background: white;
        position: absolute;
        bottom: 20px;
        right: 20%;
        padding: .1rem 1rem 0.1rem 0.1rem;
        border-radius: 25px 0 0 25px;
    }

    .addition .vote-box img {
        width: 100px;
        height: 110px;
        position: absolute;
        right: -4.5rem;
        top: -3rem;
    }

    .addition .vote-box p {
        margin: 0;
        padding: .5rem .5rem 1rem;
    }

    #show {
        font-size: 2.2rem;
    }



}

/* caresol */
*,
*:after,
*:before {
    box-sizing: border-box;
}

/* Example images */


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
        margin-left: 0;
    }

    98% {
        margin-left: calc(100% + 200px);
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
    0% {
        margin-left: 0;
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
    height: 2rem;
    position: relative;
    margin: 0 auto;
    /* Left, Right Navigation Arrows */
}

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
    background-color: khaki;
    flex: none;
    margin-right: 150px;
}

#pSlider #slider-container .li_slide:nth-child(even) {}

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
    animation: tonext 4s infinite ease, snap 4s infinite ease;
}

@media (prefers-reduced-motion: reduce) {
    #pSlider #slider-container .li_slide .slide-snapper {
        animation-name: none;
    }
}

#pSlider #slider-container .li_slide:last-child .slide-snapper {
    animation-name: tostart, snap;
}

#pSlider #slider-container:hover .li_slide .slide-snapper,
#pSlider #slider-container:focus-within .li_slide .slide-snapper {
    animation-name: none;
}

#pSlider:before,
#pSlider:after,
#pSlider .prev_slide,
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
</style>
