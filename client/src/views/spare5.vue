
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/cooling.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px"> {{$t('spare.title5')}}</b-card-title>
</b-col>
</b-row>
     <b-card-title>{{$t('spare.content')}}</b-card-title>
     <b-table responsive="sm" striped hover :items="rows"></b-table>
 </b-card>
  </b-container>
  </template>
  

  

  <script>
  export default {
      data(){
          return {
              rows : [
  { ReferenceNo: 1070, IdentificationNo: 11698391, Product_models: 'A 914 COMPACT,A 914,A 920', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:1382, IdentificationNo: 11110193, Product_models: 'A 910 Comp,A 912 Comp', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:10018962, IdentificationNo:'-', Product_models: 'R 984 C', Dealers: 'LIEBHERR-Russland OOO',Email:'Sergej.Gorkov@liebherr.com' } ,
    { ReferenceNo:'LBVM004', IdentificationNo: 10472941, Product_models: 'TL 435 10,TL 435 13,TL 441 10,TL 441 13', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1078, IdentificationNo: 11831725, Product_models: 'LH 24 M,LH 26 M', Dealers: 'LIEBHERR-Baumaschinen Vertriebs- und Service GmbH',Email:'Christopher.Langer@liebherr.com' }  
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