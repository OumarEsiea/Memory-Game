<template>
<li class="flex-item"><img :src="`${card}.png`" v-on:click="IdChange()">                      
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
            click : 0,
        }
    },
    methods : {

        IdChange() {
           this.click++
            if(this.click <3){

            if(this.click == 1)
            {
                this.card = this.imageId
                console.log(this.imageId)
            }

        }
        
    }
    }
}
</script>