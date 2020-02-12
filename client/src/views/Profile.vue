<template>
   <div>
  <b-card class="profile" bg-variant="light">
    <b-form-group
      class="mb-0"
    ><h2>{{ $t('profile.user') }}</h2>
      <b-form-group
        label-cols-sm="3"
        label="First Name:"
        label-align-sm="right"
      >
        <h6>{{first_name}}</h6>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Last Name:"
        label-align-sm="right"
      >
        <h6>  {{last_name}}</h6>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Position:"
        label-align-sm="right"
      >
        <h6>  {{position}}</h6>
        </b-form-group>
      
      <b-form-group
        label-cols-sm="3"
        label="Age:"
        label-align-sm="right"
      >
        <h6>  {{age}}</h6>
        </b-form-group>


        <b-form-group
        label-cols-sm="3"
        label="Phone number:"
        label-align-sm="right"
      >
        <h6>  {{phone}}</h6>
        </b-form-group>

        <b-form-group
        label-cols-sm="3"
        label="Email:"
        label-align-sm="right"
      >
        <h6>  {{email}}</h6>
        </b-form-group>
        <b-form-group><router-link to="/problem" class="links"><a>{{ $t('profile.problem') }}</a></router-link></b-form-group>
        <b-form-group><router-link to="/Chat" class="links"><a>{{ $t('profile.chat') }}</a></router-link></b-form-group>

      </b-form-group>


  </b-card>
</div>
</template>

<script>
/* eslint-disable */
import jwtDecode from 'jwt-decode'
import router from '../router'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      age: decoded.age,
      phone: decoded.phone,
      position: decoded.position
    }
  }
}
</script>

<style scoped>
    .profile{
        width: 60%;
        margin-top: 20px;
        margin-bottom: 60px;
        margin-right: auto;
        margin-left: auto;
        border-bottom: 7px solid;
        border-color: #fbc500;
    }
    @media only screen and (max-width: 730px) {
  .profile {
    width: 90%;
   
  }
}
    h6{
        margin-left: 20px;
        margin-top: 10px;
    }
    .links{
        margin-top: 20px;
        width: 100%;
    }
    a {
  
  text-decoration: underline
}

/* mouse over link */
a:hover {
  color: #fbc500;
}
</style>