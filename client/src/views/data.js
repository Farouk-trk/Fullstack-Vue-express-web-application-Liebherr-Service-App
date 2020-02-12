import Vue from 'vue';
var model_options = {
    1: [{ text: "Accord", id: 1 }, { text: "Civic", id: 2 }],
    2: [{ text: "Corolla", id: 3 }, { text: "Hi Ace", id: 4 }],
    3: [{ text: "Altima", id: 5 }, { text: "Zuke", id: 6 }],
    4: [{ text: "Alto", id: 7 }, { text: "Swift", id: 8 }]
  };
  
  var makes_options = [
    { text: "Honda", id: 1 },
    { text: "Toyota", id: 2 },
    { text: "Nissan", id: 3 },
    { text: "Suzuki", id: 4 }
  ];
  
  var vm_makes = new Vue({
    el: "#app",
    data: {
      make: null,
      model: null,
      makes_options: makes_options,
      model_options: model_options,
    },
    watch: {
      make: function(event) {
        $('#vehicle-models').dropdown('clear');
      }
    }
})
$('.ui.dropdown').dropdown();