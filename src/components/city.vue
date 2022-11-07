<template>
    <div class="aaa" id="profile">
        <h3>{{ title }}</h3>
        <div class="section">
            <!-- 區域 -->
            <b-tabs content-class="mt-3" fill>
                <div class>
                    <b-tab title="北部">
                        <b-tabs content-class="mt-3" class="tabsize" fill>
                            <b-tab title="台北市" class="tabsize">
                                <!-- big -->
                                <div class="layout_up">
                                    <div class="" v-for="(item, index) of this.taipei" :key="index">
                                        <div class="layout_card">
                                            <div>
                                                <!-- <img class="person_img" :src="getProfile1[index].photo" alt="personal"
                                                loading="lazy"> -->
                                                <img class="person_img"
                                                    :src="' https://www.ftvnews.com.tw/topics/test/image/' + item.candName + '.jpg'"
                                                    alt="新聞封面照" />
                                            </div>
                                            <div class="content">
                                                <h4>{{ item.candName }}</h4>
                                                <p class="party_up">{{ item.party }}</p>
                                            </div>

                                            <div class="ticket">
                                                <p class="ticket_up"> {{ item.ticket }}</p>
                                            </div>
                                        </div>
                                        <progress class="progress_class" max="100" value="80" />
                                    </div>
                                </div>
                                <!-- small -->
                                <div class="test">
                                    <div class="layout_down" v-for="(item, index) of this.taipei" :key="index">
                                        <div class="layout">
                                            <img class="person_img"
                                                :src="' https://www.ftvnews.com.tw/topics/test/image/' + item.candName + '.jpg'"
                                                alt="新聞封面照" />
                                            <p>{{ item.candName }}</p>
                                            <p>{{ item.party }}</p>
                                            <p> {{ item.ticket }} </p>
                                            <progress class="progress_small" max="100" value="80" />
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>
                </div>
            </b-tabs>
        </div>
        <!-- zone end-->
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "縣市長候選人",
            taipei: [],
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
                    console.log('rraaaa', data)
                    data.forEach((item) => {
                        this.taipei.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
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
    mounted() {
        this.getData_vote()
    },
}
</script>

<style scoped>
@media screen and (max-width: 900px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 500px) {}

.section {
    background: #fff;
    margin: 1rem;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;

}

.person_img {
    border-radius: 100px;
    width: 130px;
    height: 130px;
    object-fit: cover;
    margin: 1rem auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.party_img {
    display: none;
}

.layout_card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 1rem auto
}

.layout_up {
    margin: auto;

}

.content {
    text-align: left;
    font-size: 60px;
}

h4 {
    font-size: 3rem
}

p {
    font-size: 1.5rem;
    text-align: center;

}

/* up:前三名樣式 */
.party_up {
    text-align: left;
    font-size: 1.8rem;
}

.ticket_up {

    font-size: 3rem;
    margin-top: 1rem;
}

.layout_up {
    height: 650px;
    overflow: hidden;
}

.layout_down {
    display: grid;
}

.test {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 900px) {
    .test {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .test {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .test {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}



.progress_class {
    width: 60%;
    overflow: hidden;
    /*设置iOS下清除灰色背景*/
    appearance: none;
    border-radius: .5rem;
    -webkit-appearance: none;
    bottom: 4rem;
    left: 8rem;
    height: 2rem;
}

progress {
    position: relative;

}

.progress_class::-webkit-progress-value {
    background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);
    border-radius: 8px;
}


.progress_class::-webkit-progress-bar {
    background-color: #d7d7d7;
}

.progress_small {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    /*设置iOS下清除灰色背景*/
    appearance: none;
    border-radius: .5rem;
    -webkit-appearance: none;
    bottom: 0rem;

}


.progress_small::-webkit-progress-value {
    background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);
    border-radius: 8px;
}


.progress_small::-webkit-progress-bar {
    background-color: #d7d7d7;
}


.layout {
    margin: 1rem;
}
</style>


