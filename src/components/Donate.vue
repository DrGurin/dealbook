<template>
  <div class="block block-donate">
    <div class="block-content">
			<div class="container-donate" id="containerDonate">
				<h2 class="block-name" id="donate-block-name" data-i18n="[html]content.body">{{$t('donate_title')}}</h2>
        <button  @click="close()" class="closeButton" v-if="step2">
          <img :src="cross" alt="Close" class="cross">
        </button>



        <div class="changesBlock" v-if="step0" id="firstBlock">
          <img src="../assets/donate/donate.svg" alt="Donate icon" class="logo" />
          <p class="underDonate">{{$t('donate_description')}}</p>
        </div>

        <div v-if="step1" class="changesBlock" :style="`height: ${heightForSecondBlock}px`">
          <p class="underDonate underDonateStep2">{{$t('donate_select')}}</p>

          <div :class="topInput ? 'input-group w-t-input' : 'input-group'" v-if="!anonimus">
            <input type="text" v-model="topInput" :class="failed ? 'failed a-c-input' : 'a-c-input'" placeholder="" id="emailInput">
            <label for="emailInput">{{$t('donate_post')}}</label>
          </div>

          <div :class="bottomInput ? 'input-group w-t-input' : 'input-group'" v-if="!anonimus">
            <input type="text" v-model="bottomInput" class="a-c-input" placeholder="" id="walletInput">
            <label for="walletInput">{{$t('donate_accnumber')}}</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" class="checkbox_anonimus" v-model="anonimus" id="checkbox_anonimus_id">
            <label for="checkbox_anonimus_id" class="text_anonimus" id="text_anonimus">{{$t('donate_anonimus')}}</label>
          </div>
        </div>

        <div class="changesBlock" v-if="step2" :style="`height: ${heightForSecondBlock}px`">
          <p class="underDonate underDonateStep2">{{$t('donate_select')}}</p>
          <img src="../assets/donate/qr.svg" alt="QR code" class="qr" v-if="copyBtn">
          <div :class="active ? 'customInput activeCustomInput' : 'customInput'">

            <div :class="active ? 'active-border-bottom list-first-block' : 'list-first-block'">
              <div :class="active ? 'leftside active-border-right' : 'leftside'" id="leftside">
                <p :class="active ? 'activeInputText' : 'leftsideText'" id="currencyChange">{{donateTextMethods || $t('donate_method') }}</p>
                <p v-if="donateTextMethods && !mywidthbool" class="leftsideText">...</p>
              </div>
              <div :class="active ? 'rightSide active-border-left' : 'rightSide'" @click="activateChanges()">
                <img :src="active ? activeArrow : arrow" alt="Arrow icon" class="custom-arrow">
              </div>
            </div>

            <div class="variantsBlcok" v-if="active">
              <div class="variant variant2" @click="methodDonate('ETH')">
                <img src="../assets/donate/ephir.svg" alt="Icon" class="currencyIcon" style="margin-left: 3px;">
                <p class="currencyName">ETH</p>
              </div>
              <div class="variant" @click="methodDonate('USDT')">
                <img src="../assets/donate/usdt.svg" alt="Icon" class="currencyIcon usdtIcon">
                <p class="currencyName">USDT</p>
              </div>
            </div>
            <div class="copy-block" v-if="copyBtn">
              <button class="copy-btn" @click="copyText()">{{$t('donate_copy')}}</button>
              <p v-if="copied" class="copied-text">{{$t('donate_copied')}}</p>
              <img v-if="copied" src="../assets/donate/copied.svg" alt="Icon" class="copiedIcon">
            </div>
          </div>
        </div>
				<button v-if="step0 || step1" class="sub-btn" @click="sendDonate()">{{$t('donate_button')}}</button>
			</div>
      <button class="arrowButton" v-scroll-to="'#home'">
        <img src="../assets/common/arrowUp.svg" alt="Arrow" class="arrow" />
      </button>
    </div>
  </div>
</template>

<script>
import cross from '../assets/donate/cross.svg';
import arrow from '../assets/donate/arrow.svg';
import activeArrow from '../assets/donate/activeArrow.svg';
import eth from '../assets/donate/ETH.png';
import usd from '../assets/donate/USD.png';
import ephir from '../assets/donate/ephir.svg';
import axios from 'axios';

export default {
	data() {
		return {
      step0: true,
      step1: false,
      step2: false,
      active: false,
      cross,
      arrow,
      ephir,
      qr: null,
      activeArrow,
      donateTextMethods: null,
      copyBtn: false,
      heightForSecondBlock: null,
      mywidthbool: null,
      copied: false,
      topInput: '',
      bottomInput: '',
      anonimus: false,
      failed: false
		};
	},
	methods: {
    validateEmail(email) {
      var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
		sendDonate() {
      if(this.step0 == true) {
        this.step0 = !this.step0
        this.step1 = !this.step1
        this.copyBtn = false
        this.donateTextMethods = null;
        this.copied = false
      } else {
        if (this.validateEmail(this.topInput)) {
          this.failed = false
          this.sendData()
          this.step1 = !this.step1
          this.step2 = !this.step2
          this.copyBtn = false
          this.donateTextMethods = null;
          this.copied = false
        } else {
          this.failed = true
        }
      }
    },
    async sendData() {
      const data = {"donateEmail":  this.topInput, "donateWallet": this.bottomInput};
      const url = '/donate';
      await axios.post(url, data).then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e)
        }) 
    },
    close() {
      this.step0 = true;
      this.step1 = false;
      this.step2 = false;
      this.copied = false
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
      let mywidth = document.getElementById('leftside').getBoundingClientRect().width 
      mywidth < 385 ? this.mywidthbool = false : this.mywidthbool = true
      if(param == 'ETH') {
        this.donateTextMethods = '0x54F3392498ff4118bA80ebA1D51dc37661AB97A9'
        this.activateChanges()
        this.copyBtn = true
        this.qr = eth
        this.copied = false
      } else {
        this.donateTextMethods = '0x54F3392498ff4118bA80ebA1D51dc37661AB97A9'
        this.activateChanges()
        this.copyBtn = true
        this.qr = usd
        this.copied = false
      }
    },
    copyText() {
      let mytext = document.getElementById('currencyChange').innerHTML
      navigator.clipboard.writeText(mytext)
        .then(() => {
          this.copied = true
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
    this.topInput = localStorage.getItem('donate_email') || ''
  },
  beforeUpdate() {
    localStorage.setItem('donate_email', this.topInput)
  }
};
</script>

<style scoped>
#app .arrowButton{
  margin-top: 0;
}
#app #donate-block-name {
  margin-top: 2vw;
}
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
  margin-top: 7%;
  margin-bottom: 7%;
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
  margin-bottom: 5%;
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
  margin-bottom: 10%;
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
  padding-right: 5%;
  display: flex;
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
.usdtIcon {
  width: 20px;
}
.currencyName {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #787878;
}
.copy-block {
  position: absolute;
  right: 0px;
  top: 125%;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.copiedIcon {
  width: 15px;
  height: auto;
}
.copied-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #787878;
  margin-right: 10px;
}
.copy-btn {
  position: absolute;
  right: 0px;
  top: 7px;
  width: auto;
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
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.copy-btn:active,
.copy-btn:focus {
  outline: none;
}
.copy-btn:active {
  transform: translateY(1px);
  opacity: 0.5;
}

.a-c-input {
  width: 100%;
  height: 40px;
  border: 1px solid #787878;
  border-radius: 5px;
  padding: 2px 10px;
  border-collapse: collapse;
  position: relative;
  background: transparent;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #787878;
}
.a-c-input:focus,
.a-c-input:active {
  outline: none;
  border: solid 1px #386EE6;
}
.w-t-input .a-c-input {
  outline: none;
  border: solid 1px #386EE6;
}
.checkbox {
  width: 85%;
  height: 40px;
  display: flex;
  align-content: center;
  align-items: center;
}
.checkbox_anonimus {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox label::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  background: transparent;
  border: solid 1px #C4C4C4;
  margin-right: 15px;
  border-radius: 5px;
} 
.text_anonimus {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #787878;
  margin-right: 15px;
  display: flex;
  align-items: center;
}
.checkbox input:focus+label, 
.checkbox input:active+label, 
.checkbox input:checked+label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #787878;
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.checkbox input[type="checkbox"]:checked + label::before {
  content: "✓";
}
.qr {
  margin-bottom: 5%;
  width: 45%;
  height: auto;
  max-width: 185px;
}

.input-group {
  width: 85%;
  height: 40px;
  margin-bottom: 3%;
  position: relative;
}

.input-group label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #787878;
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 11px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input-group input:focus+label, 
input:active+label {
  left: 20px;
  top: -9px;
  font-size: 11px;
  background: #1E1E1E;
  color: #386EE6;
  display: block;
  text-align: center;
  padding: 0px 4px;
  outline: none;
}
.w-t-input label {
  left: 20px;
  top: -9px;
  font-size: 11px;
  background: #1E1E1E;
  color: #386EE6;
  display: block;
  text-align: center;
  padding: 0px 4px;
}

.failed.a-c-input {
  border: solid 1px red;
}
.failed+label {
  color: red;
}

.input-group .failed:focus+label, 
.input-group .failed:active+label {
  color: red;
}

@media (max-width: 769px) {
  .customInput {
    width: 95%;
  }
  .container-donate {
    padding: 5% 5%;
  }
  .list-first-block {
    height: 50px;
  }
  .activeInputText {
    top: -17%;
  }
  .qr {
    display: none;
  }
}

#currencyChange {
  overflow: hidden;
}

</style>