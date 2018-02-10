<script>
  import { EventBus } from '../../components/events/EventBus'

  export default {
    components: {
      EventBus
    },
    created: function () {
      EventBus.$on('storeLink', this.storeLink)
      EventBus.$on('updateLink', this.updateLink)
      EventBus.$on('destroyLink', this.destroyLink)
    },
    data () {
      return {
        links: []
      }
    },
    methods: {
      storeLink: function (link) {
        this.links.push(link)
      },
      updateLink: function (link) {
        let i = this.links.findIndex(_link => _link.id === link.id)
        this.links[i] = link
      },
      destroyLink: function (id) {
        let i = this.links.findIndex(_link => _link.id === id)
        this.links.splice(i, 1)
      }
    }
  }
</script>