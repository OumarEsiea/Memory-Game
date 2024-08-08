<template>
  <Transition name="list">
    <li v-if="card != null" class="flex-item">
      <img :src="card.ImGSrc" v-on:click="IdChange()">                      
    </li>
  </Transition>  
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
        }
        if (this.choix == 'Mauvais'){
            console.log("Reception du choix : "+this.choix)
            setTimeout(()=>{
                this.card = this.Pokeball},
                2000)
        }
    }
    }
}
</script>

<style>

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

</style>