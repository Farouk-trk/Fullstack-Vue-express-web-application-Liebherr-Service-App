

 <template>
 <b-container>
    <b-card-title style="text-align:center;">Liebherr World Wide Network</b-card-title>
   <b-embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5132296.010766118!2d5.968674960182375!3d51.08993532391271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sde!4v1580222570617!5m2!1sen!2sde"></b-embed>
   <div id="app">
    <div >
        <b-row>
          <b-col style="text-align:center;">
          <ejs-dropdownlist required="true" id='countries' :dataSource='productData' :index='countryindex' :fields='countryfields' :change='onCountryChange' placeholder='Select a country'></ejs-dropdownlist>
          <br>
          <ejs-dropdownlist v-model="selected" :options="locationData" id='states' :dataSource='locationData' :index='stateindex' :fields='statefields' :stateenabled='stateenabled' :change='onStateChange' placeholder='Select a state'></ejs-dropdownlist>
          </b-col>
          <b-col>
        Address: <strong>{{ selected }}</strong>
        <div v-if="selected === 'Liebherr-Components Deggendorf GmbH, Kreuzäcker 8,94469 Deggendorf,Germany'">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2670.0143408483123!2d9.6631614!3d47.99411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e8bf4c3928c950f!2sLiebherr-Mischtechnik%20GmbH!5e0!3m2!1sde!2sde!4v1580219538250!5m2!1sde!2sde" width="350" height="350"  frameborder="1" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected === 'Liebherr-Mischtechnik GmbH, Im Elchgrund 12,88427 Bad Schussenried,Germany'">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.014341923966!2d9.663161415643987!3d47.99410997921219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e8bf4c3928c950f!2sLiebherr-Mischtechnik%20GmbH!5e0!3m2!1sde!2sde!4v1580221151074!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected === 'Liebherr-Ettlingen GmbH, Hertzstraße 9-15,76275 Ettlingen,Germany'">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.4825587420883!2d8.382031415677442!3d48.94429667929605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75ed017045f301d7!2sLiebherr-Verzahntechnik%20GmbH!5e0!3m2!1sde!2sde!4v1580221265624!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected==='Liebherr-MCCtec Vertriebs- und Service GmbH, Buchheisterstraße 12,20457 Hamburg,Germany'">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2371.7094021607895!2d9.966326!3d53.5272466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18fa4ad30c9cf%3A0xc4e94d08122a4ab!2sBuchheisterstra%C3%9Fe%2012%2C%2020457%20Hamburg!5e0!3m2!1sde!2sde!4v1580221409427!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected==='Liebherr-Verzahntechnik GmbH, Kaufbeurer Straße 141,87437 Kempten/Allgäu,Germany'">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.9875242793046!2d10.32006301563526!3d47.74289677919394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa4a4f9e56ec5512!2sLiebherr-Verzahntechnik%20GmbH!5e0!3m2!1sde!2sde!4v1580221547758!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected==='Liebherr-Elektronik GmbH, Peter-Dornier-Straße 11,88131 Lindau,Germany'">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.8822730633456!2d9.729381315628586!3d47.55061997918098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x562312f3ba6f16dc!2sLiebherr-Elektronik%20GmbH!5e0!3m2!1sde!2sde!4v1580221820983!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected==='Liebherr-Aerospace Lindenberg GmbH, Pfänderstraße 50-52,88161 Lindenberg/Allgäu,Germany'">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.514225090772!2d9.866041315630152!3d47.59668997918398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b74426c48a7bd%3A0xc829b1efd300bbd8!2sLiebherr-Aerospace%20Lindenberg%20GmbH!5e0!3m2!1sen!2sde!4v1580221870176!5m2!1sen!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<div v-else-if="selected==='Liebherr-MCCtec Rostock GmbH, Liebherrstraße 1,18147 Rostock,Germany'">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.4424708606866!2d12.114261815869101!3d54.15452528015638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x560ac2ff4e1db9d3!2sLiebherr-MCCtec%20Rostock%20GmbH!5e0!3m2!1sde!2sde!4v1580222018573!5m2!1sde!2sde" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
        </b-col>
        </b-row>
    </div>
  </div>
 </b-container>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { Query } from '@syncfusion/ej2-data';

export default {
  data () {
    return {
      productData: [
        { ProductName: 'Select Product', ProductId: '0' },
        { ProductName: 'Aerospace & transportation systems', ProductId: '1' },
        { ProductName: 'Corporate', ProductId: '2' },
        { ProductName: 'Components', ProductId: '3' },
        { ProductName: 'Gear cutting technology & automation', ProductId: '3' },
        { ProductName: 'Maritime Cranes', ProductId: '4' },
        { ProductName: 'Material handling technology', ProductId: '5' },
        { ProductName: 'Mining', ProductId: '6' },
        { ProductName: 'Mobile & Crawler Cranes', ProductId: '7' },
        { ProductName: 'Refrigeration & freezing', ProductId: '8' },
        { ProductName: 'Construction Machines', ProductId: '9' },

      ],
      locationData: [
        { LocationName: 'Select Location', ProductId: '0', StateId: '0' },
        { LocationName: 'Bad Schussenried', ProductId: '1', StateId: 'Liebherr-Mischtechnik GmbH, Im Elchgrund 12,88427 Bad Schussenried,Germany' },
         { LocationName: 'Deggendorf', ProductId: '1', StateId: 'Liebherr-Components Deggendorf GmbH, Kreuzäcker 8,94469 Deggendorf,Germany' },
           { LocationName: 'Ettlingen', ProductId: '1', StateId: 'Liebherr-Ettlingen GmbH, Hertzstraße 9-15,76275 Ettlingen,Germany' },
            { LocationName: 'Hamburg', ProductId: '1', StateId: 'Liebherr-MCCtec Vertriebs- und Service GmbH, Buchheisterstraße 12,20457 Hamburg,Germany' },
            { LocationName: 'Kempten/Allgäu', ProductId: '1', StateId: 'Liebherr-Verzahntechnik GmbH, Kaufbeurer Straße 141,87437 Kempten/Allgäu,Germany' },
            { LocationName: 'Lindau', ProductId: '1', StateId: 'Liebherr-Elektronik GmbH, Peter-Dornier-Straße 11,88131 Lindau,Germany' },
            { LocationName: 'Lindenberg//Allgäu', ProductId: '1', StateId: 'Liebherr-Aerospace Lindenberg GmbH, Pfänderstraße 50-52,88161 Lindenberg/Allgäu,Germany' },
            { LocationName: 'Ochsenhausen', ProductId: '1', StateId: 'Liebherr-Hausgeräte Ochsenhausen GmbH, Memminger Straße 77-79,88416 Ochsenhausen,Germany' },
            { LocationName: 'Rostock', ProductId: '1', StateId: 'Liebherr-MCCtec Rostock GmbH, Liebherrstraße 1,18147 Rostock,Germany' }
            
      ],
      selected: null,
      countryfields : { value: 'ProductId', text: 'ProductName' },
      statefields : { value: 'StateId', text: 'LocationName' },
      countryindex : 0,
      stateindex : 0,
      countryenabled : false,
      stateenabled : false,
    }
  },
  methods: {
        onCountryChange: function() {
            var countryObj = document.getElementById('countries').ej2_instances[0];
            var stateObj = document.getElementById('states').ej2_instances[0];
            var cityObj = document.getElementById('cities').ej2_instances[0];
            //Query the data source based on country DropDownList selected value
            stateObj.query = new Query().where('ProductId', 'equal', countryObj.value);
            // enable the state DropDownList
            stateObj.enabled = true;
            //clear the existing selection.
            stateObj.text = null;
            // bind the property changes to state DropDownList
            stateObj.dataBind();
            //clear the existing selection in city DropDownList
            cityObj.text = null;
            //disabe the city DropDownList
            cityObj.enabled = false;
            //bind the property cahnges to City DropDownList
            cityObj.dataBind();
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  #container .padding-top {
    padding-top: 25px;
}
</style>
