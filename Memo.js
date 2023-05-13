class MemoryGame {
    constructor(size) {
        this.size = size;
        this.images = [];
       
        this.selectedImages = [];
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
            htmltags = htmltags + '<li class="flex-item"><a href="#"><img id="item' + i + '" width="50%" src="20.png"></a></li>';
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
        console.log("Deck Shuffled!");
    }
  
    Play() {
        this.Init();
        this.Shuffle();
        var cadre = document.getElementById(`Size`)
        cadre.innerHTML = `Size : ${this.size}`
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
  }  
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function startGame() {
    var difficulty = document.getElementById(`size`).value+1;
    var memoryGameTest = new MemoryGame(difficulty);
    memoryGameTest.Play();
    var tmp = document.getElementById(`timer`).value;
    setTimeout(function() {memoryGameTest.Hidden();}, tmp*1000);
  }

  function HiddenGame() {
    var difficulty = document.getElementById(`size`).value;
    var memoryGameTest = new MemoryGame(difficulty);
    memoryGameTest.Hidden();
  }
  
  function reloadGame() {
    location.reload()
    var memoryGameTest = new MemoryGame();
    memoryGameTest.reload();
  }

  function showCard(id){
    var image = document.getElementById(`item${i}`)
  }
