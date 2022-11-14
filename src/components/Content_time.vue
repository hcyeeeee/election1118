<template>
    <div id="news">
        <img src="../assets/date.png" />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin-bottom: -1rem;
}

img {

    display: none;
    margin: 1rem auto;
    max-height: 300px;

}

@media screen and (min-width: 600px) {
    img {
        display: block;
        margin: auto;
        max-height: 200px;
        overflow: scroll;
    }


}



@media screen and (min-width: 768px) {


    img {
        display: block;
        margin: auto;
        max-height: 250px;
    }
}

@media screen and (min-width: 900px) {
    img {
        display: block;
        margin: auto;
        max-height: 280px;
    }
}

@media screen and (min-width: 1024px) {
    img {
        display: block;
        margin: auto;
        max-height: 300px;
    }
}
</style>
