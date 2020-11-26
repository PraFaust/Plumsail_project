<template>
    <div id="client">
        <h1>{{msg}}</h1>
        <router-link to="/">Перейти к Start Page</router-link>
    </div>
</template>

<script>
export default {
  name: 'ClientForm',
  data () {
    return {
      msg: 'Welcome to Client form!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
