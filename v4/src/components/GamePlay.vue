<template>
   <div class = "toolbar">
                <p id = "Alerte"></p>
                <ul>
                <li><button  v-on:click="startGame()">Play</button></li>  
                <li><button id="Restart" onclick="reloadGame()">Restart</button></li>   
                </ul>
            </div>
            <div id="Message"></div>
   <ul class="flex-container"> 
    <GameCard v-for="(Image,Indice) in game" :key="Image" :cardId="Image" :imageId="Indice_Previous[Indice]"/>
   </ul>
    <center><button v-on:click="changeMe()">Refresh</button>
            <button @click="HideAll()">Hide</button>
            <button @click="Shuffle()">Shuffle</button>
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
            Tps_Impartie : Number,
            Indice_Previous : []
        }
    },

methods: {

  startGame(){
    this.Shuffle()
  },

    Shuffle()
    {
      if(this.Indice_Previous.length != 0){
        this.Indice_Previous.length = 0
      }

      this.getCardId()
      this.game.forEach((x)=>console.log(x))
      this.Indice_Previous.forEach((x)=>console.log(x))
    },

    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

    changeMe() {

    this.Indice_Previous.length = 0
    this.game = this.game.map(() => {
        return this.getRandomInt(1,10)
      })

      this.getCardId()
      this.game.forEach((x)=>console.log("game : "+x))
      this.Indice_Previous.forEach((x)=>console.log("Previous : "+x))
        },

      getCardId(){
      this.game.forEach((Elem) =>{
      this.Indice_Previous.push(Elem)
      })
    },

    HideAll(){
        setTimeout(() => {
          this.game = this.game.map(()=> 11)
        }, 5000);
        this.game.forEach((x)=>console.log("game : "+x))
      this.Indice_Previous.forEach((x)=>console.log("Previous : "+x)) 
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