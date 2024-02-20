<template>
    <main>
		<section>
			<h1 style="color: red;font-style: italic;" class="fade" >Memory Game</h1>
            <label for="size">Taille du jeu</label>
            <input id="size" type="text" required maxlength="1" size="5">
            <label for="timer">Temps de Mémorisation</label>
            <input id="timer" type="text" required maxlength="2" size="5">
            <label for="timer2">Temps imparti</label>
            <input id="timer2" type="text" required maxlength="2" size="5">
            <nav class="Jeu">
                <p id ="Size">Size : 0</p>
                <p id ="Timer">Timer : 0</p>
                <p id="life">Vie(s) : 3</p>
                <p id="Paire"></p>
            </nav>
            <GamePlay/>
		</section>
        </main>
    </template>
    
<script>
     import GamePlay from './GamePlay.vue';
    export default{
        name :'GameConfig',
        components : {GamePlay},
    }
</script>