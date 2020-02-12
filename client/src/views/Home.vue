<template>
  
  <div class="slideshow-container">

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
      :img-src="require('../assets/Carousel-images/frame1.jpg')">
    <router-link to="/About" tag="button">{{$t('nav.About')}}</router-link></b-carousel-slide>
    <b-carousel-slide
      caption=""
      text=""
      :img-src="require('../assets/Carousel-images/frame2.jpg')"
    ><router-link to="/Products" tag="button">{{$t('nav.Products')}}</router-link>
    </b-carousel-slide>
    <b-carousel-slide
      caption=""
      text=""
      :img-src="require('../assets/Carousel-images/frame3.jpg')"
    ><router-link to="/About" tag="button">{{$t('nav.Spare Parts')}}</router-link></b-carousel-slide>
  </b-carousel>
  <marquee style="color:#338BFF;">Be a Part of Something Bigger!!!</marquee>
  <marquee  style="color:#338BFF;">Quality,design and innovation !!!</marquee>
  <div>
<h3 style="text-align:center;">{{$t('message')}}</h3>
<b-container>
  <div class="mt-4">
    <b-card-group deck>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
">
<b-card-title>{{$t('news1')}}</b-card-title>
        <b-col>
        <img src="../assets/news1.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('content1')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('news2')}}</b-card-title>
        <b-col>
          <img src="../assets/news2.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
         {{$t('content2')}}
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
<b-card-title>{{$t('news3')}}</b-card-title>
        <b-col>
        <img src="../assets/news3.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('content3')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('news4')}}</b-card-title>
        <b-col>
          <img src="../assets/news4.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
         {{$t('content2')}}
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
<b-card-title>{{$t('news5')}}</b-card-title>
        <b-col>
        <img src="../assets/news5.jpg" img-alt="Card image" img-top  style="height:130px;width:150px;overfow:auto;float:left;">
        </b-col>
        <b-col>
        <b-card-text style="text-align:center;">
          {{$t('content1')}}
          </b-card-text>
        </b-col>
        </b-card>
      <b-card  style="text-align:center;border-radius: 35px; border: 2px solid rgba(245, 221, 0, 0.62);
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(245, 221, 0, 0.62);
" >
<b-card-title> {{$t('news6')}}</b-card-title>
        <b-col>
          <img src="../assets/news6.jpg" img-alt="Card image" img-bottom style="height:140px;width:150px;overflow:auto;float:right;">
          </b-col>
          <b-col>
        <b-card-text  style="text-align:center;">
         {{$t('content2')}}
           </b-card-text>
          </b-col>
      </b-card>
    </b-card-group>
  </div>
</b-container>
</div>
</div>

</template>

<script>
export default {
  name: 'home',
    data () {
      return {
         slideIndex : [1,1],
         slideId : ["mySlides1", "mySlides2"]

      }
    },
    mounted: function() {
        
        return this.showSlides(1, 0);
        
      },
      methods: {
        plusSlides(n, no) {
        this.showSlides(this.slideIndex[no] += n, no);
      }, 
       showSlides(n, no) {
        var i;
        var x = document.getElementsByClassName(this.slideId[no]);
        if (n > x.length) {this.slideIndex[no] = 1}    
        if (n < 1) {this.slideIndex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[this.slideIndex[no]-1].style.display = "block";  
      }
      }

      

}
</script>

<style>
  
svg {
        display: block;
      }
      polygon {
        fill: #41b883;
      }
      circle {
        fill: transparent;
        stroke: #35495e;
      }
      input[type="range"] {
        display: block;
        width: 100%;
        margin-bottom: 15px;
      }
  /* Slideshow container */
  .slideshow-container {
    max-width: 98%;
    position: relative;
    margin: auto;
  }


</style>