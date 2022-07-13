<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="name" />
    <p>{{ name }}</p>
    <a :href="url">Link</a>
    <input v-model="lastName" />
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      url: 'https://platzi.com',
      lastName: ''
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  gap: 5px;
}
</style>
