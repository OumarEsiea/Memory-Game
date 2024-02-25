<template>
   <nav class="Jeu">
                <p id ="Size">Size : 0</p>
                <p id ="Timer">Timer : 0</p>
                <p>Vie(s) : {{ Vies }}</p>
                <p>Paires trouvées : {{ Paires }}</p>
                <p v-if="horloge <10" class="Alerte"> 0 : {{ horloge }}</p>
                <p v-else> Temps restant : {{ horloge }}</p>
            </nav>
   
            <div class = "toolbar">
                <div v-if="PartieFinished">    
                  <p v-if="Victoire">
                    <span class="fade" style="color: green;font-weight: bold;">Victoire 
                      <br> Paires trouvées</span>
                    <ul>
                    <GameCard v-for="Paires in Paires_trouve" :key="Paires" :cardId="Paires"></GameCard>
                    </ul>    
                  </p>
                <p v-else class="fade"><span style="color: red;font-weight: bold;">Defaite</span></p>
                </div>
                <ul>
                    <li><button v-on:click="startGame()">Play</button></li>
                    <li><button v-on:click="Restart()">Restart</button></li>       
                </ul>
                <ul class="flex-container" v-if="ChargerJeu"> 
    <GameCard v-for="(Image,Indice) in game" :key="Image" :cardId="Image" :imageId="Indice_Previous[Indice]" 
    @VerifChoix="GestionChoix" :choix="Decision"/>
                </ul>
            </div>
    
</template>

<script>
import GameCard from './GameCard.vue'
export default{
    name:'GamePlay',
    props : {
      Taille : Number,
      Memo : Number,
      Temps : Number,
    },
    components: {GameCard},
    data() {
        return {
            Jeu : this.Taille,
            game: [],
            Indice_Previous : [],
            Paires_trouve : [],
            ChargerJeu : false,
            Premier_choix : Number,
            Deuxieme_choix : Number,
            Tps_Memo : this.Memo,
            horloge : this.Temps,
            Carte_Selec : 0,
            nbclick : 0,
            Vies : 3,
            Paires : 0,
            Victoire : false,
            PartieFinished : false,
            Decision : String,
        }
    },

methods: {

  startGame(){
    this.Init()

    this.HideAll()
    
    setInterval (()=>{
      this.Timer()
    },1000)
  },

    Init(){ //Trouver un moyen d'utiliser Array.prot.splice()

      console.log("Taille du jeu : "+this.Jeu)
      for(let i = 0; i<this.Jeu; i++){
        this.game.push(i)
      }

      this.game.forEach((elem)=>{
        this.game.push(elem)
      })

      this.game.sort(()=> Math.random() - 0.5)
 
      this.ChargerJeu = true
      this.game.forEach(x => console.log(x))
    },

      getCardId(){
      this.game.forEach((Elem) =>{
      this.Indice_Previous.push(Elem)
      })
    },

    HideAll(){
        setTimeout(() => {
          this.getCardId()
          this.game = this.game.map(()=> 11)
        },this.Tps_Memo*1000);
      console.log("Temps de mem : "+this.Tps_Memo)
      },

    GestionChoix(data){
      
      this.Carte_Selec++
      this.nbclick++
      console.log("Nb clicks : "+this.$data.nbclick)
      if(this.Carte_Selec == 1){
        this.Premier_choix = data.card
      }
      else {
        this.Deuxieme_choix = data.card
        this.Carte_Selec = 0
      }
    
      if(this.Premier_choix !== this.Deuxieme_choix && this.nbclick>1){
        this.Vies--
        this.Decision = "Mauvais"
        this.nbclick = 0  
      }

      if(this.Premier_choix == this.Deuxieme_choix){
        this.nbclick
        this.Paires++
        this.Paires_trouve.push(this.Premier_choix,this.Deuxieme_choix)
      }

      if(this.Paires == 2){//this.Jeu - 1){
        this.Victoire = true
        this.PartieFinished = true
      }

      if(this.Vies == 0){
        this.Victoire = false
        this.PartieFinished = true
        this.HideAll()
      }
    },

    Timer(){
      this.horloge -- 
      if (this.horloge == -1){
        window.alert('Temps imparti écoulé')
        location.reload()
      }
    },

    Restart(){
      location.reload()
    }
}
}
</script>

<style>
button{
    font-size: 20px;
      background-color: white;
      color: black;
      border-radius: 10px;
      margin: 20px;
      cursor: pointer;
}
</style>