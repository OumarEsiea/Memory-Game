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
                      <br> Pokemons trouvées</span>
                    <ul>
                    <div v-for="Paires in Paires_trouve" :key="Paires">
                    <img :src="Paires.ImGSrc">
                    </div>
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
            Premier_choix : 0,
            Deuxieme_choix : 0,
            Tps_Memo : this.Memo,
            horloge : this.Temps,
            Carte_Selec : 0,
            Vies : 3,
            Paires : 0,
            Victoire : false,
            PartieFinished : false,
            Decision : '',
            selectedPokemon : []
        }
    },

methods: {

  startGame(){
    this.Init()
    
    this.Shuffle()
    
    this.ChargerJeu = true
    
    this.HideAll()
    
    setInterval (()=>{
      this.Timer()
    },1000)
  
  },

    Init(){

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${Math.floor((Math.random() * 10) + 1)}&limit=${this.Jeu}`)
                .then(res => res.json())
                .then(finalRes => {       
                    const pokemons = finalRes.results.map(pokemon => fetch(pokemon.url).then(res=> res.json()))
                    Promise.all(pokemons)
                })
                .then(finalRes2 => {
                    const Pokemon = {}
                    Pokemon.Nom = finalRes2.name
                    Pokemon.ImGSrc = finalRes2.sprites.front_default
                    Pokemon.ImgArtwork = finalRes2.sprites.other["official-artwork"].front_default
                    Pokemon.id = finalRes2.id 
                    this.game.push(Pokemon)
                    this.game.push(Pokemon)           
    })
},

  Shuffle(){
    console.log("Entree dans le shuffle")
       for(let i=0;i<(this.Jeu);i++){
              let rdn_choice
              do {
                rdn_choice = this.getRandomInt(0,10);
            } while(this.selectedPokemon.includes(rdn_choice));
              this.selectedPokemon[i] = rdn_choice
          }

          console.log(this.selectedPokemon)
          for(let i=0;i<this.Jeu; i++) {
            this.selectedPokemon[i+this.Jeu]=this.selectedPokemon[i];
        }

  },

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

      getCardId(){
      this.game.forEach((Elem) =>{
      this.Indice_Previous.push(Elem)
      })
    },

    HideAll(){
        setTimeout(() => {
          this.getCardId()
          const Pokeball = {
            ImGSrc : "Pokeball.png"
          }
          this.game = this.game.map(()=> Pokeball)
        },this.Tps_Memo*1000);
      },

    GestionChoix(data){
      this.Carte_Selec++
      
      console.log("Nb clicks : "+this.$data.nbclick)
      if(this.Carte_Selec == 1){
        this.Premier_choix = data.card
      }
      else if(this.Carte_Selec == 2){
        this.Deuxieme_choix = data.card
        
      }

    while(this.Carte_Selec == 2){
      
      if(this.Premier_choix == this.Deuxieme_choix){
        this.Paires++
        this.Paires_trouve.push(this.Premier_choix)
        //this.PokemonCry(data.card.id)
      }
      else if(this.Premier_choix !== this.Deuxieme_choix){
        this.Vies--
        this.Decision = "Mauvais"
        console.log("Decision prise "+this.Decision) 
      }
      this.Carte_Selec = 0
    }

      if(this.Paires == 3){//this.Jeu - 1){
        this.Victoire = true
        this.PartieFinished = true
      }

      if(this.Vies == 0){
        this.Victoire = false
        this.PartieFinished = true
        window.alert('Vous avez épuisé toutes vos tentatives.')
        location.reload()
      }

    },

    PokemonCry(id){           
                 var audio = new Audio(`v4/src/Audio/Cri_00${id}_DP.ogg`)     
                audio.play()
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