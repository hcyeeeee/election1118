<template>
    <div>
        <div class="section" id="board">
            <h3>選情儀表板</h3>
            <p>點擊各縣市看更多候選人開票狀況</p>
            <div class="board">
                <div class="box" v-for="(item, idx) in all" :key="idx" @click="goCand(item)">
                    <div>
                        <P> {{ item.cityName }}</P>
                    </div>
                    <div :class="item.partyColor">
                        <p> {{ item.candName }}</p>
                        <p> {{ item.ticket }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            title: '縣市議員候選人',
            taipei: [],
            all: null,
            counter: null

        }
    },
    methods: {
        preOrderData(data) {
            let t1 = data.T1.detail
            let all = {}
            t1.forEach(function (city) {
                // console.log('source', citys)
                if (city !== null) {
                    city.tickets.sort(function (a, b) {
                        return b.ticket - a.ticket
                    })
                    let partyColor = null;
                    switch (city.tickets[0].party) {
                        case "國民":
                            partyColor = 'party-blue';
                            break;
                        case "民進":
                            partyColor = 'party-green';
                            break;
                        case "無":
                            partyColor = 'party-yellow';
                            break;
                        default:
                            partyColor = 'party-white';
                    }
                    all[city.cityName] = {
                        cityName: city.cityName,
                        candName: city.tickets[0].candName,
                        cityNo: city.cityNo,
                        ticket: city.tickets[0].ticket.toLocaleString(),
                        partyColor: partyColor
                    }

                }
            })
            this.all = all
            //  console.log('all', this.all)
            // console.log('order',this.citys)
        },
        goCand(city) {
            //  console.log(city)
            location.href = `/#/test?city=${city.cityNo}`
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
    },
    mounted() {
        this.getData_vote()

        this.counter = setInterval(() => {
            this.getData_vote()
        }, 10000);


    },


}
</script>



<style scoped>
.party-blue {
    background: #bbddfb;
    border-radius: 0px .8rem .8rem 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color: #3a6cb9;
    font-weight: bolder;

}

.party-green {
    border-radius: 0px .8rem .8rem 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: #c8e6c9;
    color: #2e7d31;
    font-weight: bolder;
}

.party-yellow {
    border-radius: 0px .8rem .8rem 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: #fff8c4;
    color: #f67600;
    font-weight: bolder;
}

.party-white {
    border-radius: 0px .8rem .8rem 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: #ededed;
    color: #3e3e3c;
    font-weight: bolder;
}



.section {
    max-width: 1000px;
    padding: .5rem 1rem;
    background-color: rgb(255, 255, 255);
    margin: 1rem auto;
    border-radius: 20px;

}

.board {
    margin: .1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
}

.box {
    display: grid;
    grid-template-columns: 1fr 2fr;

    border-radius: 1rem;
    margin: .4rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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

.section {
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
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
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
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
