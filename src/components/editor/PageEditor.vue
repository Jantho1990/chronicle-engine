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
  import { EventBus } from '../../components/events/EventBus'
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
      EventBus.$emit('pageUpdate', this.model)
    },
    methods: {
      updateModel: function (e) {
        this.model.content = e.target.innerText
        e.target.text = this.insertAtCursor(e.target, e.target.text)
        this.setCursorAt(e.target)
        console.log('boll', this.model.content)
        EventBus.$emit('pageUpdate', this.model)
      },
      setCursorAt: function (el) {
        console.log('rabbit', el.childNodes)
//        el.focus()
        let range = document.createRange()
        range.setStart(el.childNodes[0], 5)
        range.collapse(true)
        let sel = window.getSelection()
        console.log(sel)
//        sel.addRange(range)
        sel.removeAllRanges()
          sel.addRange(range)
//        el.setSelectionRange(el.innerText.length, el.innerText.length)
      },
      insertAtCursor: function (myField, myValue) {
        //IE support
        if (document.selection) {
          myField.focus()
          let sel = document.selection.createRange()
          sel.text = myValue
        }
        //MOZILLA and others
        else if (myField.selectionStart || myField.selectionStart == '0') {
          let startPos = myField.selectionStart
          let endPos = myField.selectionEnd
          myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length)
        } else {
          myField.value += myValue
        }
      }

    },
    computed: {
      editorText: function () {
        return this.model.content
      }
    }
  }
</script>
