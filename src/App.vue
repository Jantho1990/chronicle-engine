<template>
  <div id="app">
    <img src="./assets/logo.png">
    <PageEditor/>
    <PageEditorNew/>
  </div>
</template>

<script>
import PageEditor from './components/editor/PageEditor'
import PageEditorNew from './components/editor/PageEditorNew'

export default {
  name: 'app',
  components: {
    PageEditor,
    PageEditorNew
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
