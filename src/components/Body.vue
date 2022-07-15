<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Loader v-show="isLoading" />
  <Notification v-show="showNotification">
    <template v-slot:body>
      <p name="body">
        {{ isFound ? searchMessage : "No se encontraron resultados" }}
      </p>
    </template>
  </Notification>
  <section class="section" v-show="!isLoading">
    <nav class="navbar" aria-label="main navigation">
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
    </nav>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="t in tracks" :key="t">
          <Track
            :class="{ 'is-active': t.id === selectedTrack }"
            :track="t"
            @select="setSelectedTrack"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import trackService from '@/services/track'
import Track from './Track.vue'
import Loader from '@/components/shared/Loader.vue'
import Notification from './shared/Notification.vue'

export default {
  components: {
    Track,
    Loader,
    Notification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      Track,
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = !this.showNotification
          if (this.isFound) this.isFound = !this.isFound
        }, 4000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true

      trackService.search(this.searchQuery).then((res) => {
        if (res.tracks.total > 0) {
          this.isFound = true
        }
        this.showNotification = res.tracks.total === 0 || this.isFound
        this.tracks = res.tracks.items

        this.isLoading = false
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  margin-bottom: 20px;
}
.is-small {
  width: 100px;
  border: 1px solid #48c78e;
}
.navbar-start {
  width: 100%;
}
.is-active {
  border: 3px solid #48c78e;
}
</style>
