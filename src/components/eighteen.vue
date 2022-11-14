<template>
    <div>
        <div class="section">
            <div class="yesorno">
                <h2>18修憲開票公投</h2>
                <div class="vote">
                    <p>100,000</p>
                    <p>110,000</p>
                </div>

                <div class="progress" v-for="(item, index) in data" :key="index">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
                <p>讀取中...</p>
            </div>

            <div class="aaa">
                <p>同意</p>
                <progress class="progress_class" max="100" value="80" />
                <p>不同意</p>
            </div>
            <p>註：達標門檻為954萬00000票</p>
        </div>
        <a class="backbtn">修憲公投Ｑ＆Ａ</a>
        <a class="backbtn">互動遊戲</a>

    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '最新新聞',
            newsInfo: [],
            active: false, // 控制nav高度到達條件就轉成true，並加入class="fixed"
        }
    },

    methods: {
        getData_ftvNews() {
           axios.get()
        },
    },

}
</script>

<style scoped>
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
    margin: 1rem;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;
    margin: 1rem auto;

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


