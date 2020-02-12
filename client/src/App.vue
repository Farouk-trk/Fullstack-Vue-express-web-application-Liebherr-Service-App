<template>
  <div id="app">

      <Header />
      <NavBar />  
      <router-view/>
      <Footer/>  
  </div>
</template>

<script>
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
export default {
  name:"app",
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style>
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';
  * {
    margin: 0;
    padding: 0;
    
  }
  

</style>
