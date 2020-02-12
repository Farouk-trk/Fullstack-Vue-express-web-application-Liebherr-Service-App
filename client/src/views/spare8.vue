
<template>
<b-container>
    <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/drive.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:45px;padding:50px"> {{$t('spare.title8')}}</b-card-title>
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
  { ReferenceNo: 7030090, IdentificationNo: 7030090, Product_models: 'A 904 C-Litronic', Dealers: 'LIEBHERR-EMtec Italia S.p.A',Email:'dimitri.kravchenko@liebherr.com' },    
    { ReferenceNo:944399703, IdentificationNo:944399703, Product_models: 'PR 742,PR 742 B,PR 742 BL,PR 742 BM,PR 742 M', Dealers: 'LIEBHERR-Werk Telfs GmbH',Email:'Daniel.Schuchter@liebherr.com' },
    { ReferenceNo:944399203, IdentificationNo:944399203, Product_models: 'PR 742,PR 742 B,PR 742 BL,PR 742 BM,PR 742 M', Dealers: 'LIEBHERR-Werk Telfs GmbH',Email:'Daniel.Schuchter@liebherr.com' } ,
    { ReferenceNo:9391227, IdentificationNo: 9391227, Product_models: 'R944CTU', Dealers: 'LIEBHERR-Werk Telfs GmbH',Email:'Daniel.Schuchter@liebherr.com' },
    { ReferenceNo: '001', IdentificationNo: 5605634, Product_models: 'R 912', Dealers: 'EM-SERV COMPANY',Email:'kirill@emserv.ee' }  
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