<template>
  <div class="block block-problem">
    <div class="block-content">
      <h2 class="block-name">What problem do we solve?</h2>
      <div class="problemRow">
        <div class="row-content">
          <img src="../assets/problem/graph1.svg" alt="Graph" class="graph notRev">
          <h3 class="rowText">You will have the opportunity to thoroughly analyze completed transactions</h3>
        </div>
        <div class="line"></div>
      </div>
      <div class="problemRow reverse">
        <div class="row-content revrow">
          <img src="../assets/problem/graph2.svg" alt="Graph" class="graph rev">
          <h3 class="rowText revText">Ability to keep detailed records of your trades</h3>
        </div>
        <div class="line revLine"></div>
      </div>
      <div class="problemRow">
        <div class="row-content">
          <img src="../assets/problem/graph3.svg" alt="Graph" class="graph notRev">
          <h3 class="rowText">You will have the opportunity to thoroughly analyze completed transactions</h3>
        </div>
        <div class="line"></div>
      </div>
      <div class="problemRow reverse">
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

<style scoped>
  .block-problem {
    justify-content: initial;
  }
  #app .block-problem .block-content {
    width: 50%;
  }
  .problemRow {
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    width: 100%;
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
    line-height: 19px;
    color: #FFFFFF;
    text-align: justify;
    /* border-top: solid 2px #fff; */
  }
  .line {
    width: 63%;
    height: 0px;
    border: solid 1px #fff;
    align-self: flex-start;
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
      margin: 0px 2%;
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
