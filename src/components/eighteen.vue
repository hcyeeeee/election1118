<template>
    <div>
        <div class="section">
            <div class="yesorno">
                <h2>18修憲開票公投</h2>
                <div class="vote">
                    <p> 同意{{ data[0].ticket }}</p>
                    <p>不同意{{ data[1].ticket }}</p>
                </div>
            </div>
            <div class="aaa">.
                <progress class="progress_class" :max=data[1].ticket * 2 :value=data[0].ticket />
            </div>
            <p>註：達標門檻為954萬00000票</p>
            <div class="allbtn">
                <a class="backbtn">修憲公投Ｑ＆Ａ</a>
                <a class="backbtn">互動遊戲</a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            ticket: [],
        }
    },
    methods: {
        getVote() {
            // eslint-disable-next-line no-undef
            this.axios.get('https://melect-api.ftvnews.com.tw/Tickets/ftvelect.json').then((response) => {
                console.log('res', response);
                // 公投
                // this.data = response.data.T3.typeName
                // detail 
                // this.data = response.data.T3.detail
                this.data = response.data.T3.detail[0].tickets
                console.log('data', this.data);



            })
        }

    },
    mounted() {
        this.getVote()
    },
}
</script>

<style scoped>
.vote {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
</style>


