<template>
  <div class="text-center">
    <img class="img-fluid" alt="Responsive image" src="../assets/product15.jpg" width="1150px"  >
    <b-container>
      <b-card-body>
      <b-card-title style="font-size:30px">{{$t('product2.title1')}}</b-card-title>
      </b-card-body>
       <div class="mt-4">
    <b-card
    style="border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;">
        <b-row>
            <b-col>
  <b-card
    class="mb-2"
    style="border:3px;"
  >
 <b-card-title> {{$t('product2.title2')}}</b-card-title>
  <img src="../assets/earth.jpg"
    img-alt="Image"
    img-top
    tag="article"
    height="150px" width="180px">

    <router-link to="/earth" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
            </b-col>
            <b-col>
  <b-card
    class="mb-2"
    style="border:3px;"
  >
  <b-card-title> {{$t('product2.title3')}}</b-card-title>
  <img src="../assets/deep.jpg"
    img-alt="Image"
    img-top
    tag="article"
    height="150px" width="180px">

    <router-link to="/deep" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
            </b-col>
            <b-col>
  <b-card
    class="mb-2"
    style="border:3px;"
  >
  <b-card-title> {{$t('product2.title4')}}</b-card-title>
  <img src="../assets/tower.jpg"
    img-alt="Image"
    img-top
    tag="article"
    height="150px" width="180px">

   <router-link to="/tower" style="color:black;text-align:right">{{$t('spare.view')}}</router-link>
  </b-card>
            </b-col>
            <b-col>
  <b-card
    class="mb-2"
    style="border:3px;"
  >
  <b-card-title> {{$t('product2.title5')}}</b-card-title>
  <img src="../assets/concrete.jpg"
    img-alt="Image"
    img-top
    tag="article"
    height="150px" width="190px">

    <router-link to="/concrete" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
            </b-col>
        </b-row>
    </b-card>
       </div>
</b-container>
  </div>
</template>