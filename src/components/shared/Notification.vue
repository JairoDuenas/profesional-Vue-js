<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4 has-text-centered">
        <div class="notification is-danger">
          <slot name="body">Algo anda mal</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
