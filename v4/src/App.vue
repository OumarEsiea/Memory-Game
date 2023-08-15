<template>
   <AppHeader msg="Memory Game Version VueJs"/>
  <AppContent/>
  <GameConfig/>
  <GamePlay/>
  <GameCard v-bind:id="`cardI${cardId}`"/>
 <GamePlayLegacy/>
</template>

<script>
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue'
import GameConfig from './components/GameConfig.vue';
import GamePlay from './components/GamePlay.vue';
import GameCard from './components/GameCard.vue';
import GamePlayLegacy from './components/GamePlayLegacy.vue';
export default {
  name: 'App',
  components: {
    AppContent,
    AppHeader,
    GameConfig,
    GamePlay,
    GameCard,
    GamePlayLegacy
  }
}

</script>

<style>
</style>
