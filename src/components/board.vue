<template>
    <div>
        <div class="section" id="board">
            <h3>選情儀表板</h3>
            <div class="board">
                <div class="box" v-for="(item, index) of this.taipei" :key="index">
                    <div class="ct">
                        <P> 台北市</P>
                    </div>
                    <div>
                        <p> {{ item.candName }}</p>
                        <p> {{ item.ticket }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="yesorno">
                <h2>18修憲開票公投</h2>
                <div class="vote">
                    <p>100,000</p>
                    <p>110,000</p>
                </div>
                <div class="aaa">
                    <p>同意</p>
                    <progress class="progress_class" max="100" value="80" />
                    <p>不同意</p>
                </div>
                <p>註：達標門檻為954萬00000票</p>
                <a>修憲公投Ｑ＆Ａ</a>
                <a>互動遊戲</a>
            </div>
        </div>
    </div>


</template>

<!-- 功能 -->
<!-- 票數最高的在上面 -->
<!-- 票數前三世大的 -->
<!-- option傳值 -->
<!-- 儀表板顏色 -->
<!-- 最高票取代在前面 -->


<script>

export default {
    data() {
        return {
            title: '縣市議員候選人',
            taipei: [],
            all: [],
        }
    },
    methods: {
        getData_vote() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://melect-api.ftvnews.com.tw/Tickets/ftvelect.json')
                .then((response) => {
                    console.log(response)
                    let data = response.data.T1.detail[1].tickets
                    console.log('dataaaaa', data)
                    data.forEach((item) => {
                        this.taipei.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        getData_vote1() {
            // eslint-disable-next-line no-undef
            axios
                .get('https://melect-api.ftvnews.com.tw/Tickets/ftvelect.json')
                .then((response) => {
                    console.log(response)
                    let data = response.data.T1.detail
                    console.log('dataaaaa', data)
                    data.forEach((item) => {
                        this.all.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
    },
    mounted() {
        this.getData_vote(),
            this.getData_vote1()
    },
    computed: {
        getProfile() {
            return this.$store.state.Yilan
        },
        getProfile1() {
            return this.$store.state.Keelung
        },
        getProfile2() {
            return this.$store.state.Taipei
        },
        getProfile3() {
            return this.$store.state.Newtaipei
        },
        getProfile4() {
            return this.$store.state.Taoyuan
        },
        getProfile6() {
            return this.$store.state.HsinchuCountry
        },
        getProfile5() {
            return this.$store.state.HsinchuCity
        },
        getProfile7() {
            return this.$store.state.Miaoli
        },
        getProfile8() {
            return this.$store.state.Taichung
        },
        getProfile9() {
            return this.$store.state.Changhua
        },
        getProfile10() {
            return this.$store.state.Nantou
        },
        getProfile11() {
            return this.$store.state.Yunlin
        },
        getProfile12() {
            return this.$store.state.ChiayiCity
        },
        getProfile13() {
            return this.$store.state.ChiayiCountry
        },
        getProfile14() {
            return this.$store.state.Tainan
        },
        getProfile15() {
            return this.$store.state.Kaohsiung
        },
        getProfile16() {
            return this.$store.state.Pingtung
        },
        getProfile17() {
            return this.$store.state.Hualien
        },
        getProfile18() {
            return this.$store.state.Taitung
        },
        getProfile19() {
            return this.$store.state.Penghu
        },
        getProfile20() {
            return this.$store.state.Kinmen
        },
        getProfile21() {
            return this.$store.state.Lienchiang
        },

    },
}
</script>



<style scoped>
.section {
    max-width: 1000px;
    padding: .5rem 1rem;
    background-color: rgb(255, 255, 255);
    margin: 1rem auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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

@media screen and (max-width: 900px) {
    .board {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .section {
        margin: 1rem;
    }



}

@media screen and (max-width: 768px) {
    .board {
        grid-template-columns: 1fr 1fr 1fr;
        margin: .5rem auto;
    }

    p {
        padding: .3rem;
    }

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
}

.progress {
    border-radius: 1rem;

}

.progress_class::-webkit-progress-value {
    background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);
    border-radius: 8px;
}


.progress_class::-webkit-progress-bar {
    background-color: #d7d7d7;
}


.aaa {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}

.vote {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
}







.photo {
    width: 100px;
    height: 100px;
}

.layout_voting {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
