<template>
  <div>
      <b-card-body>{{$t('tower.title1')}}</b-card-body>
    <b-container>
   <div class="mt-4">
  <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('tower.title2')}}</b-card-title>
        <b-col>
        <img src="../assets/crane1.jpg" img-alt="Card image" img-top  style="height:150px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify">
         {{$t('tower.content1')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('tower.title3')}}</b-card-title>
        <b-col>
          <img src="../assets/crane2.jpg" img-alt="Card image" img-bottom style="height:170px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
         {{$t('tower.content2')}}
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
<b-card-title>{{$t('tower.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/crane3.jpg" img-alt="Card image" img-top  style="height:200px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
         {{$t('tower.content3')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('tower.title5')}}</b-card-title>
        <b-col>
          <img src="../assets/crane4.jpg" img-alt="Card image" img-bottom style="height:190px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
         {{$t('tower.content4')}}
        </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
</div>
    </b-container>
    </div>
</template>