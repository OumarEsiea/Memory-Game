<template>
<GameCard v-for="imageId in game"
v-bind:key="imageId" v-bind:imageid="imageId"/>
<ul id="game" class="flex-container">
<GameCard image-id="1"/>
<GameCard image-id="2"/>
</ul>
</template>

<script>
//import GameCard from './GameCard.vue'
export default{
    name:'GamePlay',
    components: {GameCard},
    data() {
return {
game: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}
}
}
</script>