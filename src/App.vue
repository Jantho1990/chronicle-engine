<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>Chronicle</h1>
    <h2>A Text-Adventure Engine</h2>
    <div class="container">
      <PageEditorSimple/>
      <PageViewer/>
    </div>
  </div>
</template>

<script>
import PageEditor from './components/editor/PageEditor'
import PageEditorSimple from './components/editor/PageEditorSimple'
import PageViewer from './components/viewer/PageViewer'

export default {
  name: 'app',
  components: {
    PageEditor,
    PageEditorSimple,
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

  .container {
    display: flex;
  }
</style>
