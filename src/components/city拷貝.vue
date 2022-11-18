<template>
    <div class="aaa" id="profile">

        <div class="section">
            <h3>{{ title }}</h3>
            <!-- 區域 -->
            <div class>
                <select v-model="selected">
                    <option :value="city.cityNo" v-for="city, idx in citys" :key="idx">{{
                            city.cityName
                    }}
                    </option>
                </select>
                <!-- big -->
                <div class="layout_up">
                    <div class="" v-for="(item, index) in citys[selected].tickets" :key="index">
                        <div class="layout_card">
                            <div>
                                <img class="person_img"
                                    :src="' https://www.ftvnews.com.tw/topics/test/image/' + item.candName + '.jpg'"
                                    alt="personal" />
                            </div>
                            <div class="content">

                                <h4>{{ item.candNo }}{{ item.candName }}</h4>
                                <p class="party_up">{{ item.party }}</p>
                            </div>

                            <div class="ticket">
                                <p class="ticket_up"> {{ item.ticket }}</p>
                            </div>
                        </div>
                        <progress class="progress_class" max=100 :value=item.ticket />
                    </div>
                </div>
                <!-- small -->
                <div class="test">
                    <div class="" v-for="(item, index) in citys[selected].tickets" :key="index">
                        <div class="layout_down" v-if="index >= 4">
                            <div class="layout">
                                <img class="person_img"
                                    :src="' https://www.ftvnews.com.tw/topics/test/image/' + item.candName + '.jpg'"
                                    alt="新聞封面照" />
                                <p>{{ item.candNo }}</p>
                                <p>{{ item.candName }}</p>
                                <p>{{ item.party }}</p>
                                <p> {{ item.ticket }} </p>
                                <progress class="progress_small" max=100 :value=item.ticket />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="backtohome" href="/">返回儀表板</a>
        </div>
        <!-- zone end-->
    </div>
</template>

<script>
export default {

    data() {
        // let citys={};
        return {
            title: "縣市長選舉開票",
            taipei: [],
            citys: null,
            // selected: 'A01',
            selCity: null,
            counter: null,
        }
    },
    methods: {
        getData_vote() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://melect-api.ftvnews.com.tw/Tickets/ftvelect.json').then((response) => {

                    // let data = response.data.T1.detail[1].tickets
                    // let data = response.data
                    this.preOrderData(response.data)


                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

        preOrderData(data) {
            let t1 = data.T1.detail

            let citys = {}
            t1.forEach(function (city) {
                if (city !== null) {
                    city.tickets.sort(function (a, b) {
                        return b.ticket - a.ticket
                    })
                    citys[city.cityNo] = city

                }
            })

            this.citys = citys
            console.log(typeof this.citys);

            this.insertData_vote()
        },

        insertData_vote() {
            //判斷選取哪個縣市的總票數
            switch (this.selected) {
                case 'A01': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 3000000;
                    }
                    break;
                }
                case 'A02': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
                    console.log(this.selected)
                    break;
                }
                case 'A03': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
                    break;
                }
                case 'A04': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
                    break;
                }
                case 'A05': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
                    break;
                }
                case 'A06': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
                    break;
                }
                case 'B01': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B02': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B03': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B04': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B05': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B06': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B07': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B08': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B09': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B10': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B11': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B12': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B13': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B41': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                case 'B15': {
                    let nodeList3 = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList3.length; i++) {
                        nodeList3[i].max = 1000000;
                    }
                    break;
                }
                default: {
                    break;
                }
            }

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
        }, 1000);
    },
}
</script>

<style scoped>
@media screen and (max-width: 900px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 500px) {}

.backtohome {
    background-color: orange;
    border-radius: 30px;
    width: fit-content;
    padding: .5rem 1rem;
    margin: 1rem;
    color: #fff;
    top: -3rem;
    position: relative;
    right: -23rem;
    font-weight: bolder;
    font-size: 1.2rem;
}


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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media screen and (max-width: 900px) {
    .test {
        display: flex;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 768px) {
    .test {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .test {
        display: flex;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 500px) {
    .test {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .test {
        display: flex;
        flex-wrap: wrap;
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


