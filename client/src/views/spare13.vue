
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/hydral.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px">{{$t('spare.title13')}}</b-card-title>
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
 { ReferenceNo: 1315, IdentificationNo: 9580388, Product_models: 'A 924', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:1130, IdentificationNo:11683248, Product_models: 'A 918', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:1437, IdentificationNo:9235371, Product_models: '-', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' } ,
    { ReferenceNo:1242, IdentificationNo: 9308022, Product_models: 'A 954 Litronic', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:981, IdentificationNo: 9309293, Product_models: 'A 934 B HD', Dealers: 'LIEBHERR-Hydraulikbagger GmbH, LIEBHERR Gebrauchtmaschinen Zentrum (LGZ)',Email:'lara.konrad@liebherr.com' }
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