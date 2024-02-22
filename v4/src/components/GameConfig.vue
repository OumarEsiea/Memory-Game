<template>
    <main>
		<section>
			<h1 style="color: red;font-style: italic;" class="fade" >Memory Game</h1>
            <label for="size">Taille du jeu</label>
            <input v-model="Taille_Jeu" :ref="input">

            <label for="timer">Temps de Mémorisation</label>
            <input v-model="Tps_Memo">

            <label for="timer2">Temps imparti</label>
            <input v-model="TpsJeu">
            <span :color="red">{{ Taille }} <br>{{ Tps_Memo }}<br>{{ TpsJeu }}</span>
            <GamePlay :-taille="{Taille_Jeu}" :-memo="{Tps_Memo}" :-temps="{input}"/>
		</section>
        </main>
    </template>
    
<script>
     import GamePlay from './GamePlay.vue';
     import { ref } from 'vue'
    export default{
        name :'GameConfig',
        components : {GamePlay},
        setup() {
        const input = ref(null)
    // ...
        return {
        input
    }
  }
    }
</script>