<template>
    <div class="section" id="video">
        <!-- live直播 -->

        <h3> <img src="../assets/livebanner.png" alt="livebanner">直播專區</h3>
        <div class="section-box">
            <div class="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ylYJSBUgaMA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <h3>台灣最前線</h3>
            <br>
            <div class="iframe-container">

                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br>
            <h3>辣新聞152</h3>
            <br>

            <div class="iframe-container">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO2IzwPDbwG0K8TXleBbl4oN"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br>
            <h3>台灣向前行</h3>
            <br>
            <div class="iframe-container">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </div>

        <a class="backbtn" href="https://www.ftvnews.com.tw/" target="_blank">更多新聞</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Live直播',
            title2: '直播新聞',
        }
    },
}
</script>

<style scoped>
h3 {
    margin: 2rem 0 0rem;
    font-size: 2rem;
    font-style: italic;
    font-weight: bolder;
}

img {
    width: 82px;
    margin-top: -0.5rem;
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
    top: -3rem;
    position: relative;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}


.section {
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 1000px;
    margin: 1rem auto;

}

.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
}

.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

/* 4x3 縱橫比 */
.iframe-container-4x3 {
    padding-top: 75%;
}


.section-box {
    margin: 1rem auto;
    padding: 1rem;
    margin-bottom: 5rem;
    max-height: fit-content;
    margin-top: -1rem;
}

@media screen and (max-width: 768px) {
    .section {
        margin: 2rem 1rem !important;
    }
}
</style>
