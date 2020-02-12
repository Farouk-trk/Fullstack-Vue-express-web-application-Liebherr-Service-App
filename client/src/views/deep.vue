<template>
  <div>
      <b-card-body>{{$t('deep.title1')}}</b-card-body>
    <b-container>
   <div class="mt-4">
  <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('deep.title2')}}</b-card-title>
        <b-col>
        <img src="../assets/deep1.jpg" img-alt="Card image" img-top  style="height:150px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify">
         {{$t('deep.content1')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title>  {{$t('deep.title3')}}</b-card-title>
        <b-col>
          <img src="../assets/deep2.jpg" img-alt="Card image" img-bottom style="height:170px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
          {{$t('deep.content2')}}
        </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
   </div>
<div class="mt-4">
    <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title> {{$t('deep.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/deep3.jpg" img-alt="Card image" img-top  style="height:200px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
           {{$t('deep.content3')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title>  {{$t('deep.title5')}}</b-card-title>
        <b-col>
          <img src="../assets/deep4.jpg" img-alt="Card image" img-bottom style="height:190px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
        {{$t('deep.content4')}}
        </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
</div>
    </b-container>
    </div>
</template>