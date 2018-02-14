<template>
<div id="page-content">
  <PageUpperToolbar>Edit Pages</PageUpperToolbar>
  <div class="ctnr">
    <PageEditorSimple :pageId="0"/>
    <PageViewer :pageId="0"/>
  </div>
</div>
</template>

<style scoped>

</style>

<script>
import PageUpperToolbar from '../toolbars/PageUpperToolbar'
import PageEditorSimple from '../editors/PageEditorSimple'
import PageViewer from '../viewers/PageViewer'

import { mapGetters } from 'vuex'

export default {
  components: {
    PageUpperToolbar,
    PageEditorSimple,
    PageViewer
  },
  computed: {
    ...mapGetters({
      pages: 'pages'
    })
  }
}
</script>