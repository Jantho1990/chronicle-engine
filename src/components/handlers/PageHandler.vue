<script>
  import { EventBus } from '../../components/events/EventBus'

  export default {
    components: {
      EventBus
    },
    created: function () {
      EventBus.$on('storePage', this.storePage)
      EventBus.$on('updatePage', this.updatePage)
      EventBus.$on('destroyPage', this.destroyPage)
    },
    data () {
      return {
        pages: []
      }
    },
    methods: {
      storePage: function (page) {
        this.pages.push(page)
        EventBus.$emit('pageStored', page, this.pages)
      },
      updatePage: function (page) {
        let i = this.pages.findIndex(_page => _page.id === page.id)
        this.pages[i] = page
        EventBus.$emit('pageUpdated', this.pages[i], this.pages)
      },
      destroyPage: function (id) {
        let i = this.pages.findIndex(page => page.id === id)
        this.pages.splice(i, 1)
        EventBus.$emit('pageDestroyed', id, this.pages)
      }
    }
  }
</script>