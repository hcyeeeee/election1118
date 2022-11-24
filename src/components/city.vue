<template>
    <div class="aaa" id="profile">
        <div class="section" v-if="citys !== null">
            <div class="s">
                <select v-model="selected">
                    <option :value="city.cityNo" v-for="city, idx in citys" :key="idx">{{
                            city.cityName
                    }}
                    </option>
                </select>
                <h5>長選舉開票</h5>
            </div>
            <!-- 區域 -->
            <div id="listBox" ref="Box">

                <!-- big -->
                <transition-group name="big" tag="div" class="layout_up">
                    <!--<div class="layout_up" v-show="show">  使用vue的transition-group來取代-->
                    <div class="layout_card_height" v-for="(item, index) in citys[selected].tickets"
                        :key="item.candName" v-bind:style="{ opacity: item.show }">
                        <!-- 單一候選人的顯示隱藏使用候選人資料中的show屬性，綁定style中的opacity 透明度屬性-->
                        <div class="layout_card" v-if="index < 3">
                            <div>

                                <img class="person_img" :src="require('@/assets/' + item.candName + '.jpg')"
                                    alt="personal" />
                            </div>

                            <div class="content">
                                <h4>{{ item.candNo }}{{ item.candName }}</h4>
                                <p class="party_up">{{ item.party }}</p>
                            </div>

                            <div class="ticket">
                                <p class="ticket_up">{{ item.ticket.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') }}票
                                </p>
                            </div>
                        </div>
                        <progress v-if="index < 3" class="progressclass" :max="progress[selected].forecast"
                            :value="item.ticket" />
                    </div>
                    <!-- </div> 使用vue的transition-group來取代-->
                </transition-group>

                <!-- small -->
                <transition-group name="small" tag="div" class="test">
                    <!--<div class="test" v-show="show"> 使用vue的transition-group來取代-->
                    <div ㄘ v-for="(item, index) in citys[selected].tickets" :key="item.candName"
                        v-bind:style="{ opacity: item.show }">
                        <!-- 單一候選人的顯示隱藏使用候選人資料中的show屬性，綁定style中的opacity 透明度屬性 ，增加一個class small-wrap 用來控制淡入淡出動畫用的-->
                        <div class="layout_down" v-if="index >= 3">
                            <div class="layout">
                                <img class="person_img" :src="require('@/assets/' + item.candName + '.jpg')"
                                    alt="新聞封面照" />

                                <p>{{ item.candNo }}{{ item.candName }}</p>
                                <p class="party_down">{{ item.party }}</p>
                                <p>{{ item.ticket.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') }}票</p>
                                <progress class="progress_small" :max="progress[selected].forecast"
                                    :value="item.ticket" />
                            </div>
                        </div>
                    </div>
                    <!-- </div>  使用vue的transition-group來取代-->
                </transition-group>
            </div>
            <div class="btn">
                <a class="backtohome" href="https://www.ftvnews.com.tw/topics/test/">返回儀表板</a>
            </div>
        </div>
        <!-- zone end-->
    </div>
</template>

<script >

export default {
    data: function () {
        //各縣市預計投票人數
        const progress = {
            A01: { citizen: 2026769, forecast: 1317399 },
            A02: { citizen: 3316517, forecast: 2155736 },
            A03: { citizen: 1825127, forecast: 1186332 },
            A04: { citizen: 2274107, forecast: 1478169 },
            A05: { citizen: 1548203, forecast: 1006331 },
            A06: { citizen: 2282623, forecast: 1483704 },
            B01: { citizen: 452720, forecast: 294268 },
            B02: { citizen: 443908, forecast: 288540 },
            B03: { citizen: 1028606, forecast: 668593 },
            B04: { citizen: 406195, forecast: 264026 },
            B05: { citizen: 559273, forecast: 363527 },
            B06: { citizen: 422568, forecast: 274669 },
            B07: { citizen: 679330, forecast: 441564 },
            B08: { citizen: 374779, forecast: 243606 },
            B09: { citizen: 266058, forecast: 172937 },
            B10: { citizen: 177853, forecast: 115604 },
            B11: { citizen: 90360, forecast: 58734 },
            B12: { citizen: 122294, forecast: 79491 },
            B13: { citizen: 11810, forecast: 7676 },
            B14: { citizen: 307913, forecast: 200143 },
            B15: { citizen: 350758, forecast: 227992 },
        };
        return {
            title: "縣市長選舉開票",
            taipei: [],
            citys: null,
            selected: "A01",
            counter: null,
            show: true, //全體顯示/隐藏控制
            first: true,
            progress,
            nn: [],
        };
    },
    methods: {
        getData_vote() {
            document.querySelectorAll(".news").forEach((e) => e.remove());
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://www.ftvnews.com.tw/topics/test/election.json")
                // .get("./election.json")
                .then((response) => {
                    this.preOrderData(response.data);
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },

        replaceParty() {
            let nn = document.querySelectorAll(".party_up,.party_down");
            console.log('nn', nn.length);
            for (let i = 0; i < nn.length; i++) {
                nn[i].innerHTML = nn[i].innerHTML
                    .replace(/國民/g, "中國國民黨")
                    .replace(/中國中國國民黨黨/g, "中國國民黨")
                    .replace(/民進/g, "民主進步黨")
                    .replace(/時代/g, "時代力量")
                    .replace(/民眾/g, "台灣民眾黨")
                    .replace(/無/g, "無黨籍")
                    .replace(/無黨籍黨籍/g, "無黨籍")
                    .replace(/維新/g, "台灣維新黨")
                    .replace(/動保/g, "台灣動物保護黨")
                    .replace(/台澎/g, "台澎國際法法理建國黨")
                    .replace(/共和/g, "共和黨")
                    .replace(/天一/g, "天一黨")

            }
        },

        /**
         * ajax抓取資料後都丟到這來處理，包括排序、改資料結構、過濾資料、事件觸發等等
         */
        preOrderData(data) {
            let t1 = data.T1.detail;  //取得縣市長候選人的資料
            let citys = {}; //宣告一個空的物件,用來存放處理過的候選人資料

            /**
             * 利用迴圈來整理縣市候選人的資料
             */
            t1.forEach(function (city) {
                if (city !== null) {
                    //將縣市候選人陣列進行排序，依票數來排序
                    city.tickets.sort(function (a, b) {
                        return b.ticket - a.ticket;
                    });
                    //在每位候選人資料中加上show這個屬性，用來控制候選人資料的透明度
                    city.tickets.map((cand) => {
                        cand["show"] = 0; //預設為全不顯示
                        cand['lastTicket'] = cand.ticket  //建立lastTicket變數預設為當前票數
                        return cand;
                    });
                    citys[city.cityNo] = city;
                }

            });

            //將上一次更新的票數記入候選人的票數,才能比對票數變化
            if (this.citys !== null) {

                //把現在頁面中使用的citys物件中的key抓出來成為一個陣列進行迴圈
                Object.keys(this.citys).forEach((code) => {

                    //把新抓進來的資料citys依照迴圈輪到的code進行每個候選人資料重新整理
                    citys[code].tickets.map((cand) => {
                        //利用find函式在this.citys中找到對應的候選人資料
                        let user = this.citys[code].tickets.find((u) => {
                            return u.candNo == cand.candNo
                        })
                        //把舊的票數指定到新的資料中
                        return cand['lastTicket'] = user.ticket
                        /* console.log(cand.candNo,user.candNo) */
                    })
                })
            }

            //判斷畫面是不是第一次更新，如果是第一次更新，直接指定新的citys資料給this.citys
            //如果不是第一次更新，就先把目前的city資料中的show改為1,再指定給this.citys
            //目的是為了不讓畫面一直在淡入淡出
            if (this.first) {
                this.citys = citys; //重新把資料指定回citys後，DOM會同步更新資料
                this.slideShow(this.selected);  //this.citys更新後開始進行淡入的動作
                this.first = false  //把第一次執行的變數設為false,表示所有的候選人都顯示完成了
            } else {

                //如果候選人都已經顯示在畫面上了,那麼當資料更新時就不再重新淡入淡出了.
                //所以這時我們要把目前顯示的候選人資料中的show改為1，
                citys[this.selected].tickets.map(cand => cand.show = 1)

                //最後把更新進來的citys資料指定給vue中的this.citys
                this.citys = citys
            }

            //使用$nextTick函式 在vue的下一次更新時再去執行進度條的最大值指定，確保這個動作是在候選人的資料出現在畫面上時才去顯示進度條
            // this.$nextTick(this.insertData_vote())

            //this.citys的資料更新後會立刻在畫面中更新資料，在資料都出現在畫面上時才去進行票數的動畫，
            //$nextTick的時間大約是16亳秒
            this.$nextTick(this.ticketsAnimation())
        },

        /*
         * 使用選單改變縣市時,先把目前的候選人DOM都display:none
         * 直接操作DOM會比改變vue中的show值來得快
         */
        changeCity() {
            document.querySelectorAll(".layout_card_height,.layout_down").forEach((dom) => {
                dom.style.display = 'none'
            })
        },

        /**
         *會將傳入的候選人陣列每0.3秒，就更新show的狀態為true，照陣列順序更新 
         *更新到陣列的最大索引值時就清除計時器變數
         */
        slideShow(cityCode) {
            let total = this.citys[cityCode].tickets.length - 1; //取得要處理的縣市候選人index最大值
            let now = 0; //從0開始
            let slider = setInterval(() => {  //宣告一個每300毫秒執行一次的計時器
                this.citys[cityCode].tickets[now].show = 1;  //依序把候選人的DOM透明度設為1
                if (now < total) {
                    now++; //增加索引值來執行下一個候選人
                } else {
                    clearInterval(slider); //如果索引值到最大值了，就清掉計時器，停止淡入的動作
                }
            }, 300);
        },

        /**
         * 票數跳動動畫
         * 
         */
        ticketsAnimation() {
            //針對目前顯示的縣市候選人以迴圈的方式逐檢查票數的狀況,再決定是否要進行數字跳動
            this.citys[this.selected].tickets.forEach((cand) => {
                if (cand.ticket > cand.lastTicket) {  //更新的票數超過先前的票數時才需要做動畫顯示

                    //交換當前票數和前次更新的票數，動畫要從前次的票數加到當前票數，所以先交換兩個值
                    let tmp = cand.ticket
                    cand.ticket = cand.lastTicket
                    cand.lastTicket = tmp

                    //以跳動最多300次每次間隔8毫秒,總計2.4秒到3秒之間
                    //將票數差距除以300用來計算每次要加多少票數
                    let ticketGap = Math.floor((cand.lastTicket - cand.ticket) / 300)  //計算每五毫秒要加多少票
                    ticketGap = ticketGap < 1 ? 1 : ticketGap;  //如果差距票數少於300票,則以1票來計算

                    let numberJump = setInterval(() => {  //宣告一個計時器，每8毫秒跑一次

                        //因為用整數的方式做加票的動畫，所以很有可能票數會加超過
                        //如果票數超過或相等,則把票數做調整並清除計時器
                        if (cand.ticket >= cand.lastTicket) {
                            cand.ticket = cand.lastTicket; //票數調整為最新更新的票數
                            clearInterval(numberJump); //清除計時器
                        } else {

                            //每8毫秒加一次票數
                            cand.ticket += ticketGap;
                        }
                    }, 8)
                } else {

                    //如果是新票數小於等於舊票數的特殊情形..則把舊票數的值更新成新票數的值
                    cand.ticket == cand.lastTicket
                }
            })
        },

        /**
         * 縣市投票人預估值
         * 先把縣市投票人數以物件的方式整理成json格式資料 
         * 在data{}中宣告 progress 並指定內容
         */
        insertData_vote() {
            //判斷選取哪個縣市的總票數
            let nodeList = document.querySelectorAll("progress");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].max = this.progress[this.selected];
            }
        },


    },
    watch: {
        //監控選單變數selected,改變表示縣市要做切換
        selected: function (newSelected, oldSelected) {
            setTimeout(() => {
                this.replaceParty()
            }, 300);
            //改變地區時,也同時改變網址
            history.pushState("", "", "#/voting?city=" + newSelected);

            //地區變更時先檢查citys有無值，因為第一次抓資料是在畫面產生的大約1秒後,
            //此時this.citys是null的狀況,會造成錯誤，所以要先判斷this.citys是否有值再做後面的動作
            if (this.citys !== null) {
                this.changeCity();
                //在切換縣市時要先將目前縣市候選人show設為0，這樣稍後如果再跳回這個縣市時，才會重新觸發淡入的動畫。
                this.citys[oldSelected].tickets.map(cand => cand.show = 0)

                //先清除原本的定時抓取資料計時器，以免兩個動作重疊
                clearInterval(this.counter)

                //先讓上面的動作有點時間完成,所以使用this.$nextTick(),讓vue稍等16毫秒再進行下一個動作
                this.$nextTick(() => {
                    this.slideShow(newSelected)  //執行新選的縣市候選人淡入動畫

                    //淡入進行時再重新開始計時
                    this.counter = setInterval(() => {
                        this.getData_vote();
                    }, 20000);
                })

            }
        },
    },
    created() {
        this.getData_vote();
        //console.log(document.location.href.split("?"))
        //在頁面產生之前先解析網址的內容，並取得目前要顯示的縣市代碼
        if (document.location.href.split("?").length > 1) {
            this.selected = document.location.href.split("?")[1].split("=")[1];
        }
        setTimeout(() => {
            this.replaceParty()
        }, 1000);

    },
    mounted() {
        //./assets/logo.svg

        //網頁載入時先從server抓第一次資料

        //在頁面載後開始每隔10秒或更長的時間..再抓一次資料
        this.counter = setInterval(() => {
            this.getData_vote();

        }, 20000);
    }
};
</script>


<style scoped>
@media screen and (max-width: 900px) {}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 500px) {}

h5 {
    font-size: 1.2rem;
    font-weight: bolder;
    margin: 1rem 0rem
}

.s {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

select {
    font-weight: bolder;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    border: 3px solid transparent;
    color: orange;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.party_img {
    display: none;
}

.layout_card {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    margin: 1rem auto;

}

.layout_up {
    margin: auto;

}

.layout_card_height {
    max-height: 10rem;
    position: relative;
    transition: all 0.5s;
}

.content {
    text-align: left;
    font-size: 60px;
}

h4 {
    font-size: 3rem;
    font-weight: bolder;
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
    text-align: right;
    padding: 0 3rem;
}


.layout_down {
    display: grid;
}

.small-wrap {
    transition: all 0.5s;
}

.test {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    max-width: 810px;
}


.progressclass {
    width: 70%;
    overflow: hidden;
    -moz-appearance: none;
    appearance: none;
    border-radius: .5rem;
    -webkit-appearance: none;
    bottom: 2.5rem;
    right: -6rem;
    height: 2rem;
}

progress {
    position: relative;

}

.progressclass::-webkit-progress-value {
    background: linear-gradient(90deg, rgb(248, 219, 176) 0%, rgb(248, 177, 34) 100%);
    border-radius: 8px;
}


.progressclass::-webkit-progress-bar {
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


    .content {
        text-align: left;
        font-size: 30px;
    }

    h4 {
        font-size: 2.5rem
    }

    .progressclass {
        width: 70%;
        bottom: 3rem;
        right: -4.5rem;
        height: 1.5rem
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

    .person_img {
        border-radius: 100px;
        width: 100px;
        height: 100px;
        margin: 0rem;
    }

    .progressclass {
        width: 70%;
        bottom: 3rem;
        right: -4rem;
        height: 1.5rem
    }

    .layout_card_height {
        max-height: 7rem;
    }




}

@media screen and (max-width: 500px) {

    .content {
        text-align: left;
        font-size: 1.2rem;
    }

    h4 {
        font-size: 1.4rem
    }

    .ticket_up {
        font-size: 1.2rem;
        margin-top: 0rem;
        padding: 0rem;
    }

    .party_up {
        font-size: 1rem;
    }

    p {
        font-size: 1.2rem;
    }

    .progressclass {
        height: 1.2rem;
        width: 60%;
        bottom: 2rem;
        right: -3.5rem;

    }

    .layout_card {
        margin: 1rem;
        grid-template-columns: 1fr 2fr 2fr;
    }

    .person_img {
        border-radius: 100px;
        width: 80px;
        height: 80px;
        margin: 0rem 1rem;
    }

}



.layout {
    margin: 1rem;
}



/**
 * vue 轉場效果CSS 
 */
.big-enter,
.big-leave-to,
.small-enter,
.small-leave-to {
    opacity: 0;
}

.big-enter-active,
.big-leave-active,
.small-enter-active,
.small-leave-active {
    transition: opacity 0.3s;
}

/**
 * Vue的轉場元件使用的移動畫動晝設定
 * 當資料中的排序位置有變化時,會自動位移DOM
 */
.big-move,
.small-move {
    transition: all 1s;
}
</style>


