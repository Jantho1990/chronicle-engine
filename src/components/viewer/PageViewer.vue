<template>
  <div class="page-viewer-component">
    <div class="page-viewer-container">
      <h3>Page Viewer</h3>
      <div class="page-viewer-wrapper">
        <div class="page-viewer">
          <span v-html="this.viewerContent"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-viewer-component {
    margin: 0 2rem;
    flex-grow: 1;
  }

  .page-viewer-wrapper {
    border: 1px solid #1caf11;
    min-height: 10rem;
    text-align: left;
  }

  .page-viewer {
    padding: 0.75em;
    outline: 0 solid transparent; /* Get rid of the border when selecting this. */
  }
</style>

<script>
  import { EventBus } from '../../components/events/EventBus'
  import Page from '../../components/models/Page'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      EventBus,
      Page
    },
    data () {
      return {
        'dummy': new Page({id: null, name: 'dummy', content: 'dummy content'})
      }
    },
    computed: {
      viewerContent: function () {
        console.log('marb', this.model.content)
        return this.model.content || ''
      },
      ...mapGetters({
        pages: 'pages'
      }),
      model () {
        return this.$store.getters.pages.filter(page => page.id === this.pageId)
      }
    },
    created: function () {
      EventBus.$on('updatePage', this.updateViewer)
    },
    methods: {
      updateViewer: function (id) {
        // this.model = model
        this.model = this.$store.getters.pages.filter(page => page.id === id)
      }
    },
    props: ['pageId']
  }
</script>
