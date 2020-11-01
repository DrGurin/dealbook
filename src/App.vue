<template >
  <div id="app" @wheel="wheelingPage" ref='zal'>
    <!-- <Navbar /> -->
    <Home />
    <About />
    <Roadmap />
    <Problem />
    <Donate />
    <!-- <Team /> -->
    <!-- <Subscribe /> --> -->
    <!-- <Footer/> -->
  </div>
</template>

<script>
  // import Navbar from './components/Navbar.vue';
  import Roadmap from './components/Roadmap.vue';
  import Home from './components/Home.vue'
  // import Footer from './components/Footer.vue'
  import About from './components/About.vue'
  import Problem from './components/Problem.vue'
  // import Team from './components/Team.vue'
  // import Subscribe from './components/Subscribe.vue'
  import Donate from './components/Donate.vue'

  export default {
    name: 'App',
    components: {
      About,
      Problem,
      // Team,
      // Subscribe,
      Donate,
      // Navbar,
      Roadmap,
      Home,
      // Footer
    },
    data() {
      return{
        scrollingDown: Boolean,
      }
    },
    methods: {
      wheelingPage: function (ev) {
        if (ev.deltaY < 0) {
          this.scrollingDown = false;
        } else {
          this.scrollingDown = true;
        }
      },
    }
  }
</script>

<style lang="scss">
  @import './assets/common/styles/main.css';

  body {
    background: #000000;
  }

  #app .header__wrapper {
    width: 100vw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;
  }

  #app {
    padding: 0 10vw;
  }

  #app .block {
    width: 100%;
    height: auto;
    background-color: #252525;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    overflow: hidden;
  }

  #app .block-content {
    width: 65%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-content: center;
    align-items: center;
  }

  #app .block-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 10%;
  }

  #app .arrow {
    width: 15px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #app .arrowButton {
    background: transparent;
    border: none;
    outline: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  @media (min-width: 576px) {}

  @media (min-width: 768px) {}

  @media (max-width: 990px) {
    #app {
      padding: 0 10px;
    }
  }

  @media (min-width: 1200px) {}

  @media (max-width: 769px) {
    #app .block-content {
      width: 100%;
      padding-bottom: 10px;
    }

    #app #__layout {
      padding: 0 2vw;
    }

    .arrowButton {
      display: none;
    }

    #app .block-name {
      font-size: 30px;
    }
  }

  @media (min-width: 576px) {
    #app .container {
      max-width: 100vw;
      padding: 0;
    }
  }

  @media (min-width: 768px) {
    #app .container {
      max-width: 100vw;
      padding: 0;
    }
  }

  @media (min-width: 992px) {
    #app .container {
      max-width: 100vw;
      padding: 0;
    }
  }

  @media (min-width: 1200px) {
    #app .container {
      max-width: 100vw;
      padding: 0;
    }
  }
</style>