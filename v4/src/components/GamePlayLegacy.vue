<template>
    <center>
   <footer>ESIEA 2023</footer>
   <div id="date">{{ date }}</div>
   </center>
    </template>
    
<script>
    export default{
        name :'GamePlayLegacy',
        data(){
            return{
                date : Date()
            }
        }
    }
</script>

<style>
#date{
    font-weight: bold;
    color: white;
    align-items: center;
}
</style>