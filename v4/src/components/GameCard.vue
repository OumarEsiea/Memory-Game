<template>
    <li class="flex-item">
      <img :src="card.ImGSrc" v-on:click="IdChange()">                      
    </li>
</template>

<script>
export default {
name: 'GameCard',
props: {
cardId: { type: String, default: "0"},
imageId: { type: String, default: "10"},
choix : {type : String, default: "" }
    },
    data (){
        return {
            card : this.cardId,
            click : 0,
            Choix : Object,
            Pokeball : {
                ImGSrc : "Pokeball.png"
            }
        }
    },
    methods : {

    IdChange() {
        if(this.click == 0){
        this.click++
        this.card = this.imageId
        this.$emit('VerifChoix', this.Choix ={"choix" : this.click, "card" : this.imageId})
        console.log("Envoi du choix"+this.Choix)
        }
        if (this.choix == 'Mauvais'){
            console.log("Reception du choix : "+this.choix)
            setTimeout(()=>{
                this.card = this.Pokeball},
                1000)
        }
    }
    }
}
</script>