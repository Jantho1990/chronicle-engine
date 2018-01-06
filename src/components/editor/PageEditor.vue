<template>
  <div class="page-editor">
    <p class="display" v-html="contentHtml"></p>
    <div class="editor">
      <textarea ref="tx" name="textArea" cols="30" rows="10" v-model="content" contenteditable></textarea>
      <div class="edit-bar">
        <button @click="insertAtCursor">Add Link</button>
      </div>
    </div>
  </div>
</template>

<script>
  // TODO: Replace the textarea with a contenteditable div.
  export default {
    data () {
      return {
        content: '',
        contentHtml: '',
        id: 0,
        linkText: '<button>Click Me</button>'
      }
    },
    watch: {
      content: function (value) {
        this.contentHtml = value.replace(/(?:\r\n|\r|\n)/g, '<br />')
      }
    },
    methods: {
      insertAtCursor () {
        // Kudos to https://stackoverflow.com/questions/11076975/insert-text-into-textarea-at-cursor-position-javascript
        let myField = this.$refs.tx
        let myValue = this.linkText
        // IE support
        if (document.selection) {
          myField.focus()
          let sel = document.selection.createRange()
          sel.text = myValue
        } else if (myField.selectionStart || myField.selectionStart === '0') {
          // MOZILLA and others
          let startPos = myField.selectionStart
          let endPos = myField.selectionEnd
          myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length)
          myField.selectionStart = startPos + myValue.length
          myField.selectionEnd = startPos + myValue.length
        } else {
          myField.value += myValue
        }
        this.content = this.$refs.tx.value
        myField.focus()
      }
    }
  }
</script>

<style type="text/css" scoped>
  .page-editor {
    width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .page-editor .display, .page-editor .editor {
    display: block;
    margin: auto;
  }

</style>
