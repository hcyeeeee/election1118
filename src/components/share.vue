<template>
    <div>
        <div class="layout_addition desktop" @scroll="scroll">
            <!--  AR-->
            <div class="layout_grid">
                <!-- <div class="icon" :class="{ fixed: active }" id="icon"> -->
                <div class="icon" id="icon">
                    <!-- line -->
                    <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/election2022"
                        target="_blank">
                        <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/election2022/">
                            <img src="../assets/line.png" alt="line" width="60px" /></span>
                    </a>
                    <!-- facebook -->
                    <a target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Felection2022%2F&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore">
                        <img src="../assets/fb.png" alt="facebook" width="60px" /></a>

                    <!-- localUrl -->
                    <a target="_blank" @click="getLocalUrl" class="fb-xfbml-parse-ignore">
                        <img src="../assets/share.png" alt="share" width="60px" /></a>


                </div>
            </div>
        </div>
        <a href="#video"> <img class="live" src="../assets/livebanner.png" alt=""></a>
        <a href="#eighteen"> <img class="eighteen" src="../assets/voteing.png" alt=""></a>


        <div class="layout_addition mobile" @scroll="scroll">
            <!--  AR-->
            <div class="layout_grid">
                <!-- <div class="icon" :class="{ fixed: active }" id="icon"> -->
                <div class="icon" id="icon">
                    <!-- line -->
                    <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/election2022"
                        target="_blank">
                        <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/election2022/">
                            <img src="../assets/line.png" alt="line" width="60px" /></span>
                    </a>
                    <!-- facebook -->
                    <a target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Felection2022%2F&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore">
                        <img src="../assets/fb.png" alt="facebook" width="60px" /></a>

                    <!-- localUrl -->
                    <a target="_blank" @click="getLocalUrl" class="fb-xfbml-parse-ignore">
                        <img src="../assets/share.png" alt="share" width="60px" /></a>

                </div>
            </div>

        </div>


        <div v-if="scrollY > 100">
            <i @click="scrollTop" id="toTop" class="fa-solid fa-2x fa-angle-up"></i>
        </div>
    </div>

</template>

<script>
console.log();
export default {
    data() {
        return {
            scrollY: '',
        }
    },

    methods: {
        handleScroll() {

            this.active = window.scrollY > 800 ? true : false
        },
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('??????????????????!')
        },
        linkToHome() {
            window.open('https://www.ftvnews.com.tw/', '_blank')
        },

        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },

        scroll() {
            this.scrollY = window.scrollY
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('scroll', this.scroll)
    },
}
</script>

<style scoped>
.live {
    width: 80px;
    position: absolute;
    top: 5rem;
    left: 0rem;
}

.eighteen {
    width: 80px;
    position: absolute;
    top: 9rem;
    left: 0rem;
}


.layout_addition {
    position: fixed;
    right: 0;
    top: 0;
    width: 70px;
    top: 5rem;
    z-index: 99;

}



.layout_addition img {
    padding: 0.5rem
}

.layout_addition2 {
    /* position: fixed; */
    left: 0;
    top: 0;
    margin-top: 60px;
    margin-left: 20px;
    width: 80px;
    z-index: 9999;
    top: 5rem;
}

.mobile {
    display: none;
}

@media screen and (max-width: 900px) {

    .live {
        display: none
    }

    .eighteen {
        display: none
    }
}

@media screen and (max-width: 767px) {



    .layout_addition {
        position: absolute;
        right: 5.5rem;
        width: 85px;
        top: .7rem;
        align-items: center;
        z-index: 999;

    }

    .layout_addition img {

        width: 2.7rem;

    }

    .mobile {
        display: flex;
        position: fixed;
    }

    .desktop {
        display: none;
    }

    .icon {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

}

.fixed {
    display: none;
}

.fa-solid {
    position: fixed;
    right: 0.5rem;
    bottom: 5rem;
    color: rgb(172, 188, 162);
    background-color: rgb(226, 246, 214);
    cursor: pointer;
    background-color: #ffffffa6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    border-radius: 10px;
    padding: 2px 5px;
    z-index: 1000;
}
</style>

