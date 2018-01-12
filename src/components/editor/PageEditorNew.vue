<template>
  <div class="page-editor-component">
    <div class="page-editor-container">
      <h3>Page Editor</h3>
      <div class="page-editor-wrapper">
        <div class="page-editor" @input="updateModel" contenteditable>
          {{ this.editorText }}
        </div>
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
  import EventBus from '../../components/events/EventBus'
  import Page from '../../components/models/Page'

  export default {
    components: {
      EventBus,
      Page
    },
    data () {
      return {
        'model': null
      }
    },
    created: function () {
      this.model = new Page({id: 0, name: 'test', content: 'Page Model Test Content'}) || {content: 'fail'}
    },
    methods: {
      updateModel: function (e) {
        this.model.content = e.target.innerText
      }
    },
    computed: {
      editorText: function () {
        return this.model.content.replace(/(?:\r\n|\r|\n)/g, '<br />')
      }
    }
  }
</script>
