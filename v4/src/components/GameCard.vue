<template>
<img :src="`${cardId}.png`" class="flex-item" width="50%" v-on:click="Hide()" id="carte">
</template>

<script>
export default {
name: 'GameCard',
props: {
cardId: { type: String, default: "0"},
imageId: { type: String, default: "10"},
    },
}

</script>

<style>
img {
    display: flex;
    margin: auto;
    width: 100%;
}
</style>