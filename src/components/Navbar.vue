<template>
    <nav class="header">
        <a v-bind:style="{height: logoWrapperHeight + 'px' }" class="navbar-brand" href="/"><img
                class="navbar-brand-img" ref="logoImg" src="../assets/navbar/logo.svg" alt="Logo icon"></a>

        <ul v-if="!mobile" class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Problem<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Roadmap<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Donate<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Team<span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <ul v-if="mobile" class="tesst">
            <li class="nav-item">
                <a class="nav-link" href="#">BURGER</a>
            </li>
        </ul>


        <div v-click-outside="hideDropDowmMenu" class="dropdown">
            <button @click="dropdowmToggle" v-bind:class="[isDropDowmMenuOpened ? 'clicked' : '', 'dropbtn']">
                {{localization}}
                <i class="fa fa-caret-down"></i>
            </button>
            <div v-bind:class="[isDropDowmMenuOpened ? 'show' : '', 'dropdown-content']">
                <button @click="changeLocalization('EN')" class="dropdown-content-button" type="button">English</button>
                <button @click="changeLocalization('РУ')" class="dropdown-content-button" type="button">Русский</button>
            </div>
        </div>
    </nav>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
    export default {
        directives: {
            ClickOutside
        },
        data() {
            return {
                localization: "EN",
                isDropDowmMenuOpened: false,
                isBurgerMenuOpened: false,
                logoWrapperHeight: 30,
                mobile: Boolean,
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
                this.localization = ctx;
                this.isDropDowmMenuOpened = false;
            },
            matchSizes() {
                this.mobile = (window.innerWidth < 991) ? true : false;
                this.logoWrapperHeight = this.$refs.logoImg.clientHeight + 'px';
            },
            onResize() {
                this.mobile = (window.innerWidth < 991) ? true : false;
            },
            onScroll() {
                let el = document.getElementById('blockSubscribe');
                var result = el.getBoundingClientRect();
                console.log(result.top);
            }
        },
        mounted() {
            this.matchSizes();
            window.addEventListener('resize', this.onResize)
            window.addEventListener('scroll', this.onScroll)
        },
        computed: {
            isMobileWidth: function () {
                console.log(window.innerWidth < 991);
                return window.innerWidth < 991
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
            window.removeEventListener('scroll', this.onScroll);
        }
    }
</script>

<style>
    .header * {
        font-size: 14px;
        color: #FFFFFF;
        padding: 0;
        margin: 0;
        text-decoration: none;
        line-height: 1.3;
        letter-spacing: 0.05em;
        white-space: nowrap;
        z-index: 999;
    }

    .header {
        background: #252525;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5rem 10vw;
        position: fixed;
        width: 100vw;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .navbar-brand-img {
        width: 23px;
        height: 30px;
    }

    .dropdown {
        overflow: hidden;
    }

    .dropdown .dropbtn {
        border: none;
        outline: none;
        padding: 0.4rem 0.5rem;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }

    @media (min-width: 768px) {
        .dropdown:hover .dropbtn {
            background: #151515;
            border-radius: 5px;
        }
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
        z-index: 1;
    }

    .dropdown-content .dropdown-content-button {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
    }

    .dropdown-content .dropdown-content-button:hover {
        background-color: #ddd;
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
    }

    @media (max-width: 991px) {
        .header :nth-child(1) {
            order: 0;
        }

        .header :nth-child(2) {
            order: -1;
        }

        .header :nth-child(3) {
            order: 1;
        }

    }
</style>