<template>
  <div class="block block-donate">
    <div class="block-content">
			<div class="container-donate" id="containerDonate">
				<h2 class="block-name">Donate</h2>
        <button  @click="close()" class="closeButton" v-if="step2">
          <img :src="cross" alt="Close" class="cross">
        </button>
        <div class="changesBlock" v-if="step1" id="firstBlock">
          <img src="../assets/donate/donate.svg" alt="Donate icon" class="logo" />
          <p class="underDonate">Donations are completely free-will and are non-obligatory, but they will help us to develop further and faster.</p>
        </div>
        <div class="changesBlock" v-if="step2" :style="`height: ${heightForSecondBlock}px`">
          <p class="underDonate underDonateStep2">Select a method and indicate the amount of donation</p>
          <div :class="active ? 'customInput activeCustomInput' : 'customInput'">

            <div :class="active ? 'active-border-bottom list-first-block' : 'list-first-block'">
              <div :class="active ? 'leftside active-border-right' : 'leftside'">
                <p :class="active ? 'activeInputText' : 'leftsideText'" id="currencyChange">{{donateTextMethods || 'Donat method' }}</p>

              </div>
              <div :class="active ? 'rightSide active-border-left' : 'rightSide'" @click="activateChanges()">
                <img :src="active ? activeArrow : arrow" alt="Arrow icon" class="custom-arrow">
              </div>
            </div>

            <div class="variantsBlcok" v-if="active">
              <div class="variant variant1" @click="methodDonate('BTC')">
                <img src="../assets/donate/btc.svg" alt="Icon" class="currencyIcon">
                <p class="currencyName">BTC</p>
              </div>
              <div class="variant variant2" @click="methodDonate('ETH')">
                <img src="../assets/donate/btc.svg" alt="Icon" class="currencyIcon">
                <p class="currencyName">ETH</p>
              </div>
              <div class="variant" @click="methodDonate('USDT')">
                <img src="../assets/donate/btc.svg" alt="Icon" class="currencyIcon">
                <p class="currencyName">USDT</p>
              </div>
            </div>
            <button class="copy-btn" @click="copyText()" v-if="copyBtn">Copy</button>
          </div>
        </div>
				<button class="sub-btn" @click="sendDonate()">Donate</button>
			</div>
    </div>
  </div>
</template>

<script>
import cross from '../assets/donate/cross.svg';
import arrow from '../assets/donate/arrow.svg';
import activeArrow from '../assets/donate/activeArrow.svg';

export default {
	data() {
		return {
      step1: true,
      step2: false,
      active: false,
      cross,
      arrow,
      activeArrow,
      donateTextMethods: null,
      copyBtn: false,
      heightForSecondBlock: null
		};
	},
	methods: {
		sendDonate() {
			this.step1 = !this.step1
      this.step2 = !this.step2
      // this.active = !this.active
      this.copyBtn = false
      this.donateTextMethods = null;
    },
    close() {
      this.step1 = true;
      this.step2 = false;
      this.active = false;
      this.copyBtn = false;
      this.donateTextMethods = null;
    },
    activateChanges() {
      this.active = !this.active
      this.copyBtn = false
      if (this.active) {
        this.donateTextMethods = null
      }
    },
    methodDonate(param) {
      if(param == 'BTC') {
        console.log('BTC')
        this.donateTextMethods = 'tut kakayz-to huinya'
        this.activateChanges()
        this.copyBtn = true
      } else if(param == 'ETH') {
        console.log('ETH')
        this.donateTextMethods = 'tut kakayz-to huinya'
        this.activateChanges()
        this.copyBtn = true
      } else {
        console.log('USDT')
        this.donateTextMethods = 'tut kakayz-to huinya'
        this.activateChanges()
        this.copyBtn = true
      }
    },
    copyText() {
      let mytext = document.getElementById('currencyChange').innerHTML
      navigator.clipboard.writeText(mytext)
        .then(() => {
          // console.log('ok')
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    }
  },
  mounted() {
    if (window.innerWidth > 769) {
      let a = document.getElementById('containerDonate')
      this.heightForSecondBlock = a.getBoundingClientRect().height * 0.6
    } else {
      let a = document.getElementById('containerDonate')
      this.heightForSecondBlock = a.getBoundingClientRect().height * 0.6
    }
    // let b = document.getElementById('firstBlock')
    // console.log(a.getBoundingClientRect().height)
    // console.log(b.getBoundingClientRect().height)
    // console.log(window.innerWidth)
  }
};
</script>

<style scoped>
.sub-btn {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 2% 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #0a0a0a;
  margin-bottom: 5%;
}
.sub-btn:focus,
.sub-btn:active {
  outline: none;
  cursor: pointer;
}
.container-donate {
  background: #1e1e1e;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 90%;
  height: 100%;
  margin-top: 10%;
  margin-bottom: 10%;
  min-height: 300px;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.logo {
  width: 35%;
  height: auto;
  margin-bottom: 10%;
}
.changesBlock {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 70%;
  min-height: 250px;
  margin-top: 10%;
  margin-bottom: 10%;
}
.underDonate {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #787878;
}
.underDonateStep2 {
  margin-bottom: 10%;
}
.closeButton {
  width: 20px;
  height: auto;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 20px;
  right: 30px;
}
.closeButton:active,
.closeButton:focus {
  outline: none;
}
.cross {
  width: 20px;
  height: auto;
}

.customInput {
  width: 85%;
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  position: relative;
}
.activeCustomInput {
  border: solid 1px  #386EE6;
  border-radius: 5px;
  border-collapse: collapse;
}

.list-first-block {
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #787878;
  border-radius: 5px;
  padding: 2px;
  border-collapse: collapse;
  position: relative;
}
.leftside {
  width: 88%;
  text-align: left;
  align-self: center;
  padding-left: 5%;
}
.leftsideText {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  color: #787878;
  /* transition: position .3s; */
}
.activeInputText {
  position: absolute;
  top: -21%;
  left: 20px;
  color: #386EE6;
  background: #1e1e1e;
  width: 110;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 13px;
  /* transition: position .3s; */
}
.rightSide {
  width: 12%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-left: 1px solid #787878;
}
.custom-arrow {
  width: 45%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.variantsBlcok {
  display: flex;
  flex-direction: column;
  /* border: 1px solid #787878; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.variant {
  display: flex;
  border-collapse: collapse;
  align-content: center;
  align-items: center;
  height: 40px;
  padding-left: 4%;
  cursor: pointer;
}
.variant1 {
  border-bottom: 1px solid #787878;
}
.variant2 {
  border-bottom: 1px solid #787878;
}



.active-border {
  border: 1px solid #386EE6;
}
.active-border-right {
  border-right: 1px solid #386EE6;
}
.active-border-bottom {
  border: none;
  border-bottom: 1px solid #386EE6;
}
.active-border-left {
  border-left: 1px solid #386EE6;
}

.currencyIcon {
  width: 15px;
  height: auto;
  margin-right: 4%;
}
.currencyName {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #787878;
}
.copy-btn {
  position: absolute;
  right: 0px;
  top: 125%;
  width: 18%;
  background: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #787878;
  border: 1px solid #787878;
  box-sizing: border-box;
  border-radius: 5px;
}
.copy-btn:active,
.copy-btn:focus {
  outline: none;
}
@media (max-width: 769px) {
  /* .logo {
    width: 50%;
  } */
  .customInput {
    width: 95%;
  }
  .copy-btn {
    width: 30%;
    padding: 5px;
  }
  .container-donate {
    padding: 5% 5%;
  }
  .list-first-block {
    height: 60px;
  }
}

</style>