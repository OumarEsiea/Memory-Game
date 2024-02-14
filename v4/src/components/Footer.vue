<template>
<center>{{ msg }}<br><br>
        {{ date }}
    </center>
</template>


<script>
export default {
    name :'FooterGame',
    props : {
        msg : String,
    },
    data (){
        return{
            date : new Date(),
        }
    }
}
</script>

<style>
center{
    font-weight: bold;
    color: white;
}
</style>