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
        let parse1 = content.split('[link.')
        parse1.forEach((parse) => {
          if(parse.indexOf(']') === -1){return}
          let parse2 = parse.split(']')[0]
          let parse3 = parse2.split('.')
          if(parse3.length === 2){
            let link = {
              raw: `[link.${parse2}]`,
              name: parse3[0],
              target: parse3[1]
            }
            let _link = this.links.find((ar) => ar.raw === link.raw) || null
            if(_link === null){
              this.links.push(link)
            }
          } else {
            console.log('ERROR: Invalid Link')
          }
        })
      },
      pruneLinks: function (content) {
        let arr = this.links
        this.links.forEach((link, i) => {
          if(content.indexOf(link.raw) === -1){
            arr.splice(i, 1)
          }
        })
        this.links = arr
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
