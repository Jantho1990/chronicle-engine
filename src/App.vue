<template>
  <div id="app">
    <img src="./assets/logo.png">
    <PageEditor/>
    <PageEditorNew/>
    <PageViewer/>
  </div>
</template>

<script>
import PageEditor from './components/editor/PageEditor'
import PageEditorNew from './components/editor/PageEditorNew'
import PageViewer from './components/viewer/PageViewer'

export default {
  name: 'app',
  components: {
    PageEditor,
    PageEditorNew,
    PageViewer
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
