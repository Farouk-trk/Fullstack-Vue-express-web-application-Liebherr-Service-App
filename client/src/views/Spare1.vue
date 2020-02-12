
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/air.jpg" alt="Image" height="220px" width="340px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px"> {{$t('spare.title1')}}</b-card-title>
</b-col>
</b-row>
     <b-card-title>{{$t('spare.content')}} </b-card-title>
     <b-table responsive="sm" striped hover :items="rows"></b-table>
 </b-card>
  </b-container>
  </template>
  

  

  <script>
  export default {
      data(){
          return {
              rows : [
  { ReferenceNo: 835, IdentificationNo: 9739619, Product_models: 'A 914, A 920', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:'LBVM005', IdentificationNo: 9739619, Product_models: 'L 524 P,L 524 Z,L 538,L 542 P,L 542 Z,L 550 IND,L 550 T,L 550 Z,L 556,L 576,L 580,L 586', Dealers: 'LIEBHERR-Baumaschinen Vertriebs & Service GmbH (LBV)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1219, IdentificationNo: 5008553, Product_models: 'R 914,R 914 Comp', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' } ,
    { ReferenceNo:701, IdentificationNo: 5007682, Product_models: 'A 900 ZW', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:845, IdentificationNo: 11450227, Product_models: 'A 900 B-Litronic', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' }  
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