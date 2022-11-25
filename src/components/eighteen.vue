<template>
    <div>
        <div class="section">
            <img class="eighteentitle" src="../assets/eighteentitle.png" alt="18歲公民權修憲開票公投">
            <div class="yesorno">
                <div class="vote">
                    <p class="agree_vote mobile"> 同意</p>
                    <p class="disagree_vote mobile">不同意</p>
                </div>
                <div class="vote">
                    <p class="agree_vote"> {{ this.vote_agree }}</p>
                    <p class="disagree_vote">{{ this.vote_disagree }}</p>
                </div>

                <progress show-progress animated class="progress_class  mobile" :max="allticket" :value="current" />
            </div>
            <div class="pro">
                <p class="agree_vote desktop">同意</p>
                <progress class="progress_class  desktop" :max="allticket" :value="current" />
                <p class="disagree_vote  desktop">不同意</p>
            </div>
            <p>註：達標門檻為:961萬9697票</p>
            <div class="allbtn" id="video">
                <a class="backbtn" href="https://www.ftvnews.com.tw/topics/test/#/qa">修憲公投Ｑ＆Ａ</a>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            vote_agree: 0,
            vote_disagree: 0,
            odometer: '',
            allticket: Number,
            current: Number,
        }
    },
    methods: {
        getVote() {
            // eslint-disable-next-line no-undef
            this.axios.get('https://www.ftvnews.com.tw/topics/test/election.json').then((response) => {
                let res = response.data.T3.detail[0].tickets
                let agree, disagree;
                res.forEach((element, index) => {
                    let { eighteentickets } = { 'eighteentickets': element.ticket }
                    if (index === 0) {
                        agree = eighteentickets
                        this.vote_agree = eighteentickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'
                    } else {
                        disagree = eighteentickets
                        this.vote_disagree = eighteentickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'
                    }
                })
                this.allticket = agree + disagree
                this.current = agree
            })
        },
    },
    created() {
        this.getVote()
    },
    mounted() {

        setInterval(() => {
            this.getVote()
        }, 10000);

    },
}
</script>

<style scoped>
.mobile {
    display: none;
}

.desktop {
    display: block;
}

.eighteentitle {
    width: 500px;
    margin: auto;
}

@media screen and (max-width: 900px) {
    .eighteentitle {
        width: 400px;
        margin: auto;
    }
}

@media screen and (max-width: 768px) {
    .eighteentitle {
        width: 280px;
        margin: auto;
    }
}

@media screen and (max-width: 500px) {

    .mobile {
        display: block;
    }

    .desktop {
        display: none;
    }


}

.pro {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
}

.vote {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 30px;
}

.vote p {

    font-size: 1.5rem;
    font-weight: bolder;
}

.allbtn {
    display: flex;
    margin: auto;
    justify-content: center;

}

.backbtn {
    background-color: orange;
    border-radius: 30px;
    width: fit-content;
    padding: .5rem 1rem;
    margin: 1rem;
    color: #fff;
    font-weight: bolder;
    font-size: 1.2rem;
}

.party-blue {
    background: lightblue;
}

.section {
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 3rem auto;

}

@media screen and (max-width: 900px) {
    .section {
        margin: 1rem;
    }
}

.board {
    margin: .1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 3px solid rgb(224, 242, 222);
    border-radius: 1rem;
    margin: .4rem;
    cursor: pointer;

}

p {
    width: fit-content;
    text-align: center;
    margin: auto;
    padding: .8rem;
}

h3 {
    margin: auto;
    padding: .5rem;
}


.ct {
    border-radius: .8rem 0rem 0rem .8rem;
    background: rgb(227, 242, 180);
    text-align: center;
    background-size: cover;


}

.progress_class {
    width: 100%;
    height: 2rem;
    overflow: hidden;
    /*设置iOS下清除灰色背景*/
    appearance: none;
    border-radius: 1rem;
    -webkit-appearance: none;
    margin: 1rem auto
}

@media screen and (max-width: 500px) {

    .progress_class {
        width: 80%;
        margin: auto;
        height: 1.5rem;
    }
}


.progress {
    border-radius: 1rem;

}

.progress_class::-webkit-progress-value {
    background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);


}


.progress_class::-webkit-progress-bar {
    background-color: #d7d7d7;
    background: #c3c3c3;
    background: linear-gradient(90deg, rgb(210, 210, 210) 0%, rgb(176, 176, 176) 100%);
}

.agree {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}


.odometer {
    font-size: 100px !important;
    font-weight: 700 !important;
}

.odometer.odometer-auto-theme,
.odometer.odometer-theme-default {
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    position: relative;
}

.odometer.odometer-auto-theme .odometer-digit,
.odometer.odometer-theme-default .odometer-digit {
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    position: relative;
}

.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
.odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    visibility: hidden;
}

.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
.odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {
    text-align: left;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,
.odometer.odometer-theme-default .odometer-digit .odometer-ribbon {
    display: block;
}

.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
.odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {
    display: block;
    -webkit-backface-visibility: hidden;
}

.odometer.odometer-auto-theme .odometer-digit .odometer-value,
.odometer.odometer-theme-default .odometer-digit .odometer-value {
    display: block;
    -webkit-transform: translateZ(0);
}

.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
.odometer.odometer-theme-default .odometer-digit .odometer-value.odometer-last-value {
    position: absolute;
}

.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
.odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform 2s;
    -moz-transition: -moz-transform 2s;
    -ms-transition: -ms-transform 2s;
    -o-transition: -o-transform 2s;
    transition: transform 2s;
}

.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,
.odometer.odometer-theme-default.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
}

.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
.odometer.odometer-theme-default.odometer-animating-down .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
}

.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
.odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform 2s;
    -moz-transition: -moz-transform 2s;
    -ms-transition: -ms-transform 2s;
    -o-transition: -o-transform 2s;
    transition: transform 2s;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}

.odometer.odometer-auto-theme,

.odometer.odometer-auto-theme .odometer-value,
.odometer.odometer-theme-default .odometer-value {
    text-align: center;
}
</style>


