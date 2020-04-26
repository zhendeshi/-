<template>
  <div id="app">

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view to="/"></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <appFooter></appFooter> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import appHead from './pages/head/head';
// import appFooter from './pages/footer/footer';
// import './request/faq.css'
// import './request/style.css'
// import "request/faq.css";
// import 'request/style.css'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // appFooter,
    // appHead
  },
  mounted(){
    // console.log('get')
    // this.$post('News/getTown',{page: 1}).then(res=>{console.log(res)})
  }
}
</script>

<style>


body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor:default;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

textarea {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
input {
  outline: none;
}
img {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
