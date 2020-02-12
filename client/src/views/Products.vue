<template>
  <div class="about">
    <div class="text-center">
  <img class="img-fluid" alt="Responsive image" src="../assets/product.jpg" width="1250px">
    </div>
    <b-container>
   <div class="mt-4">
  <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('product.title1')}}</b-card-title>
        <b-col>
        <img src="../assets/product1.jpg" img-alt="Card image" img-top  style="height:150px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify">
          {{$t('product.content1')}}
        </b-card-text>
        <router-link to="/product1" style="color:black;">{{$t('spare.view')}}</router-link>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('product.title2')}}</b-card-title>
        <b-col>
          <img src="../assets/product2.jpg" img-alt="Card image" img-bottom style="height:170px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
         {{$t('product.content2')}}
        </b-card-text>
        <router-link to="/product2" style="color:black;">{{$t('spare.view')}}</router-link>
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
<b-card-title>{{$t('product.title3')}}</b-card-title>
        <b-col>
        <img src="../assets/product3.jpg" img-alt="Card image" img-top  style="height:200px;width:210px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
          {{$t('product.content3')}}
        </b-card-text>
        <router-link to="/mining" style="color:black;">{{$t('spare.view')}}</router-link>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title>{{$t('product.title4')}}</b-card-title>
        <b-col>
          <img src="../assets/product4.jpg" img-alt="Card image" img-bottom style="height:190px;width:210px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
          {{$t('product.content4')}}
        </b-card-text>
        <router-link to="/mobile" style="color:black;">{{$t('spare.view')}}</router-link>
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
<b-card-title>{{$t('product.title5')}}</b-card-title>
        <b-col>
        <img src="../assets/product5.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
          {{$t('product.content5')}}
        </b-card-text>
        <router-link to="/material" style="color:black;">{{$t('spare.view')}}</router-link>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('product.title6')}}</b-card-title>
        <b-col>
          <img src="../assets/product6.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
          {{$t('product.content6')}}
        </b-card-text>
        <router-link to="/maritime" style="color:black;">{{$t('spare.view')}}</router-link>
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
<b-card-title>{{$t('product.title7')}}</b-card-title>
        <b-col>
        <img src="../assets/product7.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:justify;">
         {{$t('product.content7')}}
        </b-card-text>
        <router-link to="/aero" style="color:black;">{{$t('spare.view')}}</router-link>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('product.title8')}}</b-card-title>
        <b-col>
          <img src="../assets/product8.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:justify;">
         {{$t('product.content8')}}
        </b-card-text>
        <router-link to="/gear" style="color:black;">{{$t('spare.view')}}</router-link>
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
<b-card-title>{{$t('product.title9')}}</b-card-title>
        <b-col>
        <img src="../assets/product9.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('product.content9')}}
          </b-card-text>
          <router-link to="/combust" style="color:black;">{{$t('spare.view')}}</router-link>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('product.title10')}}</b-card-title>
        <b-col>
          <img src="../assets/product10.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
         {{$t('product.content10')}}
           </b-card-text>
           <router-link to="/hotelgroup" style="color:black;">{{$t('spare.view')}}</router-link>
          </b-col>
      </b-card>
    </b-card-group>
  </div>
    </b-container>
    </div>
</template>