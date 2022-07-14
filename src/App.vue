<template>
  <Header />
  <Home />
  <Footer />
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
