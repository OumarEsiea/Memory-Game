<template>
<li class="flex-item"><img :src="`${cardId}.png`" v-on:click="ChangeId()">                      
</li>
</template>

<script>
export default {
name: 'GameCard',
props: {
cardId: { type: String, default: "0"},
imageId: { type: String, default: "10"},
    },
    data (){
        return {
            card : String, default:"11",
        }
    },
    methods : {
        Hide(){
            console.log(this.Appuie)
            this.Appuie = true
            console.log(this.Appuie)
        },

        ChangeId() {
            let newCardId = 'nouvel_id_de_carte'
            this.$emit('ChangeId', newCardId);
        
    }

    }
}

</script>

<style>
img {
    display: flex;
    margin: auto;
    width: 100%;
}
</style>