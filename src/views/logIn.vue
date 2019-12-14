<template>
  <div>
    <b-form class="form1" @submit="onSubmit" @reset="onReset" v-if="show">

    <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="User Name"
        ></b-form-input>
      </b-form-group>
    
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="enter a valid email address"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-button class="button1" type="submit" variant="primary">Submit</b-button>
      <b-button class="button1" type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style >
 .form1 {
   width: 60%;
   margin: auto;
   padding-top: 50px;
 }
  .button1 {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50; /* Green */
}
</style>

