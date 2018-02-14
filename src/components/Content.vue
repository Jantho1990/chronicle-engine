<template>
  <div id="content">
      <PageContent v-if="active === 'page-content'" />
  </div>
</template>

<style scoped>

</style>


<script>
import PageContent from './contents/PageContent'

export default {
  components: {
    PageContent
  },
  data () {
    return {
      active: 'page-content'
    }
  }
}
</script>