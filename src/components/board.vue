<template >
    <div>
        <div class="section">
            <!-- <h3>即時開票儀表板</h3> -->
            <img class="boardtitle" src="../assets/boardtitle.png" alt="title">

            <p class="notice"> <img class="star" src="../assets/star.png">這些候選人票數領先中！點擊查看查各縣市長戰況</p>

            <div class="board">
                <div class="box" v-for="(item, idx) in all" :key="idx" @click="goCand(item)">
                    <div :class="item.partyColor" style="background:white ;border-radius: 0.5rem 0rem 0rem 0.5rem;">
                        <P> {{ item.cityName }}</P>
                    </div>
                    <div :class="item.partyColor" style="border-radius:0rem  0.5rem 0.5rem 0rem ;">
                        <p class="candstyle"> {{ item.candName }}</p>
                        <p class="ticketstyle"> {{ item.ticket }}</p>
                    </div>
                </div>
                <div id="eighteen"></div>
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
            show: true,
            counter: null

        }
    },
    methods: {
        preOrderData(data) {
            let t1 = data.T1.detail
            let all = {}
            this.show = false
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
                            partyColor = 'party-white';
                            break;
                        case "基進":
                            partyColor = 'party-red';
                            break;
                        case "民眾":
                            partyColor = 'party-info';
                            break;
                        case "親民":
                            partyColor = 'party-orange';
                            break;
                        case "時代":
                            partyColor = 'party-yellow';
                            break;
                        default:
                            partyColor = 'party-grey';
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
            setTimeout(() => {
                this.show = true
            }, 300);
            //  console.log('all', this.all)
            // console.log('order',this.citys)
        },
        goCand(city) {
            //  console.log(city)
            location.href = `#/voting?city=${city.cityNo}`
        },
        getData_vote() {
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
    created() {
        this.getData_vote()
    },
    mounted() {
        setTimeout(() => {
            this.getData_vote()

        }, 1000);

        setInterval(() => {
            this.getData_vote()
        }, 10000);


    },


}
</script>

<style scoped>
.star {
    padding: 0.5rem;
}

.candstyle {
    font-size: 1.5rem;
    font-weight: 600;
    padding: .8rem .8rem 0rem;
}

.ticketstyle {
    font-weight: 500;
    padding: 0rem .8rem 0.5rem;
}



#eighteen {
    height: 50px;
}

.boardtitle {
    width: 500px;
    margin: auto;
}

@media screen and (max-width: 900px) {
    .boardtitle {
        width: 400px;
        margin: auto;
    }
}

@media screen and (max-width: 768px) {
    .boardtitle {
        width: 280px;
        margin: auto;
    }
}



/* 國民 */
.party-blue {
    background: #bbdefb;
    color: #1565c0;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 民進 */
.party-green {
    background: #c8e6c9;
    color: #2e7d32;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 時代力量 */
.party-yellow {
    background: #fff9c4;
    color: #f57f17;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 無 */
.party-white {
    background: #eeeeee;
    color: #3e3e3c;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}



/* 小黨 */
.party-grey {
    background: #cfd8dc;
    color: #37474f;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 親民 */
.party-orange {
    background: #ffcc80;
    color: #e65100;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 基進 */
.party-red {
    background: #ffcdd2;
    color: #b71c1c;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
}

/* 民眾 */
.party-info {
    background: #b2ebf2;
    color: #00838f;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
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
    grid-template-columns: 1fr 3fr;
    border-radius: 1rem;
    margin: .4rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;



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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .section {
        margin: 1rem;
    }
}

@media screen and (max-width: 768px) {
    p {
        padding: .3rem;
    }

    .board {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .candstyle {
        font-size: 1.3rem;
        font-weight: 600;
        padding: .8rem .3rem 0rem;
    }

    .star {
        width: 40px;
        padding: 0.5rem;

    }
}


@media screen and (max-width: 500px) {
    .board {
        grid-template-columns: 1fr 1fr 1fr;
    }

    p {
        padding: .3rem;
    }

    .notice {
        font-size: .9rem;
    }

    .notice:before {

        content: '';
        width: .5rem;
    }





}

@media screen and (max-width: 400px) {
    .board {
        grid-template-columns: 1fr 1fr;
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

.big-enter,
.big-leave-to,
.small-enter,
.small-leave-to {
    opacity: .8;

}

.big-enter-active,
.big-leave-active,
.small-enter-active,
.small-leave-active {
    transition: opacity 1.2s;
}
</style>
