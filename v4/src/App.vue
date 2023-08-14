<template>
   <AppHeader msg="Welcome to Your Vue.js App"/>
  <AppContent/>
  <GameConfig/>
  <GamePlay/>
  <GameCard/>
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
