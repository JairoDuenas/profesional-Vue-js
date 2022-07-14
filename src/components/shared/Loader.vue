<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="loading has-text-centered">
      <h1>Cargando...</h1>
      <span class="button is-info is-loading is-large is-outlined"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  padding: 20px;
  min-height: 30vh;
}
.button {
  margin: 30px;
  width: 6rem;
}
</style>
