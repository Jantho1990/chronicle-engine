<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>Chronicle</h1>
    <h2>A Text-Adventure Engine</h2>
    <div class="container">
      <PageEditorNew/>
      <PageViewer/>
    </div>
  </div>
</template>

<script>
import PageEditorNew from './components/editor/PageEditorNew'
import PageViewer from './components/viewer/PageViewer'

export default {
  name: 'app',
  components: {
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

  .container {
    display: flex;
  }
</style>
