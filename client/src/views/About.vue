<template>
<b-container>
  <div>
    <h4 class="title" style="text-align:center;"> {{$t('about.title')}}</h4>
   
    <b-card-group deck>
      <b-row>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('about.title1')}}</b-card-title>
        <b-col>
        <img src="../assets/liebherr.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('about.content1')}}
        </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('about.title2')}}</b-card-title>
        <b-col>
          <img src="../assets/group.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
          {{$t('about.content2')}}
        </b-card-text>
          </b-col>
      </b-card>
      </b-row>
    </b-card-group>
  </div>
  <div class="mt-4">
    <b-card-group deck>
    <b-row>
      <b-card style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);" >
    <b-card-title>{{$t('about.title3')}}</b-card-title>
      <b-col>
     <img src="../Home/history.jpg" img-alt="Card image" img-left class="mb-3" style="height:150px;width:150px;overflow:auto;float:right;">
      </b-col>
      <b-col>
      <b-card-text style="text-align:center;">
        {{$t('about.content3')}}
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
        <b-card-title>{{$t('about.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/liebherr-components-colmar-stage.jpg" img-alt="Card image"  style="height:170px;width:150px;overflow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('about.content4')}} 
        </b-card-text>
        </b-col>
      </b-card>
    <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);">
 <b-card-title>{{$t('about.title5')}}</b-card-title>
        <b-col>
      <img src="../assets/service.jpg" img-alt="Card image"  style="height:170px;width:150px;overflow:auto;float:right;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:left;">
           {{$t('about.content5')}}
        </b-card-text>
        </b-col>
      </b-card>
      </b-row>
    </b-card-group>
  </div>
  <div class="mt-4">
    <b-row>
    <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);" >
  <b-card-title>{{$t('about.title6')}}</b-card-title>
      <b-col>
      <img src="../assets/contact.jpg" img-alt="Card image" img-right style="height:100px;width:100px;overflow:auto;float:left;">
      </b-col>
      <b-col>
      <b-card-text>
        {{$t('about.content6')}}
      </b-card-text>
      </b-col>
    </b-card>
    </b-row>
  </div>
</b-container>
</template>
<style  scoped>
.title {
  margin: 20px;
}</style>