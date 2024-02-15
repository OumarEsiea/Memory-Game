<template>
    <GameCard v-for="ImageId in game" :key="ImageId" :imageId="ImageId"/>
    <center><button v-on:click="changeMe()">Refresh</button></center>
</template>

<script>
import GameCard from './GameCard.vue'
export default{
    name:'GamePlay',
    components: {GameCard},
    data() {
        return {
            game: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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