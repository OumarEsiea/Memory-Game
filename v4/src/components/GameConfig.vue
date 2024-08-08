<template>
    <main>
		<section>
			<h1 style="color: red;font-style: italic;" class="fade">Memory Game</h1>
            <label for="size">Taille du jeu</label>
            <input type="number" v-model.number="Taille_Jeu">

            <label for="timer">Temps de Mémorisation</label>
            <input type="number" v-model.number="Tps_Memo">

            <label for="timer2">Temps imparti</label>
            <input type="number" v-model.number="TpsJeu">

            <GamePlay :Taille="Taille_Jeu" :Memo="Tps_Memo" :Temps="TpsJeu"/>
		</section>
        </main>
    </template>
    
<script>
    import GamePlay from './GamePlay.vue';
    export default{
        name :'GameConfig',
        components : {GamePlay},
       data (){
        return {
            Taille_Jeu : '',
            Tps_Memo : '',
            TpsJeu : ''
        }
       },
    }
</script>