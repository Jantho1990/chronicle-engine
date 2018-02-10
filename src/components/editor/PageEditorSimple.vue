<template>
  <div class="page-editor-component">
    <div class="page-editor-container">
      <h3>Page Editor</h3>
      <div class="page-editor-wrapper">
        <textarea class="page-editor" ref="editor" cols="30" rows="10" v-model="content"></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-editor-component {
    margin: 0 2rem;
    flex-grow: 1;
  }

  .page-editor-wrapper {
    border: 1px solid #af111c;
    min-height: 10rem;
    text-align: left;
  }

  .page-editor {
    padding: 0.75em;
    outline: 0 solid transparent; /* Get rid of the border when selecting this. */
  }
</style>

<script>
  import { EventBus } from '../../components/events/EventBus'
  import Page from '../../components/models/Page'

  export default {
    components: {
      EventBus,
      Page
    },
    data () {
      return {
        content: '',
        model: null,
        links: []
      }
    },
    created: function () {
      this.model = new Page({id: 0, name: 'test', content: 'Page Model Test Content'}) || {content: 'fail'}
      EventBus.$emit('pageUpdate', this.model)
    },
    methods: {
      parseLinks: function (content) {
        let splitOpen = content.split('[link.')
        splitOpen.forEach((str) => {
          if (str.indexOf(']') === -1) { return }
          let parsed = str.split(']')[0]
          let data = parsed.split('.')
          if (data.length === 2) {
            let link = {
              raw: `[link.${parsed}]`,
              parsed,
              name: data[0],
              target: data[1]
            }
            let existingLink = this.links.find((_link) => _link.raw === link.raw) || false
            if (!existingLink) {
              this.links.push(link)
            }
          } else {
            console.log('ERROR: Invalid Link')
          }
        })
      },
      pruneLinks: function (content) {
        let newLinks = this.links
        this.links.forEach((link, i) => {
          if (content.indexOf(link.raw) === -1) {
            newLinks.splice(i, 1)
          }
        })
        this.links = newLinks
      }
    },
    watch: {
      content: function (value) {
        this.model.content = value.replace(/(?:\r\n|\r|\n)/g, '<br />')
        console.log('Value is', value)
        this.pruneLinks(value)
        this.parseLinks(value)
        EventBus.$emit('pageUpdate', this.model)
      }
    }
  }
</script>
