<template>
    <b-container class="bv-example-row">
      <b-card-body
      style="text-align:center;"> 
      <b-card-title>{{ $t('nav.Spare Parts') }}</b-card-title>
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
  {{$t('spare.title1')}}
  <img src="../assets/refridgerator.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
    <router-link to="/Spare1" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title2')}}
  <img src="../assets/axle.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare2" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title3')}}
  <img src="../assets/cab.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare3" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title4')}}
  <img src="../assets/chain.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
       <router-link to="/spare4" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title5')}}
  <img src="../assets/cooling.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
       <router-link to="/spare5" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title6')}}
  <img src="../assets/covering.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
     <router-link to="/spare6" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title7')}}
  <img src="../assets/diesel.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
      <router-link to="/spare7" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title8')}}
  <img src="../assets/drive.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
      <router-link to="/spare8" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title9')}}
  <img src="../assets/elect.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare9" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title10')}}
  <img src="../assets/grapple.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
    <router-link to="/spare10" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title11')}}
  <img src="../assets/ground.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
     <router-link to="/spare11" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title12')}}
  <img src="../assets/heating.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
        <router-link to="/spare12" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title13')}}
  <img src="../assets/hydral.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
         <router-link to="/spare13" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title14')}}
  <img src="../assets/mounting.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
     <router-link to="/spare14" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title15')}}
  <img src="../assets/shell1.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
      <router-link to="/spare15" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title16')}}
  <img src="../assets/shell2.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
  <router-link to="/spare16" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title17')}}
  <img src="../assets/spar.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
         <router-link to="/spare17" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title18')}}
  <img src="../assets/struct.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
       <router-link to="/spare18" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title19')}}
  <img src="../assets/swivel.jpg" alt="Image" height="200px" width="250px"  style="border-radius:11px;" />
        <router-link to="/spare19" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title20')}}
  <img src="../assets/timber.jpg" alt="Image" height="200px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare20" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title21')}}
  <img src="../assets/travel.jpg" alt="Image" height="190px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare21" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title22')}}
  <img src="../assets/travel1.jpg" alt="Image" height="190px" width="250px" style="border-radius:11px;"  />
        <router-link to="/spare22" style="color:black;">{{$t('spare.view')}}</router-link>
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
  {{$t('spare.title23')}}
  <img src="../assets/tyre.jpg" alt="Image" height="200px" width="270px" style="border-radius:11px;"  />
       <router-link to="/spare23" style="color:black;">{{$t('spare.view')}}</router-link>
  </b-card>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
</b-container> 
</template>