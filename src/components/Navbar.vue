<template>
    <nav class="header" 
        v-bind:class="[isBurgerMenuOpened ? 'opened' : '', 'header']">
        <a id="logoDB" v-bind:style="{height: logoWrapperHeight + 'px' }" class="navbar-brand" href="/">
            <img class="navbar-brand-img" ref="logoImg" src="../assets/navbar/logo.svg" alt="Logo icon">
        </a>

        <ul v-if="!mobile" class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_home')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_about')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_problem')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_roadmap')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_subscribe')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_team')}}</a>
            </li>
        </ul>
        <div v-if="mobile" id="burgerImg" v-bind:style="{height: logoWrapperHeight + 'px' }" class="wrapper-burger"
            v-bind:class="[isBurgerMenuOpened ? 'clicked' : '', 'dropbtn']">
            <button @click="openBurgerMenu()" type="button" class="burger">
                <img class="navbar-brand-img" src="../assets/navbar/burger.svg" alt="Burger icon">
            </button>
        </div>
        <div id="dropdown" v-click-outside="hideDropDowmMenu" class="dropdown">
            <button @click="dropdowmToggle" v-bind:style="{height: logoWrapperHeight + 'px'}"
                v-bind:class="[isDropDowmMenuOpened ? 'clicked' : '', 'dropbtn']">
                <p>{{localization}}</p>
                <!-- <i class="fa fa-caret-down"></i> -->
                <img class="navbar-icon" src="../assets/navbar/caret-down-solid.svg" alt="icon">
            </button>
            <div v-bind:class="[isDropDowmMenuOpened ? 'show' : '', 'dropdown-content']">
                <button @click="changeLocalization('EN')" class="dropdown-content-button" type="button">English</button>
                <button @click="changeLocalization('УКР')" class="dropdown-content-button" type="button">Українська</button>
                <button @click="changeLocalization('РУ')" class="dropdown-content-button" type="button">Русский</button>
            </div>
        </div>
        <ul v-if="mobile" ref="mobileNavBar" v-bind:style="{height: burgerMenuHeight+'px' }"
            v-bind:class="[isBurgerMenuOpened ? 'opened' : '', 'mobile-navbar-nav']">
            <li ref="firstLi" class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_home')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_about')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_problem')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_roadmap')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_subscribe')}}</a>
            </li>
            <li ref="lastLi" class="nav-item">
                <a class="nav-link" href="#">{{$t('navbar_team')}}</a>
            </li>
        </ul>
        <div v-if="mobile" ref="footerWrapper" class="footer-wrapper"
         v-bind:class="[isBurgerMenuOpened ? 'opened' : '', 'footer-wrapper']">
            <Footer />
        </div>
    </nav>
</template>

<script>
    import ClickOutside from 'vue-click-outside';
    import Footer from './Footer.vue'

    export default {
        directives: {
            ClickOutside
        },
        components: {
            Footer
        },
        data() {
            return {
                localization: "EN",
                isDropDowmMenuOpened: false,
                isBurgerMenuOpened: false,
                logoWrapperHeight: 30,
                footerWrapper: null,
                mobileNavBar: null,
                clientHeight: Number,
                burgerMenuHeight: Number,
                mobile: Boolean,
                heightOfFooter: Number, 
            }
        },
        methods: {
            openBurgerMenu() {
                this.isBurgerMenuOpened = !this.isBurgerMenuOpened;
            },
            dropdowmToggle() {
                this.isDropDowmMenuOpened = !this.isDropDowmMenuOpened;
            },
            hideDropDowmMenu() {
                if (event.target.className !== 'dropdown') {
                    this.isDropDowmMenuOpened = false;
                } else {
                    return
                }
            },
            changeLocalization(ctx) {
                this.$i18n.locale = ctx;
                this.localization = ctx;
                this.isDropDowmMenuOpened = false;
            },
            matchSizes() {
                this.mobile = window.innerWidth < 991;
                this.logoWrapperHeight = this.$refs.logoImg.clientHeight + 'px';
                this.heightOfFooter = this.$refs.footerWrapper.getBoundingClientRect().height; 
                this.mobileNavBarToTop = this.$refs.mobileNavBar.getBoundingClientRect().top;
                this.clientHeight = window.screen.height;
                this.burgerMenuHeight = Number(window.innerHeight) - Number(this.heightOfFooter) - 46 - Number(window.innerHeight/10);
            },
            onResize() {
                this.mobile = window.innerWidth < 991;
                this.matchSizes();
            },
        },
        mounted() {
            this.$nextTick(function () {
                setTimeout(() => {
                    this.matchSizes();
                }, 200);
            })
        },
        watch: {
            isBurgerMenuOpened: function() {
            if(this.isBurgerMenuOpened){
                document.documentElement.style.overflow = 'hidden'
                return
            }
            document.documentElement.style.overflow = 'auto'
            }
        }
    }
</script>

<style scoped>
    .header * {
        font-size: 14px;
        color: #FFFFFF;
        font-family: Roboto;
        padding: 0;
        margin: 0;
        line-height: 1.3;
        letter-spacing: 0.05em;
    }

    .header {
        background: #252525;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5rem 10vw;
        position: fixed;
        max-width: 100vw;
        width: 100vw;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 100;
    }

    @media (max-width: 991px) {
        .header {
            align-items: flex-start;
            height: 46px;
            border-radius: 5px;
            transition: height .3s ease-in-out;
            transition-delay: 0.3s;
        }
        .header.opened{
            /* height: 100vh; */
            height: 90vh; 
            transition: height .05s ease-in-out;
            transition-delay: 0;
        }
    }
    .navbar-brand-img {
        width: 23px;
        height: 30px;
        margin: 0 0.5rem;
    }

    .dropdown {
        overflow: hidden;
        z-index: 101;
    }

    .dropdown .dropbtn {
        border: none;
        outline: none;
        padding: 0.4rem 0.5rem;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    .navbar-icon{
        width: 18px;
        height: 16px;
    }
    .dropdown .dropbtn.clicked {
        background: #151515;
        border-radius: 5px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        right: 10vw;
        margin-top: 11px;
        background: #303030;
        box-shadow: 2px 1px 5px #000000;
        border-radius: 5px;
        transform: translateZ(1px);
    }
   

    @media (max-width: 991px) {
        .dropdown-content {
            right: 1vw;
            transform: translateZ(1px);
        }
    }

    .dropdown-content .dropdown-content-button {
        color: #FFFFFF;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        text-align: center;
    }

    .dropdown .dropdown-content.show {
        display: block;
    }

    .navbar-nav {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: fit-content;
        width: fit-content;
        padding: 0;
    }

    .nav-item {
        margin: 0 2vw;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
    }

    .header .nav-item .nav-link {
        padding: 0.4rem 0.5rem;
        text-decoration: none;
        border-radius: 5px;
    }

    @media (max-width: 991px) {
        .header #logoDB {
            order: 0;
        }

        .header #burgerImg {
            order: -1;
        }

        .header #dropdown {
            order: 1;
        }

    }

    .wrapper-burger {
        /* padding: 0.4rem 0.5rem; */
        border-radius: 5px;
        margin: 0 0.5rem 0 0;
        height: 30px;
    }

    .wrapper-burger.clicked {
        background: #151515;
        border-radius: 5px;
    }

    .burger {
        border: none;
        outline: none;
        background: transparent;
        max-height: 100%;
    }


    /* mobile dropdown menu from burger  */
    .mobile-navbar-nav {
        position: absolute;
        top: 46px;
        left: -100vw;
        right: auto;
        width: 100vw;
        background: #252525;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style-type: none;
        margin: 0;
        padding: 4vh 0vw;
        border-top: 1px solid #151515;
        border-bottom: 1px solid #000000;
        transition: all .2s linear;
        opacity: 0;
        z-index: 90;
    }
    .mobile-navbar-nav.opened {
        left: 0;
        opacity: 1;
        transition: all .2s linear;
        z-index: 90;
    }

    .mobile-navbar-nav .nav-item {
        margin: 0;
        padding: 0;
        text-align: center;
        border-radius: 0;
        width: 100%;
        line-height: 2.0;
    }

    /* mobile dropdown menu from burger  */

    .footer-wrapper {
        max-height: fit-content;
        max-width: fit-content;
        position: absolute;
        bottom: 0;
        left: auto;
        right: -100vw;
        top: auto;
        overflow: hidden;
        /* transition: all .3s linear; */
        transition: opacity .2s linear;
        z-index: 90;
        opacity: 0;
        box-shadow: 0vh 48vh 0px 30vh #252525;
    }
    .footer-wrapper.opened{
        /* transition: right .3s linear; */
        right: 0;
        opacity: 1;
        transition: opacity .2s linear;
        z-index: 90;
    }

    /* hover effects  */
    @media (min-width: 991px) {
        .header .nav-item .nav-link:hover {
            background: #151515;
        }

        .wrapper-burger:hover {
            background: #151515;
        }

        .dropdown:hover .dropbtn {
            background: #151515;
            border-radius: 5px;
        }

        .dropdown-content .dropdown-content-button:hover {
            background-color: #151515;
        }

        .dropdown-content .dropdown-content-button:nth-child(1):hover {
            border-radius: 5px 5px 0px 0px;
        }

        .dropdown-content .dropdown-content-button:last-child:hover {
            border-radius: 0px 0px 5px 5px;
        }
    }

    /* hover effects  */
</style>