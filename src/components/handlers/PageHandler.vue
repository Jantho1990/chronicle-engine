<script>
  import { EventBus } from '../../components/events/EventBus'

  export default {
    components: {
      EventBus
    },
    created: function () {
      EventBus.$on('storePage', this.storePage)
      EventBus.$on('updatePage', this.storePage)
      EventBus.$on('destroyPage', this.storePage)
    },
    data () {
      return {
        pages: []
      }
    },
    methods: {
      storePage: function (page) {
        this.pages.push(page)
      },
      updatePage: function (page) {
        let i = this.pages.findIndex(_page => _page.id === page.id)
        this.pages[i] = page
      },
      destroyPage: function (id) {
        let i = this.pages.findIndex(page => page.id === id)
        this.pages.splice(i, 1)
      }
    }
  }
</script>