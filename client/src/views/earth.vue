<template>
    <b-container class="bv-example-row">
        <b-card-body
      style="text-align:center;"> 
      <b-card-title>Earth Moving</b-card-title>
        </b-card-body>
  <b-row>
   <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title1')}}
  <img src="../assets/wheeled.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
    <router-link to="/construction" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px;  border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62); text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title2')}}
  <img src="../assets/crawler.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/crawler" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem; border-radius: 35px;border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title3')}}
  <img src="../assets/articulated.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/articulated" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title4')}}
  <img src="../assets/wheel.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
       <router-link to="/wheel" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title5')}}
  <img src="../assets/crawlertractor.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
       <router-link to="/tractor" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title6')}}
  <img src="../assets/crawlerloader.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
     <router-link to="/loader" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title7')}}
  <img src="../assets/telescopic.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
      <router-link to="/telescopic" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title8')}}
  <img src="../assets/pipe.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
      <router-link to="/pipe" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title9')}}
  <img src="../assets/pontoon.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/pontoon" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title10')}}
  <img src="../assets/duty.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
    <router-link to="/duty" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title11')}}
  <img src="../assets/attachment.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
     <router-link to="/attachment" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
        <b-card
    tag="article"
    style="max-width: 20rem;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);text-align:center;max-height: 20rem;"
    class="mb-2"
  >
  {{$t('earth.title12')}}
  <img src="../assets/customer.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
        <router-link to="/customer" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
  </b-row>
</b-container> 
</template>