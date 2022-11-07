<template>
    <div id="news">

    </div>
</template>

<script>

export default {

    data() {
        return {
            title: '重要日程',
            list: [
                {
                    date: '08.29 ~ 09.02登記參選',
                    project: '登記參選',
                },
                {
                    date: '10.21號次抽籤',
                    project: '號次抽籤',
                },
                {
                    date: '11.11 ~ 11.25',
                    project: '政見發表會',
                },
                {
                    date: '11.25',
                    project: '公告選舉人數',
                },
                {
                    date: '11.26',
                    project: '投票日',
                },

            ],
        }
    },
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=3qpage&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('複製成功!')
        },
    },
}
</script>

<style scoped>
@media screen and (min-width: 600px) {
    .section-box {
        display: none;
    }

    .img {
        display: none;
    }
}


.section-box {

    padding: 1rem;
    text-align: center;
    background-color: rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    background-image:
        linear-gradient(rgba(203, 232, 245, 0.3) 1px, transparent 0),
        linear-gradient(90deg, rgba(203, 232, 245, 0.3) 1px, transparent 0),
        linear-gradient(rgba(203, 232, 245, 0.3)1px, transparent 0),
        linear-gradient(90deg, rgba(203, 232, 245, 0.3) 1px, transparent 0);
    background-size:

        20px 20px;



    height: 80px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: auto 2rem;
    margin-top: 5rem;
}


img {

    margin: auto;
    text-align: center;
    width: 130px;
    display: flex;
    margin-bottom: -6rem;
    margin-top: 3rem;

}




.entries {
    padding: 1rem;
    margin: auto;
    font-size: 1.2rem;
    font-weight: 600;

}

li {
    font-size: 1.2rem;
}

.entries .entry {

    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    text-align: center;

}


marquee {
    width: auto;
    padding: 1rem;
    background: #e2f0d0;
    font-weight: 700;
}
</style>
