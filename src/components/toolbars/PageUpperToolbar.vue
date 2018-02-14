<template>
  <div id="page-upper-toolbar">
      <h2>
          <slot>Title</slot>
      </h2>
      <select name="page-select" id="page-select">
        <option v-for="page in pages" :key="page.id" value="page.id">{{ page.name }}</option>
      </select>
      <button class="button">New Page</button>
      <button class="button">Rename Page</button>
      <button class="button">Delete Page</button>
  </div>
</template>

<style scoped>

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      pages: 'pages'
    })
  }
}
</script>