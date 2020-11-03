<template>
  <div id="blockAbout" class="block block-about">
    <div class="block-content" id="block-content-about">
      <h2 class="block-name">About</h2>
      <VueSlickCarousel
        :arrows="arrows"
        :dots="dots"
        :autoplay="autoplay"
        :autoplaySpeed="autoplaySpeed"
        :infinite="infinite"
        :fade="fade">
        <div class="carousel-content">
          <img src="../assets/about/graph.svg" alt="Graph" class="graph carousel-item1_item1">
          <h3 class="carousel-item1_whiteText carousel-item1_item2">Have you ever thought of: “Why have I opened/closed the deal too early/late?”</h3>
          <p class="carousel-item1_greyText carousel-item1_item3">Yes, you did it.</p>
        </div>
        <div class="carousel-content">
          <img src="../assets/about/table.svg" alt="Table" class="table carousel-item1_item1">
          <h3 class="carousel-item1_whiteText carousel-item1_item2">Have you ever searched for some tools which can help you to analyze when and why you have to open and close the deal?</h3>
          <p class="carousel-item1_greyText carousel-item1_item3">And the answer is “yes”</p>
        </div>
        <div class="carousel-content">
          <img src="../assets/about/question.svg" alt="Info image" class="question carousel-item1_item1">
          <h3 class="carousel-item1_whiteText carousel-item1_item2">Deal Book - is a completely unique service, which does not have any similar analogues</h3>
          <p class="carousel-item1_greyText carousel-item1_item3">You will be able to analyze the reason why your result was not 100% achieved</p>
        </div>
        <template #customPaging="page">
          <div class="custom-dot">
            <svg :id="[`backIcon_${page}`]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="#787878" stroke-width="2"/>
            </svg>
            <svg class="front_icon"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle class="time-circle" :style="setDashes" :id="[`frontIcon_${page}`]" cx="8" cy="8" r="7" stroke="#386EE6" stroke-width="2"/>
            </svg>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <button class="arrowButton" @click="test()">
      <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
    </button>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'about',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 7000,
      infinite: true,
      fade: false,
      circumference: Number, 
    }
  },
  methods: {
    calcCircumferenceOfIcon(id) {
      let elem = document.getElementById(id); 
      let radius = elem.r.baseVal.value;
      this.circumference = radius * 2 * Math.PI;
    }
  }, 
  mounted: function() {
    this.$nextTick(function () {
      this.calcCircumferenceOfIcon("frontIcon_0");
    })
  },
  // 'transition: stroke-dashoffset' + ' ' + this.autoplaySpeed + 's ' + ' ' + 'ease' + ';' + 
  computed: {
    setDashes() {
      return 'stroke-dasharray:' + this.circumference + ' ' + this.circumference + '; stroke-dashoffset:' + this.circumference + ';'
    }
  }
};
</script>

<style scoped>
  .carousel-content {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  #block-content-about > .slick-slider {
    width: 100%;
    height: 60%;
    border: none;
    margin-top: 5vw;
  }
  #block-content-about > .slick-slider > .slick-list {
    height: 100%;
  }
  .slick-slider:active,
  .slick-slider:focus {
    border: solid 1px #252525;
  }
  #block-content-about > .slick-slider > .slick-slide {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .graph {
    width: 41%;
    height: auto;
  }
  .carousel-item1_whiteText {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
  }
  .carousel-item1_greyText {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #787878;
  }
  .carousel-item1_item1 {
    margin-bottom: 7%;
  }
  .carousel-item1_item2 {
    margin-bottom: 3%;
  }
  .table {
    width: 70%;
  }
  .question {
    width: 60%;
  }
  .slick-track:focus {
    outline: none;
  }
  .carousel-content:focus {
    outline: none;
  }
  #block-content-about .slick-slider>>>.slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 3%;
  }
  #block-content-about .slick-slider>>>button {
    background: transparent;
    border: none;
    color: transparent;
  }
  #block-content-about .slick-slider>>>button:focus {
    outline: none !important;
  }
  #block-content-about .slick-slider>>>ul.slick-dots{
    font-size: 30px;
    margin-left: 0;
    list-style-type: none;
    color: transparent;
    padding: 0;
  }
  #block-content-about .slick-slider>>>ul > li{
    display: flex;
    justify-content: center;
    position: relative;
    margin-right: 16px;
  }
  #block-content-about .slick-slider>>>ul > li > div.custom-dot{
    width: fit-content;
    height: fit-content;
    display: flex;
  }
  .front_icon{
    position: absolute;
    transform-origin: center;
    transform: rotate(-90deg);
  }
 
  #block-content-about .slick-slider>>>ul .slick-active .custom-dot .front_icon .time-circle{
    stroke-dashoffset: 0 !important;
    transition: stroke-dashoffset 7s linear !important;
    transform: rotate(0);
  }
  #block-content-about .slick-slider>>>ul .slick-active {
    list-style-type: none;
  }
@media (max-width: 769px) {
  #block-content-about .slick-slider>>>.slick-next:before {
    content: "›";
    right: 3%;
    /* top: 35%; */
  }
  #block-content-about .slick-slider>>>.slick-prev:before {
    content: "‹";
    left: 3%;
    /* top: 35%; */
  }
  #block-content-about .slick-slider>>>.slick-next:before,
  #block-content-about .slick-slider>>>.slick-prev:before {
    font-family: slick;
    font-size: 50px;
    line-height: 1;
    opacity: .75;
    color: #fff;
    position: absolute;
    z-index: 10;
  }
  #block-content-about .slick-slider>>>.slick-next {
    right: 3%;
    top: 27%;
  }
  #block-content-about .slick-slider>>>.slick-prev {
    left: 3%;
    top: 27%;
  }
  #block-content-about .slick-slider>>>.slick-next,
  #block-content-about .slick-slider>>>.slick-prev {
    font-family: slick;
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    color: transparent;
    position: absolute;
    z-index: 10;
  }
}
</style>
