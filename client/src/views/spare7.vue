
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/diesel.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px"> {{$t('spare.title7')}}</b-card-title>
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
  { ReferenceNo: 1074, IdentificationNo: 11358440, Product_models: 'In-line engine', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:1660, IdentificationNo: '5700255A', Product_models: 'In-line engine', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1658, IdentificationNo:'5700122A', Product_models: 'In-line engine', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'Sergej.Gorkov@liebherr.com' } ,
    { ReferenceNo:1348, IdentificationNo: 10152308, Product_models: 'In-line engine', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1490, IdentificationNo: 10335546, Product_models: 'A 914 COMPACT,A 914,A 920,A 918 COMPACT,A 918', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'Christopher.Langer@liebherr.com' }  
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