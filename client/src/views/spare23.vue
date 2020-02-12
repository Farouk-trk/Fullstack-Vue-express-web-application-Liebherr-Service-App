
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/tyre.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px">{{$t('spare.title23')}}</b-card-title>
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
 { ReferenceNo: 1006, Product_models: 'A 918', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:10421975, Product_models: 'LH 50 M', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1145, Product_models: 'A 924', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:10412206, Product_models: 'A 308,A 310,A 311 Litronic,A 309 Litronic', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1394,  Product_models: 'A 904 Litronic', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' }
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