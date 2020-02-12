
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/covering.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px"> {{$t('spare.title6')}}</b-card-title>
</b-col>
</b-row>
     <b-card-title> {{$t('spare.content')}}</b-card-title>
     <b-table responsive="sm" striped hover :items="rows"></b-table>
 </b-card>
  </b-container>
  </template>
  

  

  <script>
  export default {
      data(){
          return {
              rows : [
  { ReferenceNo: 920, IdentificationNo: 9850585, Product_models: 'R 946 LC', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:10436698, IdentificationNo: 9908217, Product_models: 'A 914,A 924', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1176, IdentificationNo:94081876, Product_models: 'A 914,A 924', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'Sergej.Gorkov@liebherr.com' } ,
    { ReferenceNo:1388, IdentificationNo: 94062353, Product_models: 'A 912 Comp', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:348, IdentificationNo: 94063703, Product_models: 'A 934 C HD IND Litronic', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'Christopher.Langer@liebherr.com' }  
    ]
      }
      }
  };
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 950px;
  border-collapse: collapse;
  border: 3px;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  padding: 10px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px;
}

    
</style>