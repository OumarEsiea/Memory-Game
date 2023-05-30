<template>
    <main>
        <section>
            <div class = "toolbar">
                <ul>
                <li><button id ="Start" onclick ="startGame()">Play</button></li>  
                <li><button id="Restart" onclick="reloadGame()">Restart</button></li>   
                </ul>
                <p id="Message"></p>
                <ul id="list" class="flex-container"></ul>
            </div>
        </section>
    </main>
    </template>
    
<script>
    export default{
        name :'GamePlay',
    }
</script>