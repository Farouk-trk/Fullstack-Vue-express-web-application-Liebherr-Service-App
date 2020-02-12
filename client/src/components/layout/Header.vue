<template>

  <div class="shadow">
  <b-navbar  type="light" variant="light">
    <b-navbar-brand to="/"><img class="lieb" src="../../assets/logo_ci_liebherr.svg"></b-navbar-brand>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-item class="text" v-if="auth!=='loggedin'" to="/login"><em>{{ $t('nav.LOG IN') }}</em></b-nav-item>
          <b-nav-item class="text" v-if="auth=='loggedin'" v-on:click="logout()" to="#"><em>{{ $t('nav.LogOut') }}</em></b-nav-item>
          <b-nav-item class="text" v-if="auth=='loggedin'" to="/Profile"><em>{{ $t('nav.Profile') }}</em></b-nav-item>
             <b-nav-item href="#" 
              @click.prevent="setLocale('en')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"><img class="flag" src="../../assets/usa.png"></b-nav-item>
              <b-nav-item href="#"
              @click.prevent="setLocale('de')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"><img class="flag" src="../../assets/germany.png"></b-nav-item>
        </b-nav-form>

      </b-navbar-nav>
    
  </b-navbar>
</div>
</template>


<script>
/* eslint-disable */
import router from '../../router'
import EventBus from './../../views/EventBus'
export default {
   name: "Header",
  data() {
    return {
      auth: '',
      user: '',
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
      this.auth=''
      router.push({ name: 'home' })
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }

  },
  mounted () {
    EventBus.$on('logged-in', status => {
     this.auth = status
    })
  }
}
</script>
  
  <style scoped>
  
 .shadow{
    padding-top: 8px; 
    height: 80px;
    border-bottom: 7px solid;
    border-color: #fbc500;
  
}
@media only screen and (max-width: 730px) {
  .lieb {
    width: 100px; 
  }
  .flag {
    width: 15px;
  }
  .text{
    width: 50px;
    margin-right: 10px;
  }
}
  
  
  
</style>