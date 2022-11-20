<template>
    <div class="aaa" id="profile">

        <div class="section" v-if="citys !== null">
            <h3>{{ citys[selected].cityName }}長選舉開票</h3>
            <!-- 區域 -->
            <div>
                <select v-model="selected">
                    <option :value="city.cityNo" v-for="city, idx in citys" :key="idx">{{
                            city.cityName
                    }}
                    </option>
                </select>


                <!-- big -->
                <div class="layout_up">
                    <div class="layout_card_height" v-for="(item, index) in citys[selected].tickets" :key="index">
                        <div class="layout_card" v-if="index < 3">
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
                                <p class="ticket_up"> {{ item.ticket.toLocaleString() }}</p>
                            </div>
                        </div>
                        <progress v-if="index < 3" class="progress_class" max=100 :value=item.ticket />
                    </div>
                </div>
                <!-- small -->
                <div class="test">
                    <div class="" v-for="(item, index) in citys[selected].tickets" :key="index">
                        <div class="layout_down" v-if="index >= 3">
                            <div class="layout">
                                <img class="person_img"
                                    :src="' https://www.ftvnews.com.tw/topics/test/image/' + item.candName + '.jpg'"
                                    alt="新聞封面照" />
                                <p>{{ item.candNo }}</p>
                                <p>{{ item.candName }}</p>
                                <p>{{ item.party }}</p>
                                <p> {{ item.ticket.toLocaleString() }} </p>
                                <progress class="progress_small" max=100 :value=item.ticket />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <a class="backtohome" href="/">返回儀表板</a>
            </div>
        </div>
        <!-- zone end-->
    </div>
</template>

<script>
export default {

    data() {
        return {
            title: "縣市長選舉開票",
            taipei: [],
            citys: null,
            selected: 'A01',
            counter: null,
        }
    },
    methods: {
        replaceText() {
            let p = document.querySelectorAll('p').innerHTML
            switch (p) {
                case "國民":
                    p.replace(p, '中國國民黨');
                    break;
                default:
                    p = 1;
            }
        },
        getData_vote() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            this.axios
                .get('https://melect-api.ftvnews.com.tw/Tickets/ftvelect.json').then((response) => {

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
            this.insertData_vote()
        },
        insertData_vote() {
            //判斷選取哪個縣市的總票數
            switch (this.selected) {
                case 'A01': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 300000;
                        console.log('nodeList', nodeList[i].max)
                    }
                    break;

                }
                case 'A02': {
                    let nodeList = document.querySelectorAll('progress')
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].max = 10014202;
                    }
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
        console.log(document.location.href.split("?"))
        if (document.location.href.split("?").length > 1) {
            this.selected = document.location.href.split("?")[1].split("=")[1]
        }
       // console.log('catch city' + this.selected)
    },
    mounted() {

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

select {
    font-weight: bolder;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    border: 3px solid #ffc464;
    color: #f5922f;
    background: #faf3e6;
}

.backtohome {
    background-color: orange;
    border-radius: 30px;
    width: fit-content;
    padding: .5rem 1rem;
    margin: 1rem;
    color: #fff;
    font-weight: bolder;
    font-size: 1.2rem;
    display: flex;

}

.btn {
    display: flex;
    justify-content: end;
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
    grid-template-columns: 1fr 2fr 1fr;
    margin: 1rem auto;

}

.layout_up {
    margin: auto;

}

.layout_card_height {
    max-height: 10rem;
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


.layout_down {
    display: grid;
}

.test {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    max-width: 810px;
}


.progress_class {
    width: 70%;
    overflow: hidden;
    -moz-appearance: none;
    appearance: none;
    border-radius: .5rem;
    -webkit-appearance: none;
    bottom: 4rem;
    right: -6rem;
    height: 1.5rem;
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




@media screen and (max-width: 900px) {
    .section {
        background: #fff;
        margin: 1rem;
        border-radius: 30px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        max-width: 1000px;
        margin: 1rem;

    }

    .test {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .layout_card {
        margin: 1rem;
        grid-template-columns: 1fr 2fr 1fr;
    }

    .content {
        text-align: left;
        font-size: 30px;
    }

    h4 {
        font-size: 2.5rem
    }

}

@media screen and (max-width: 768px) {

    .content {
        text-align: left;
        font-size: 1.4rem;
    }

    h4 {
        font-size: 1.4rem
    }

    .ticket_up {
        font-size: 1.4rem;
        margin-top: 0rem;
    }

    .party_up {
        font-size: 1.4rem;


    }

    p {
        font-size: 1.4rem;
    }

    .progress_class {
        height: 1.rem;
    }


    .person_img {
        border-radius: 100px;
        width: 100px;
        height: 100px;
        margin: 0rem 1rem;
    }

    .progress_class {
        width: 50%;
        bottom: 3rem;
        right: -4rem;

    }

    .layout_card {
        margin: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .layout_card_height {
        max-height: 7rem;
    }




}

@media screen and (max-width: 500px) {

    .content {
        text-align: left;
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1.3rem
    }

    .ticket_up {
        font-size: 1.3rem;
        margin-top: 0rem;
    }

    .party_up {
        font-size: 1.3rem;


    }

    p {
        font-size: 1.3rem;
    }

    .progress_class {
        height: 1.3rem;
    }


    .person_img {
        border-radius: 100px;
        width: 100px;
        height: 100px;
        margin: 0rem 1rem;
    }

}



.layout {
    margin: 1rem;
}
</style>


