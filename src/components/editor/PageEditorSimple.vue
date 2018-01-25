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
        model: null
      }
    },
    created: function () {
      this.model = new Page({id: 0, name: 'test', content: 'Page Model Test Content'}) || {content: 'fail'}
      EventBus.$emit('pageUpdate', this.model)
    },
    watch: {
      content: function (value) {
        this.model.content = value.replace(/(?:\r\n|\r|\n)/g, '<br />')
        EventBus.$emit('pageUpdate', this.model)
      }
    }
  }
</script>
