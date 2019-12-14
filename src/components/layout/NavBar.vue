<template>
  <header class="header">
    
      
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/products">Products</b-nav-item>
      <b-nav-item to="/spareParts">Spare Parts</b-nav-item>
      <b-nav-item to="/contact">Contact</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#"><img src="../../assets/usa.png"></b-dropdown-item>
        <b-dropdown-item href="#"><img src="../../assets/germany.png"></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item to="/login">Log In</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
  </b-navbar>
    
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .header {
    background: rgb(34, 33, 33);
    color: #fff;
    line-height: 40px
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .img{
      padding-left: 10px;
      text-align: left;
      margin-top: 20px;
  }
  
</style>