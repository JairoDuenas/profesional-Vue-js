<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="section">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <input
          class="input is-primary is-large"
          type="text"
          placeholder="Buscar canción"
          v-model="searchQuery"
        />
      </div>
      <div class="navbar-end">
        <a class="button is-info is-large" type="button" @click="search"
          >Buscar</a
        >
        <a class="button is-danger is-large" type="button">&times;</a>
      </div>
      <p is-small>{{ searchMessage }}</p>
    </nav>

    <div class="columns">
      <div class="column" v-for="(track, index) in tracks" :key="index">
        {{ track.name }} - {{ track.artist }}
      </div>
    </div>
  </div>
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Spineta' },
  { name: 'Hoy aca', artist: 'El pepo' },
  { name: 'I was', artist: 'Kiss' }
]
export default {
  name: 'Home-music',
  data () {
    return {
      searchQuery: '',
      tracks
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-start {
  width: 80%;
}
</style>
