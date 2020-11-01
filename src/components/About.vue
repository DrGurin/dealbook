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
    }
  },
  methods: {
    test() {
      // console.log('ochko arangutanga')
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
  #block-content-about .slick-slider>>>ul {
    font-size: 30px;
    margin-left: 3%;
    list-style-type: circle;
    color: #787878;
  }
  #block-content-about .slick-slider>>>ul .slick-active {
    color: #386EE6;
    list-style-type: disc;
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
