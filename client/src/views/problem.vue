<template>
  <vue-online-offline @online="isOnline" @offline="isOffline">
    <ArticleList slot="online" key="online" :online="true" />
    <ArticleList slot="offline" key="offline" :online="false" />
    <div slot="online">
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
     <b-carousel-slide
      caption=""
      text=""
      :img-src="require('../assets/Carousel-images/product1.jpg')">
       </b-carousel-slide>
    <b-carousel-slide
      caption=""
      text=""
      :img-src="require('../assets/Carousel-images/product2.jpg')"
    >
    </b-carousel-slide>
    <b-carousel-slide
      caption=""
      text=""
      :img-src="require('../assets/Carousel-images/product3.jpg')"
    ></b-carousel-slide>
  </b-carousel>
  <b-container>
  <h2 style="text-align:center">{{$t('repair.title1')}}</h2>
  <b-card style="border: 3px" >
<b-row>
    <b-col>
        <img src="../assets/d934.jpg" alt="Image" height="220px" width="300px" style="border-radius:11px;padding:0px;"  />
    </b-col>
<b-col>
    <b-card-title style="text-align:left;font-size:40px;padding:50px"> {{$t('repair.title2')}}  </b-card-title>
</b-col>
</b-row>
     <b-table responsive="sm" striped hover :items="rows"></b-table>
 </b-card>
<div class="mt-4">
    <h2 Style="text-align:center">{{$t('repair.title3')}} </h2>
    <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('repair.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/repair1.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content1')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title5')}}</b-card-title>
        <b-col>
          <img src="../assets/repair2.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
          {{$t('repair.content2')}}
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
<b-card-title> {{$t('repair.title6')}}</b-card-title>
        <b-col>
        <img src="../assets/repair3.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content3')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title7')}}</b-card-title>
        <b-col>
          <img src="../assets/repair4.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
        {{$t('repair.content4')}}
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
<b-card-title>{{$t('repair.title8')}}</b-card-title>
        <b-col>
        <img src="../assets/repair5.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content5')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title9')}}</b-card-title>
        <b-col>
          <img src="../assets/repair6.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
        {{$t('repair.content6')}}

           </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
  </div>
  </b-container>
    </div>
    <!-- Only renders when the device is offline -->
    <div slot="false">
      <b-container>
          <div class="mt-4">
    <h1 Style="text-align:center">{{$t('repair.title3')}} </h1>
    <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('repair.title4')}}</b-card-title>
        <b-col>
        <img src="../assets/repair1.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content1')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title5')}}</b-card-title>
        <b-col>
          <img src="../assets/repair2.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
          {{$t('repair.content2')}}
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
<b-card-title> {{$t('repair.title6')}}</b-card-title>
        <b-col>
        <img src="../assets/repair3.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content3')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title7')}}</b-card-title>
        <b-col>
          <img src="../assets/repair4.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
         {{$t('repair.content4')}}

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
<b-card-title> {{$t('repair.title8')}}</b-card-title>
        <b-col>
        <img src="../assets/repair5.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
         {{$t('repair.content5')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('repair.title9')}}</b-card-title>
        <b-col>
          <img src="../assets/repair6.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
        {{$t('repair.content6')}}

           </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
  </div>
      </b-container>
    </div>
  </vue-online-offline>
</template>

<script>
import VueOnlineOffline from 'vue-online-offline'


export default {
  components: { VueOnlineOffline },
  data(){
          return {
              rows : [
  { Model:'Ry85.0', Swept_Volume: 382, Bore: 80, Stroke:76,RPM:3000,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:31,Back_pressure:6.5 },    
    { Model:'Ry85.1', Swept_Volume: 382, Bore: 80, Stroke:76,RPM:3600,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:37,Back_pressure:7.3 }, 
    { Model:'Ry100', Swept_Volume: 431, Bore: 85, Stroke:76,RPM:3000,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:35,Back_pressure:7 }, 
    { Model:'Ry101', Swept_Volume: 431, Bore: 85, Stroke:76,RPM:3600,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:42,Back_pressure:7.8 }, 
    { Model:'Ry120', Swept_Volume: 505, Bore: 87, Stroke:76,RPM:3000,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:41,Back_pressure:7.4 }, 
    { Model:'Ry121', Swept_Volume: 505, Bore: 87, Stroke:76,RPM:3600,Tank_capacity:5,Oil_Capacity:1.3,Air_Quantity:49,Back_pressure:8.4 }
    ]
      }
    },
  methods: {
    isOnline() {
      alert('online!');
      // Show toaster 'Success! you're online!'
    },
    isOffline() {
      alert('offline');
      // Show toaster 'Information: you're now offline but you can still read your local articles.'
    }
  }
}
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 550px;
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
