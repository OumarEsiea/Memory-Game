<template>
<li><img :src="`${card}.png`" v-on:click="IdChange()">                      
</li>
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
            card : this.cardId,
            click : 0
        }
    },
    methods : {
        IdChange() {
            this.click++
            if(this.click <3){
            if( this.card){
            this.card = "11"
            console.log(true)
            }
            if(this.click == 2)
            {
                this.card = this.imageId
            }
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