<template>
    <main>
        <section>
            <label for="size">Taille du jeu</label>
            <input id="size" type="text" required maxlength="1" size="5">
            <label for="timer">Temps de Mémorisation</label>
            <input id="timer" type="text" required maxlength="2" size="5">
            <label for="timer2">Temps imparti</label>
            <input id="timer2" type="text" required maxlength="4" size="5">
            <nav class="Jeu">
                <p id ="Size">Size : 0</p>
                <p id ="Timer">Timer : 0</p>
                <p id="life">Vie(s) : 3</p>
                <p id="Paire"></p>
            </nav>
        </section>
    </main>
    </template>
    
<script>
    export default{
        name :'GameConfig',
    }
</script>