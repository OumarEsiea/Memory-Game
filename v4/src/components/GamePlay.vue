<template>
   <ul class="flex-container"> 
    <GameCard v-for="Image in game" :key="Image" :cardId="Image" :imageId="Image"/>
   </ul>
    <center><button v-on:click="changeMe()">Refresh</button>
            <button @click="HideAll()">Hide</button>
    </center>
</template>

<script>
import GameCard from './GameCard.vue'
export default{
    name:'GamePlay',
    components: {GameCard},
    data() {
        return {
            game: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            message : false,
            Tps_Impartie : Number,
            Image : Number
        }
    },

methods: {
    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

    changeMe() {
    this.game = this.game.map(() => {
        return this.getRandomInt(0,20)                      
        })
    },

    HideAll(Tps_Impartie){
        this.message = true
        setTimeout(() => {
        this.game = this.game.map(() => 11)
        }, Tps_Impartie);
  
    },
     Update(){
    
     }
}
}
</script>

<style>
button{
    align-items: center;
    font-size: 20px;
      background-color: white;
      color: black;
      border-radius: 10px;
      margin: 20px;
      cursor: pointer;
}

</style>