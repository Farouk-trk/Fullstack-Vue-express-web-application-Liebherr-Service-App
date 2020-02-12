<template>
<b-container>
  <div>
    <h4 class="title" style="text-align:center;"> {{$t('customer.title1')}}</h4>
   
    <b-card-group deck>
      <b-row>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('customer.title2')}}</b-card-title>
        <b-col>
        <img src="../assets/cs1.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
         {{$t('customer.content1')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('customer.title3')}}</b-card-title>
        <b-col>
          <img src="../assets/cs2.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
         {{$t('customer.content2')}}
        </b-card-text>
          </b-col>
      </b-card>
      </b-row>
    </b-card-group>
  </div>
  <div class="mt-4">
    <b-card-group deck>
      <b-row>
         <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);" >
        <b-card-title>{{$t('customer.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/cs3.jpg" img-alt="Card image"  style="height:170px;width:150px;overflow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
        {{$t('customer.content3')}}
        </b-card-text>
        </b-col>
      </b-card>
    <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);">
 <b-card-title>{{$t('customer.title5')}}</b-card-title>
        <b-col>
      <img src="../assets/cs4.jpg" img-alt="Card image"  style="height:170px;width:150px;overflow:auto;float:right;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:left;">
      {{$t('customer.content4')}}
        </b-card-text>
        </b-col>
      </b-card>
      </b-row>
    </b-card-group>
  </div>
</b-container>
</template>
<style  scoped>
.title {
  margin: 20px;
}</style>