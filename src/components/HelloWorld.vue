<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="name" />
    <p>{{ name }}</p>
    <a :href="url">Link</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      url: 'https://platzi.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
