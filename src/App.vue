<template >
  <div id="app" ref='app'>
    <Navbar ref="navbar"/>
    <Home />
    <About />
    <Problem ref="problem"/>
    <Roadmap ref="roadmap"/>
    <Subscribe />
    <Team />
    <Donate />
    <div class="app_footer_wrapper">
    <Footer/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Roadmap from './components/Roadmap.vue';
  import Home from './components/Home.vue'
  import Footer from './components/Footer.vue'
  import About from './components/About.vue'
  import Problem from './components/Problem.vue'
  import Team from './components/Team.vue'
  import Subscribe from './components/Subscribe.vue'
  import Donate from './components/Donate.vue'

  export default {
    name: 'App',
    components: {
      About,
      Problem,
      Team,
      Subscribe,
      Donate,
      Navbar,
      Roadmap,
      Home,
      Footer, 
    },
    data() {
      return{
        isMobile: Boolean, 
      }
    },
    methods: {
      checkIsMobile() {
        if (window.innerWidth < 991) this.isMobile = true; 
        if (window.innerWidth > 991) this.isMobile = false; 
      },
      onScrollChangesInChildrenComponents() {
        this.$refs.problem.handleScroll(); 
        this.$refs.roadmap.handleScroll(); 
      },
      onResizeChangesInChildrenComponents() {
        setTimeout(() => {
          this.$refs.navbar.onResize(); 
          this.$refs.roadmap.onResize(); 
        }, 1000);
      }
    },
    created() {
      this.checkIsMobile(); 
      window.addEventListener('scroll', this.onScrollChangesInChildrenComponents);
      window.addEventListener('resize', this.onResizeChangesInChildrenComponents)
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScrollChangesInChildrenComponents);
      window.removeEventListener('resize', this.onResizeChangesInChildrenComponents);

    },
  }
</script>

<style lang="scss">
  @import './assets/common/styles/main.css';

  body {
    background: #000000;
  }
  #app h1,
  #app p,
  #app h2,
  #app h3,
  #app img,
  #app a,
  #app button{
    outline: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;  
  }

  #app .header__wrapper {
    width: 100vw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;
  }
  button {
    cursor: pointer;
  }
  #app {
    position: relative;
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
    padding-bottom: 2.5vw;
  }

  #app .block-content {
    width: 65%;
    display: flex;
    flex-direction: column;
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
    margin-top: 5vw;
  }

  #app .arrow {
    width: 15px;
    height: auto;
  }

  #app .arrowButton {
    background: transparent;
    border: none;
    outline: none;
    height: fit-content;
    width: fit-content;
    margin-top: 3vw;
    margin-bottom: 0;
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
// Warnings on page 
  .warning_block{
    min-width: 50vw;
    max-width: 80vw;
    border: 1px solid #888888;
    box-sizing: border-box;
    border-radius: 5px;
    height: fit-content;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 8px;
    margin-top: 5vw;
}
@media (max-width: 770px){
    .warning_block {
        width: 95%;
        max-width: 100vw;
    }
}
.warning_text{
    color: #787878;
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
}
@media (max-width: 380px){
    .warning_text {
        font-size: 9px;
    }
}
@media (max-width: 301px){
    .warning_text {
        font-size: 7px;
    }
}
.warning_icon{
    width: 13px;
    height: 12px;
    margin-right: 8px;
}
// Warnings on page 

</style>