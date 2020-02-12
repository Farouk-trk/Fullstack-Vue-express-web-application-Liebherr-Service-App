
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/grapple.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px">{{$t('spare.title10')}}</b-card-title>
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
  { ReferenceNo: 10416303, IdentificationNo: 9233464, Product_models: 'A 316 Litronic', Dealers: 'Liebherr Mietpartner Landstuhl',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:10426555, IdentificationNo:9581404, Product_models: 'A 900 ZW', Dealers: 'Liebherr Mietpartner Landstuhl',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:10426559, IdentificationNo:'-', Product_models: 'A 900 ZW', Dealers: 'Liebherr Mietpartner Landstuhl',Email:'lara.konrad@liebherr.com' } ,
    { ReferenceNo:10416322, IdentificationNo: '-', Product_models: 'A 316 Litronic', Dealers: 'Liebherr Mietpartner Landstuhl',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo: 721, IdentificationNo: 10015093, Product_models: '101-1', Dealers: 'Liebherr Mietpartner Landstuhl',Email:'lara.konrad@liebherr.com' }  
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