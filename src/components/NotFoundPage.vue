<template>
  <div class="notFound">
    <h1>Page not found</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  data () {
    return {
      msg: 'ERROR 404'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #ff0000;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
