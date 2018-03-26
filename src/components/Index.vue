<template>
  <img src="../assets/logo2.jpg" alt="">
</template>

<script>
import SideBar from './SideBar'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'shou'
    }
  },
  methods: {

  },
  components: {
    SideBar
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
img {
  width: 50%;
  margin-left: 18%;
  margin-top: 5%;
}
</style>
