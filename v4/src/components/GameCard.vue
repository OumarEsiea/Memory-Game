<template>
<li class="flex-item"><img :src="`${card}.png`" v-on:click="IdChange()" @ResultSelect="ResultChoix">                      
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
            Choix : Object
        }
    },
    methods : {

    IdChange() {
        this.click++
        this.Choix++
        this.card = this.imageId
        this.$emit('VerifChoix', this.Choix ={"choix" : this.click, "card" : this.imageId})
    },

    ResultChoix(data){
        console.log("Valeur de la carte "+this.card)
        setTimeout(()=>{
            this.card = "11"
        },5000)  
        console.log("Donnée "+data)  
    }
    }
}
</script>