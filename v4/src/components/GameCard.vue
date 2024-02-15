<template>
<img :src="`${card}.png`" class="flex-item" width="50%" v-on:click="Hide()">

</template>

<script>
export default {
name: 'GameCard',
props: {
cardId: { type: String, default: "0"},
imageId: { type: String, default: "10"},
    },
    data (){
        return {
            card : String, default:"0"
        }
    },
    methods : {
        Hide(){
            if( this.card != "11"){
            this.card = "11"
            }
            else{
                this.card = this.imageId
            }
        }
    }
}

</script>

<style>
img {
    display: flex;
    margin: auto;
    width: 100%;
}
</style>