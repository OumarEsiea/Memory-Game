class MemoryGame {
    constructor(size) {
        this.size = size;
        this.images = [];
        this.time=document.getElementById(`timer2`).value;
        this.selectedImages = [];
        this.Premierchoix = null;
        this.Secondchoix = null;
        this.nombreclicks =0;
        this.position1=0;
        this.position2=0;
        this.Life=3;
        this.Paire=0;
    }
  
    Init() {
        this.images = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png"];
        // remplisser le tableau avec les id de vos images 
    }
  
    Shuffle() {
        this.selectedImages = [];
        const list = document.getElementById("list");
        let htmltags = "";
        for(let i = 0; i<((this.size)*2); i++) {
            htmltags = htmltags + '<li class="flex-item"><a href="#"><img id="item' + i + '" width="50%" onclick=memoryGameTest.showCard('+i+') src="20.png"></a></li>';
        }
        list.innerHTML = htmltags;
  
        for(let i = 0; i<this.size; i++) {
            let rdn_choice;
            do {
                rdn_choice = getRandomInt(0,10);
            } while(this.selectedImages.includes(rdn_choice));
            this.selectedImages[i] = rdn_choice;/// recuperer le choix random
        }
        for(let i=0;i<this.size; i++) {
            this.selectedImages[i+this.size]=this.selectedImages[i];
        }
        this.selectedImages.sort(() => Math.random() - 0.5);
        for(let i=0;i<((this.size)*2);i++) {
            document.getElementById(`item${i}`).src = this.images[this.selectedImages[i]];
        }
        console.log("Deck Shuffled!")
    }
  
    Play() {
        this.Init();
        this.Shuffle();
        var cadre = document.getElementById(`Size`)
        cadre.innerHTML = `Size : ${this.size}`
        document.getElementById(`life`).innerHTML = `Vie(s) : ${this.Life}`
        let tmp2 = document.getElementById(`timer`).value;
        try {
            tmp2 = Number(tmp2)
            this.time = Number(this.time)
            if(isNaN(this.time) && isNaN(tmp2)) throw "not a number"
            if(tmp2 >= this.time) throw "Vous ne pouvez pas avoir un temps de mémorisation supérieur au temps de jeu !"
            if(tmp2 == 0 || this.time ==0) throw "Vous ne pouvez pas avoir une saisie égale à 0 !"
          }
          catch(err) {
            window.alert("Veuillez refaire votre saisie \n"+ err)
            location.reload()
          }
    }
  
    Hidden() {
        for(let i = 0; i<this.size*2; i++) {
            document.getElementById(`item${i}`).src = "11.png";
        }
    }
     reload() {
      const list = document.getElementById("list");
      let htmltags = "";
      for(let i = 0; i<this.size*2; i++) {
          htmltags = htmltags + '<li class="flex-item"><a href="#"><img id="item' + i + '" width="50%" src="21.png"></a></li>';
      }
      list.innerHTML = htmltags;
    }

    timer(){
        
        var minuteur = document.getElementById(`Timer`)
        minuteur.innerText = `Timer : ${this.time}` 
        this.time --;

        if (this.time <= 9){
            minuteur = document.getElementById(`Alerte`)
            minuteur.innerText = `Le temps imparti se termine bientôt \n 0 : ${this.time}` 
            minuteur.classList.add("Alerte")
        }
        if (this.time == -1){
        window.alert(`Le temps de jeu est écoulé`)
        location.reload()
        }
    }
    showCard(id){
        var image = document.getElementById(`item${id}`)    
        image.src = this.images[this.selectedImages[id]];
        this.nombreclicks++
        

        if(this.nombreclicks == 1){
            this.Premierchoix = this.images[this.selectedImages[id]]
            console.log(this.Premierchoix,this.nombreclicks)
            this.position1 = id
        }
        
        else{
            this.Secondchoix = this.images[this.selectedImages[id]]
            console.log(this.Secondchoix,this.nombreclicks)
            this.position2 =id
        }

        if(this.Premierchoix !== this.Secondchoix && this.nombreclicks>1){

            this.Life--; 
            document.getElementById(`life`).innerHTML = `Vie(s) : ${this.Life}`
            console.log(this.Life)
            setTimeout(() =>{
            let card1 = document.getElementById(`item${this.position1}`)
            card1.style.backgroundColor="red"
            card1.src="11.png";
            let card2 = document.getElementById(`item${this.position2}`)
            card2.style.backgroundColor="red"
            card2.src="11.png";
           this.nombreclicks=0;
             },1000);
     
        }else 
        if(this.Premierchoix == this.Secondchoix){
            this.nombreclicks = 0;
            this.Paire++;
            document.getElementById(`Paire`).innerHTML = `Paire trouvées : ${this.Paire}`
        }
    
        if(this.Life == 0){
            window.alert(`Vous avez épuisé toutes vos vies, veuillez rééessayer`)
            this.Hidden()
        }
        if (this.Paire == this.size-1)
        var victoire = document.getElementById(`Message`)
        victoire.style.display="block"
        victoire.style.font = "500";
        victoire.style.color ="green"
        victoire.innerHTML = "Vous avez gagné !!!!"
        victoire.classList.add("fade")
        this.Hidden()
    }

        
  }  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function startGame() {
    let difficulty = document.getElementById(`size`).value;
    memoryGameTest = new MemoryGame(difficulty);
    let tmp = document.getElementById(`timer`).value;
    let memo = document.getElementById(`Message`)
    memoryGameTest.Play();
    memo.innerHTML = "Temps de Mémorisation ..."
    memo.classList.add('fade')
    setTimeout(function() {
        memo.style.display="none";
        memoryGameTest.Hidden();},tmp*1000);
    var horloge = setInterval(function() {memoryGameTest.timer();}, 1000);
    document.getElementById(`Start`).style.display="none"
  }

  function HiddenGame() {
    var memoryGameTest = new MemoryGame();
    memoryGameTest.Hidden();
  }
  
  function reloadGame() {
    location.reload()
  }

  // Ajouter ou non une méthode a un objet classList.remove("Nom de la méthode ou de la classe")