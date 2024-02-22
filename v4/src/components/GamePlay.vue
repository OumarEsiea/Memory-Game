<template>
   <nav class="Jeu">
                <p id ="Size">Size : 0</p>
                <p id ="Timer">Timer : 0</p>
                <p>Vie(s) : {{ Vies }}</p>
                <p>Paires trouvées : {{ Paires }}</p>
            </nav>
   <div class = "toolbar">
                <div v-if="PartieFinished">
                <p v-if="Victoire" class="fade"><span style="color: green;font-weight: bold;">Victoire</span></p>
                <p v-else class="fade"><span style="color: red;font-weight: bold;">Defaite</span></p>
                </div>
                <ul>
                  <center>
                <li><button v-on:click="startGame()">Play</button></li>
                  </center>     
                </ul>
            </div>
            <div id="Message"></div>
   <ul class="flex-container"> 
    <GameCard v-for="(Image,Indice) in game" :key="Image" :cardId="Image" :imageId="Indice_Previous[Indice]" 
    @VerifChoix="GestionChoix"/>
   </ul>
    <center>
            <button v-on:click="changeMe()">Refresh</button>
            <button @click="HideAll()">Hide</button>
            <button @click="Shuffle()">Shuffle</button>
    </center>
</template>

<script>
import GameCard from './GameCard.vue'
export default{
    name:'GamePlay',
    props : {
      Taille : String,
      Memo : Number,
      Temps : Number,
    },
    components: {GameCard},
    data() {
        return {
            game: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            Indice_Previous : [],
            Premier_choix : Number,
            Deuxieme_choix : Number,
            Tps_Memo : Number(this.Memo),
            Carte_Selec : 0,
            nbclick : 0,
            Vies : 3,
            Paires : 0,
            Victoire : false,
            PartieFinished : false,
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
    },

    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

    changeMe() {
    this.Indice_Previous.length = 0
    this.game = this.game.map(() => {
        return this.getRandomInt(0,10)
      })
      this.getCardId()
    },

      getCardId(){
      this.game.forEach((Elem) =>{
      this.Indice_Previous.push(Elem)
      })
    },

    HideAll(){
      this.getCardId()
        setTimeout(() => {
          this.game = this.game.map(()=> 11)
        }, this.Tps_Memo*1000);
      console.log("Temps de mem : "+this.Tps_Memo)
      },

    GestionChoix(data){
      
      this.Carte_Selec++
      this.nbclick++
      
      if(this.Carte_Selec == 1){
        this.Premier_choix = data.card
        console.log("Premier choix : "+this.Premier_choix)
      }
      else {
        this.Deuxieme_choix = data.card
        console.log("Deuxieme choix : "+this.Deuxieme_choix)
        console.log(this.Carte_Selec)
        this.Carte_Selec = 0
      }
    
      if(this.Premier_choix !== this.Deuxieme_choix && this.nbclick>1 ){
        this.Vies--
        this.nbclick = 0  
        this.$emit('ResultSelect', "11")
      }

      if(this.Premier_choix == this.Deuxieme_choix){
        this.nbclick
        this.Paires++
        //this.Victoire = true
      }

      if(this.Vies == 0){
        this.Victoire = false
        this.PartieFinished = true
      }
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