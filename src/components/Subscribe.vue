<template>
  <div class="block block-subscribe">
    <div class="block-content">
      <div class="container-subscribe">
        <div class="topBlock">
          <img src="../assets/subscribe/logo.svg" alt="Logo" class="logo" />
        </div>
        <div class="content-subscribe">

          <img
            :src="answer ? mainImage2 : mainImage"
            alt="Image"
            :class="answer ? 'sp-btw mainImage' : 'mainImage'"
          />

          <div class="subscribe-text_block" :style="getHeightBlock">
            <h3 class="subscribe-whiteText">
              {{answer ? $t('subscribe_thanks') : $t('subscribe_letSubscribe')}}
            </h3>
            <p class="subscribe-greyText">
              {{answer ? $t('subscribe_answer') : $t('subscribe_emailForFeedback')}}
            </p> 
            <input
              type="text"
              :placeholder="$t('subscribe_enterEmail')"
              :class="failed ? 'emailField failed' : 'emailField'"
              v-model="email"
              v-if="!answer"
              name="email"
            />
            <div v-if="failed && !tooManyEmails" class="error-m-block">
              <img src="../assets/subscribe/er-mail.svg" alt="Icon" class="er-mail">
              <p class="errorMessage">
                {{repeatEmail ? $t('subscribe_repeatEmail') : $t('subscribe_incorrectEmail')}}</p>
            </div>

            <div v-if="failed && tooManyEmails" class="error-m-block">
              <img src="../assets/subscribe/er-mail.svg" alt="Icon" class="er-mail">
              <p class="errorMessage">
                {{
                  tooManyEmails ? $t('subscribe_tooManyEmails') : $t('subscribe_incorrectEmail')
                }}</p>
            </div>
          </div>

        </div>
        <button :class="answer ? 'na-btn sub-btn' : 'sub-btn'" @click="sendEmail()">{{$t('subscribe_button')}}</button>
      </div>
    </div>
    <button class="arrowButton" v-scroll-to="'#team'">
      <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow" />
    </button>
  </div>
</template>

<script>
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
      repeatEmail: null,
      failed: null,
      tooManyEmails: null, 
      answer: null,
      heightBig: null,
      heightSmall: null
    };
  },
	methods: {
		async sendEmail() {
      if (this.validateEmail(this.email)) {
        const data = {"email":  this.email};
        const url = 'https://api-land.adealbook.com/api/subscribe'
        await this.$http.post(url, data).then(res => {
          if ( res.data.message === "Too many requests from this ip" ) {
            this.failed = true
            this.tooManyEmails = true;
          } else {
            this.failed = false
            this.answer = true
          }
        })
        .catch(e => {
          this.failed = true
          if ( e.response.data.email[0] === "The email must be a valid email address." ) { 
            this.failed = true
            this.repeatEmail = false
          }
          if ( e.response.data.email[0] === "The email has already been taken." ) { 
            this.failed = true
            this.repeatEmail = true 
          }
          console.log("Something go wrong. ", e.response.data.email[0]);
        }) 
      } else {
        this.failed = true
      }
    },
    toForm() {
      this.answer = null;
      this.email = '';
    },
    validateEmail(email) {
      var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    this.heightBig = document.querySelector('.content-subscribe').scrollHeight
    this.heightSmall = document.querySelector('.subscribe-text_block').scrollHeight
    this.email = localStorage.getItem('subscribe_email') || ''
  },
  computed: {
    getHeightBlock() {
      return `height: ${Math.round(this.heightSmall/this.heightBig*100)}%`
    }
  },
  beforeUpdate() {
    localStorage.setItem('subscribe_email', this.email)
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
  border-radius: none !important;
  border-left: none !important;
  border-top: none !important;
  border-right: none !important;
  border-bottom: 1px solid;
  border-color: #9e9e9e;
  width: 100%;
  padding: 2% 10%;
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 1%;
  transition: border-color 0.2s linear;
  border-radius: 0;
}
.emailField::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  transition: all 0.2s linear;
}
.emailField:focus {
  border-color: #386EE6;
}
.emailField:focus::placeholder{
  opacity: 0.1;
  color: #386EE6;
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
.sp-btw {
  margin-bottom: 25%;
  margin-top: 10%;
}
.na-btn {
  background: #787878;
  pointer-events: none;
}
.failed {
  border-bottom: 1px solid #FE2932;
}
.errorMessage {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #FE2932;
  text-align: left;
}
.error-m-block {
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 3%;
}
.er-mail {
  width: 15px;
  height: auto;
  margin-right: 15px;
}
</style>
