<template>
  <div class="block block-subscribe">
    <div class="block-content">
      <div class="container-subscribe">
        <div class="topBlock">
          <img src="../assets/subscribe/logo.svg" alt="Logo" class="logo" />
          <button  @click="toForm()" class="closeButton">
            <img :src="cross" alt="Close" class="cross" v-if="answer">
          </button>
        </div>
        <div class="content-subscribe">
          <img
            :src="answer ? mainImage2 : mainImage"
            alt="Image"
            :class="answer ? 'sp-btw mainImage' : 'mainImage'"
          />
          <div class="subscribe-text_block" :style="getHeightBlock">
            <h3 class="subscribe-whiteText">
              {{answer ? 'Thank you for your subscription' : 'Subscribe to our newsletter to always be updated about the progress'}}
            </h3>
            <p class="subscribe-greyText">
              {{answer ? 'When the project is released, we will definitely contact you' : 'Your email is required solely for feedback'}}
            </p> 
            <input
              type="text"
              placeholder="Enter your email"
              class="emailField"
              v-model="email"
              v-if="!answer"
            />
          </div>
        </div>
        <button :class="answer ? 'na-btn sub-btn' : 'sub-btn'" @click="sendEmail()">Subscribe</button>
      </div>
    </div>
    <button class="arrowButton" @click="test()">
      <img src="../assets/common/arrowUp.svg" alt="Arrow" class="arrow" />
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import mainImage from '../assets/subscribe/mainImage.svg';
import mainImage2 from '../assets/subscribe/mainImage2.svg';
import cross from '../assets/subscribe/cross.svg';

export default {
  data() {
    return {
      mainImage,
      mainImage2,
      cross,
      email: '',
      answer: null,
      heightBig: null,
      heightSmall: null
    };
  },
	methods: {
		sendEmail() {
      const email = this.email
      const url = 'http://localhost:3000/user'
			axios.post(url, {
        email,
			}).then(res => {
				this.answer = res
      }).catch(e => {
				console.log(e)
			}) 
    },
    toForm() {
      this.answer = null;
      this.email = '';
    },
  },
  mounted() {
    // console.log('mounted')
    this.heightBig = document.querySelector('.content-subscribe').scrollHeight
    this.heightSmall = document.querySelector('.subscribe-text_block').scrollHeight
    // console.log(this.heightBig)
    // console.log(this.heightSmall)
  },
  computed: {
    getHeightBlock() {
      return `height: ${Math.round(this.heightSmall/this.heightBig*100)}%`
    }
  }
};
</script>

<style scoped>
.container-subscribe {
  background: #1e1e1e;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 90%;
  height: 100%;
  margin-top: 10%;
  min-height: 300px;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
}
.topBlock {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14%;
}
.logo {
  width: 7%;
  height: auto;
}
.cross {
  width: 20px;
  height: auto;
}
.closeButton {
  width: 20px;
  height: auto;
  background: transparent;
  border: none;
  outline: none;
}
.closeButton:active,
.closeButton:focus {
  outline: none;
}
.content-subscribe {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10%;
  height: 60%;
}

.mainImage {
  width: 50%;
  height: auto;
  margin-bottom: 10%;
}
.subscribe-text_block {
  display: flex;
  flex-direction: column;
  height: 65%;
}
.subscribe-whiteText {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 4%;
}
.subscribe-greyText {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #787878;
  margin-bottom: 10%;
}
.emailField {
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  width: 90%;
  padding: 2% 10%;
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 5%;
}
.emailField::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
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
  /* border: none; */
  cursor: pointer;
}
.sp-btw {
  margin-bottom: 25%;
  margin-top: 10%;
}
.na-btn {
  background: #787878;
  pointer-events: none;
}
</style>
