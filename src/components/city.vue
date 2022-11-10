<template>
    <div class="aaa" id="profile">
        <h3>{{ title }}</h3>
        <div class="section">
            <!-- 區域 -->
            <div class>
                <select v-model="selected">
                    <option :value="city.cityNo" v-for="city, idx in citys" :key="idx">{{
                            city.cityName}}
                    </option>
                </select>


                <!-- big -->
                <div class="layout_up">
                    <div class="" v-for="(item, index) in citys[selected].tickets" :key="index">
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
                    <div class="layout_down" v-for="(item, index) in citys[selected].tickets" :key="index">
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
            </div>
        </div>
        <!-- zone end-->
    </div>
</template>

<script>

export default {

    data() {
        // let citys={};
        return {
            title: "縣市長候選人",
            taipei: [],
            citys: null,
            selected: 'A01',
            selCity: null,
            counter: null

        }
    },
    methods: {
        preOrderData(data) {
            let t1 = data.T1.detail
            let citys = {}
            t1.forEach(function (city) {
                // console.log('source', citys)
                if (city !== null) {
                    city.tickets.sort(function (a, b) {
                        return b.ticket - a.ticket
                    })
                    citys[city.cityNo] = city
                }
            })
            this.citys = citys
            console.log('order', this.citys)

        },
        getData_vote() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/election.json')
                .then((response) => {
                    console.log(response)
                    // let data = response.data.T1.detail[1].tickets
                    // let data = response.data
                    this.preOrderData(response.data)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

    },
    created() {
        this.getData_vote()
    },
    mounted() {
        let selCity = document.location.href.split("?")[1].split("=")[1]
        this.selected = selCity
        this.counter = setInterval(() => {
            this.getData_vote()
        }, 10000);
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
    margin: 1rem auto;

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
    padding: 3rem;
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


