class MemoryGame {
    constructor(size) {
        this.size = size;
        this.images = [];
        this.time=document.getElementById(`timer2`).value
        this.selectedImages = [];
        this.Premierchoix = null;
        this.Secondchoix = null;
        this.nombreclicks =0;
        this.position1=0;
        this.position2=0;
        this.Life=3;
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
            minuteur.style.color ="red"
        }
        if (this.time == -2){
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
            card1.src="11.png";
            let card2 = document.getElementById(`item${this.position2}`)
            card2.src="11.png";
           this.nombreclicks=0;
             },1000);
     
        }else 
        if(this.Premierchoix == this.Secondchoix)
            this.nombreclicks = 0;
    
        /*if(this.Life == 0){
            window.alert(`Vous avez épuisé toutes vos vies`)
            location.reload()
        }*/
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
    memoryGameTest.Play();
    let tmp = document.getElementById(`timer`).value;
    let memo = document.getElementById(`Message`)
    memo.innerHTML = "Temps de Mémorisation ..."
    setTimeout(function() {
        memo.style.display="none";
        memoryGameTest.Hidden();}, tmp*1000);
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