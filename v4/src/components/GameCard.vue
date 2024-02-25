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
choix : String
    },
    data (){
        return {
            card : this.cardId,
            click : 0,
            Choix : Object
        }
    },
    methods : {

    IdChange() {
        if(this.click < 1){
        this.click++
        this.Choix++
        this.card = this.imageId
        this.$emit('VerifChoix', this.Choix ={"choix" : this.click, "card" : this.imageId})
        }
        if (this.choix == 'Mauvais'){
            console.log("Reception du choix : "+this.choix)
            setTimeout(()=>{
                this.card = "11"},
                2000)
        }
    }
    }
}
</script>