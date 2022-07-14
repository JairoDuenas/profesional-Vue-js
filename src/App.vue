<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Body from '@/components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Body
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
