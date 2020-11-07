<template>
  <div class="block block-problem">
    <div class="block-content">
      <h2 class="block-name">What problem do we solve?</h2>
      <div id="problemRow1" :class="[blocksData[0].isActive ? 'active-block' : 'not-active-block' ,'problemRow no-reverse']">
        <div class="row-content">
          <img src="../assets/problem/graph1.svg" alt="Graph" class="graph notRev">
          <h3 class="rowText">You will have the opportunity to thoroughly analyze completed transactions</h3>
        </div>
        <div class="line"></div>
      </div>
      <div id="problemRow2" :class="[blocksData[1].isActive ? 'active-block' : 'not-active-block' ,'problemRow reverse']">
        <div class="row-content revrow">
          <img src="../assets/problem/graph2.svg" alt="Graph" class="graph rev">
          <h3 class="rowText revText">Ability to keep detailed records of your trades</h3>
        </div>
        <div class="line revLine"></div>
      </div>
      <div id="problemRow3" :class="[blocksData[2].isActive ? 'active-block' : 'not-active-block' ,'problemRow no-reverse']">
        <div class="row-content">
          <img src="../assets/problem/graph3.svg" alt="Graph" class="graph notRev">
          <h3 class="rowText">You will have the opportunity to thoroughly analyze completed transactions</h3>
        </div>
        <div class="line"></div>
      </div>
      <div id="problemRow4" :class="[blocksData[3].isActive ? 'active-block' : 'not-active-block' ,'problemRow reverse']">
        <div class="row-content revrow">
          <img src="../assets/problem/graph4.svg" alt="Graph" class="graph rev">
          <h3 class="rowText revText">Ability to keep detailed records of your trades</h3>
        </div>
        <!-- <div class="line revLine"></div> -->
      </div>
    </div>
    <button class="arrowButton" @click="test()">
      <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
    </button>
  </div>
</template>
<script>
  export default {
    name: 'Problem',
    data() {
      return {
        blocksData: [
          {
            id: "problemRow1",
            activatedOnPrc: Number,
            isActive: Boolean
          },
          {
            id: "problemRow2",
            activatedOnPrc: Number,
            isActive: Boolean
          },
          {
            id: "problemRow3",
            activatedOnPrc: Number,
            isActive: Boolean
          },
          {
            id: "problemRow4",
            activatedOnPrc: Number,
            isActive: Boolean
          }
        ]
      }
    },
    methods: {
      handleScroll() {
        for (let i = 0; i < this.blocksData.length; i++) {
          let data = this.blocksData[i];
          let elem = document.getElementById(data.id); 
          let goToElem = elem.getBoundingClientRect().top + elem.getBoundingClientRect().height;
          if(goToElem < window.innerHeight) this.blocksData[i].isActive = true; 
          if(goToElem > window.innerHeight) this.blocksData[i].isActive = false; 
        }
      },
    }
  }
</script>

<style scoped>
  .block-problem {
    justify-content: initial;
  }

  #app .block-problem .block-content {
    width: 50%;
  }

  .problemRow {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    width: 100%;
    transition: all 1s ease-out;
  }
  .not-active-block.no-reverse{
    right: auto;
    left: -200%;
  }
  .not-active-block.reverse{
    left: auto;
    right: -200%;
  }
  .active-block.no-reverse{
    right: auto;
    left: 0;
  }
  .active-block.reverse{
    left: auto;
    right: 0;
  }

  .row-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 30px;
  }

  .rowText {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: left;
    /* border-top: solid 2px #fff; */
  }

  .line {
    width: 63%;
    height: 0px;
    border: solid 1px #fff;
    border-radius: 30px;
    align-self: flex-start;
    position: absolute;
    top: auto;
    bottom: 0;
    opacity: 0;
    transition: all 1s ease-out;
  }

  
  .problemRow.active-block .line{
    opacity: 1;
  }
  .problemRow.no-reverse.not-active-block .line {
    right: auto;
    left: -100%;
  }
  .problemRow.no-reverse.active-block .line {
    left: 0;
  }

  .problemRow.reverse.not-active-block .line {
    left: auto;
    right: -100%;
  }
  .problemRow.reverse.active-block .line {
    right: 0;
  }

  .graph {
    width: 145px;
    height: auto;
    margin-right: 55px;
  }

  .revLine {
    align-self: flex-end;
  }

  .revrow {
    flex-direction: row-reverse;
  }

  .rev {
    margin-left: 55px;
    margin-right: 0px;
  }

  .revText {
    /* */
  }

  @media (max-width: 769px) {
    #app .block-problem .block-content {
      width: 100%;
    }

    .problemRow {
      width: 100%;
    }

    .line {
      width: 100%;
      height: 0px;
      border: solid 1px #000;
      margin-top: 5px;
    }

    .row-content {
      margin: 0px 2% 10px 2%;
    }

    .rowText {
      font-size: 13px;
    }

    .graph {
      margin-right: 15px;
    }

    .rev {
      margin-left: 15px;
      margin-right: 0px;
    }
  }
</style>