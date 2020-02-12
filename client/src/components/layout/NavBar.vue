<template>
  
    <b-navbar id="navbarr" type="dark" variant="dark" toggleable="md" sticky >
      <b-navbar-brand  to="/"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="bnav">
          <b-nav-item to="/" no-prefetch=true>{{ $t('nav.Home') }}  <ios-home-icon/></b-nav-item>
          <HomeIcon/>
          <b-nav-item to="/products">{{ $t('nav.Products') }}  <ios-jet-icon/></b-nav-item>
          <b-nav-item to="/spareParts"> {{ $t('nav.Spare Parts') }}  <ios-cog-icon/></b-nav-item>
          <b-nav-item to="/contact">{{ $t('nav.Contact') }}   <ios-contact-icon /></b-nav-item>
          <b-nav-item to="/problem"> {{ $t('nav.Repair') }}   <ios-cog-icon/></b-nav-item>
          </b-navbar-nav>
      </b-collapse> 
    </b-navbar>
    
    
  
</template>

<script>


export default {
   name: "NavBar",
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }

  }
}
</script>

<style scoped>
@import '~vue-ionicons/ionicons.scss';
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>