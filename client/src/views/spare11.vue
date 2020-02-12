
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/ground.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px">{{$t('spare.title11')}}</b-card-title>
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
  { ReferenceNo: 'SUPER V TOOTH V71 ADHL', IdentificationNo: 10359181, Dealers: 'Liebherr-Mining Equipment Colmar SAS',Email:'lara.konrad@liebherr.com' },    
    { ReferenceNo:'TOPLOK SHROUD 160x465-1 TBC', IdentificationNo:7371794, Dealers: 'Liebherr-Mining Equipment Colmar SAS',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo:'SUPER V WELD ON NOSE WN-V 81', IdentificationNo:5612079, Dealers: 'Liebherr-Mining Equipment Colmar SAS',Email:'lara.konrad@liebherr.com' } ,
    { ReferenceNo:'TOPLOK SHROUD100X430-1 TBC', IdentificationNo: 10014096, Dealers: 'Liebherr-Mining Equipment Colmar SAS',Email:'lara.konrad@liebherr.com' },
    { ReferenceNo: 'TOOTH 86 SD', IdentificationNo: 5608187, Dealers: 'Liebherr-Mining Equipment Colmar SAS',Email:'lara.konrad@liebherr.com' }  
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