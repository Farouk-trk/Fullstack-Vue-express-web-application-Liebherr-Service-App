<template>
  <div class="login">
    <h2 class="page-heading"><span>{{ $t('nav.LOG IN') }}</span></h2>
    <b-form class="form1" @submit="login" @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
      {{$t('login.email')}}
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2"  label-for="input-2">  {{$t('login.username')}}
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button class="button1" type="submit" variant="warning"> {{$t('login.submit')}}</b-button>
      <b-button class="button1" type="reset" variant="warning"> {{$t('login.reset')}}</b-button>
    </b-form>
    
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus.vue'
  export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      axios.post('users/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log('user exist')
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({ name: 'Profile' })
        this.emitMethod()
      }).catch(err => {
        console.log(err.message)
        this.error = ('User does not exist ')
        this.email = ''
        this.password = ''
      })
    },
    onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.email = ''
        this.password = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>
<style >
.login{
  margin-bottom: 150px;
}
.page-heading
{ 
  font-size: 2em;
  margin: 60px 0 5px 30px;
  font-family: 'Open Sans', sans-serif;
  color: #555;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 40px;
  text-shadow: #f0f0f0 2px 2px 0;
  border-bottom:1px solid #555;
}
.page-heading span{
    border-bottom: 3px solid #ead109;
    display: inline-block;
    margin: 0 0 -2px 0;
    padding: 5px 3px;
}

.page-heading i{
  float: right;
    padding: 10px;
}

 .form1 {
   width: 60%;
   margin: auto;
   padding-top: 50px;
 }
  .button1 {
  margin: 0px 10px ;
}
</style>
