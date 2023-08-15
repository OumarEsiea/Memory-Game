<template>
<meta charset="utf-8">
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->