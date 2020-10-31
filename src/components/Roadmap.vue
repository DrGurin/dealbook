<template>
    <div class="block block-roadmap">
        <h2 class="block-name">{{$t("roadmap")}}</h2>
        <div class="roadmap_wrapper">
            <!-- svg-images that must be animated -->
            <!-- <svg class="line firstLine" width="320" height="161" viewBox="0 0 320 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="firstLinePath" d="M0 1H269C296.614 1 319 23.3858 319 51V161" stroke="#386EE6"
                    stroke-width="2" />
            </svg> -->
            <!-- <svg class="line secondLineBlue" width="160" height="2" viewBox="0 0 160 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="secondLineBluePath" d="M160 1.00001L0 1" stroke="#386EE6" stroke-width="2" />
            </svg> -->
            <!-- <svg class="line secondLineGrey" width="321" height="161" viewBox="0 0 321 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="secondLineGreyPath" d="M321 1H51C23.3858 1 1 23.3858 1 51V161" stroke="white" />
            </svg> -->
            <!-- <svg class="line thirdLine" width="320" height="161" viewBox="0 0 320 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="thirdLinePath" d="M0 1H269C296.614 1 319 23.3858 319 51V161" stroke="white" />
            </svg> -->
            <!-- <svg class="line fourthLine" width="321" height="161" viewBox="0 0 321 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="fourthLinePath" d="M321 1H51C23.3858 1 1 23.3858 1 51V161" stroke="white" />
            </svg>  -->
            <!-- svg-images that must be animated-->

            <div class="step">
                <div ref="stepImageFirst" class="step_image_wrapper">
                    <img class="step_image" src="./../assets/roadmap/test.svg" alt="Lamp icon">
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater3")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("creation")}}</p>
            </div>

            <div class="step">
                <div ref="stepImageSecond" class="step_image_wrapper">
                    <img class="step_image" src="./../assets/roadmap/team.svg" alt="Team icon">
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater4")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("gatheringTeam")}}</p>
            </div>

            <div class="step">
                <div ref="stepImageThird" class="step_image_wrapper step_image_rocket">
                    <!-- animation assets  -->
                        <div class="star star1"></div>
                        <div class="star star2"></div>
                        <div class="star star3"></div>
                        <div class="star star4"></div>
                        <div class="star star5"></div>
                        <div class="star star6"></div>
                    <!-- animation assets  -->
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="firstfire"
                            d="M27.3942 64.1096C27.1761 64.1096 27 63.9335 27 63.7153V56.8804C27 56.6622 27.1761 56.4861 27.3942 56.4861C27.6124 56.4861 27.7885 56.6622 27.7885 56.8804V63.7153C27.7885 63.9335 27.6124 64.1096 27.3942 64.1096Z"
                            fill="#3977FF" stroke="#3977FF" />
                        <path class="secondfire"
                            d="M33.3942 61.1089C33.1761 61.1089 33 60.9328 33 60.7146V53.8797C33 53.6615 33.1761 53.4854 33.3942 53.4854C33.6124 53.4854 33.7885 53.6615 33.7885 53.8797V60.7146C33.7885 60.9328 33.6124 61.1089 33.3942 61.1089Z"
                            fill="#3977FF" stroke="#3977FF" />
                        <path class="thirdfire"
                            d="M39.3942 64.1096C39.1761 64.1096 39 63.9335 39 63.7153V56.8804C39 56.6622 39.1761 56.4861 39.3942 56.4861C39.6124 56.4861 39.7885 56.6622 39.7885 56.8804V63.7153C39.7885 63.9335 39.6124 64.1096 39.3942 64.1096Z"
                            fill="#3977FF" stroke="#3977FF" />
                        <path
                            d="M26.4107 11.8667L26.4149 11.8566L26.4188 11.8464C27.58 8.82787 29.938 5.59747 33.4601 2.01659C36.6324 5.21878 38.8834 8.53313 40.3554 11.8291C41.8518 15.1796 42.5701 19.3972 42.5978 24.103C42.6108 26.3196 42.4877 28.9646 42.225 31.7574L42.1837 32.1966L42.4801 32.5232L49.9977 40.8079L50.0156 40.8277L50.0214 40.8335C50.0215 40.8346 50.0216 40.8359 50.0217 40.8371C50.0222 40.8455 50.0227 40.8542 50.0231 40.8636L46.8881 53.2936L46.8808 53.3225C46.8244 53.3406 46.743 53.3633 46.6278 53.389L44.3762 53.3984C44.3333 53.3792 44.3124 53.3651 44.299 53.3557C44.267 53.333 44.2335 53.3042 44.1564 53.2295L40.2388 46.0472L39.9532 45.5236L39.3569 45.5261L27.8016 45.5745L27.2035 45.577L26.9228 46.1053L23.0892 53.3213L23.0891 53.3214L23.0884 53.3221L23.0877 53.3228L23.087 53.3235L23.0864 53.3242L23.0857 53.3249L23.085 53.3256L23.0843 53.3263L23.0836 53.327L23.0829 53.3277L23.0822 53.3284L23.0815 53.3291L23.0808 53.3298L23.0801 53.3305L23.0794 53.3312L23.0787 53.3319L23.078 53.3327L23.0772 53.3334L23.0765 53.3341L23.0758 53.3349L23.0751 53.3356L23.0743 53.3363L23.0736 53.3371L23.0728 53.3378L23.0721 53.3386L23.0714 53.3393L23.0706 53.3401L23.0699 53.3408L23.0691 53.3416L23.0684 53.3424L23.0676 53.3431L23.0668 53.3439L23.0661 53.3447L23.0653 53.3455L23.0645 53.3462L23.0641 53.3466L20.6604 53.3567L20.6646 54.3568L20.6604 53.3567C20.6485 53.3567 20.638 53.3565 20.6289 53.356L17.3595 40.997C17.3598 40.9875 17.3601 40.9788 17.3606 40.9704C17.3607 40.9695 17.3607 40.9686 17.3608 40.9678L17.3655 40.963L17.3833 40.943L24.803 32.5958L25.093 32.2695L25.051 31.8349C24.7523 28.7502 24.6003 26.3879 24.5873 24.175C24.5577 19.1589 25.0936 15.0794 26.4107 11.8667ZM36.3671 26.3792C36.7061 26.0366 36.9995 25.6545 37.2015 25.193C37.4053 24.7272 37.4935 24.2324 37.4903 23.6928C37.4871 23.1533 37.3931 22.6595 37.1841 22.196C36.9769 21.7368 36.6795 21.3576 36.3368 21.0183C35.9941 20.6789 35.612 20.3852 35.1509 20.1827C34.6854 19.9782 34.1908 19.8892 33.6513 19.8914C33.1119 19.8937 32.6181 19.9869 32.1545 20.1955C31.6952 20.4021 31.3161 20.6994 30.9771 21.0419C30.638 21.3844 30.3447 21.7666 30.1427 22.228C29.9389 22.6938 29.8507 23.1887 29.8539 23.7282C29.857 24.2678 29.951 24.7616 30.1601 25.2251C30.3672 25.6842 30.6647 26.0634 31.0074 26.4028C31.3501 26.7421 31.7322 27.0358 32.1933 27.2384C32.6588 27.4428 33.1534 27.5319 33.6929 27.5296C34.2323 27.5273 34.7261 27.4342 35.1897 27.2256C35.649 27.019 36.0281 26.7217 36.3671 26.3792Z"
                            stroke="white" stroke-width="2" />
                    </svg>

                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater14")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("estimatedProject")}}</p>
            </div>

            <div class="step">
                <div ref="stepImageFourth" class="step_image_wrapper">
                    <img class="step_image" src="./../assets/roadmap/code.svg" alt="Code icon">
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater214")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("integrationOfExchanhe")}}</p>
            </div>

            <div class="step">
                <div ref="stepImageFivth" class="step_image_wrapper">
                    <img class="step_image" src="./../assets/roadmap/ask.svg" alt="Ask icon">
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("commingSoon")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
            </div>

        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                length: null,
                heightOfIcon: Number,

            }
        },
        methods: {
            // checkTHeHeightOfLine() {
            //     let a = this.$refs.firstLinePath;
            //     this.length = a.getTotalLength();
            //     console.log(this.length);
            // }, 
            getPosition() {
                // stepImageFirst
                this.heightOfIcon = this.$refs.stepImageFirst.clientHeight;
                console.log(this.heightOfIcon);
                return this.heightOfIcon
            }
        },
        mounted: function () {
            // this.$nextTick(function () {
            //     setTimeout(() => {
            //         this.getPosition();
            //     }, 100);
            // })
            this.getPosition();

        },
        watch: {
            //   watchers
        }
    }
</script>
<style scoped>
    #app .step_image_wrapper {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        width: 86px;
        height: 89px;
        background: #1E1E1E;
        border: 1px solid #787878;
        box-sizing: border-box;
        border-radius: 5px;
    }

    #app .block-roadmap {
        /* height: auto; */
        height: fit-content;
        justify-content: flex-start;
    }

    #app .block-name {
        padding: 0;
        margin-top: 10px;
    }

    .roadmap_wrapper {
        width: 50%;
        /*CHECK FOR MOBILE */
        min-width: 300px;
        height: fit-content;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        margin-top: 10px;
        position: relative;
    }

    .step:nth-child(2n) {
        align-self: flex-end;
    }

    .step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: fit-content;
        text-align: center;
        margin-bottom: 50px;
        width: 195px;
    }

    .step:last-child {
        margin-bottom: 0;
    }

    .step_image {
        width: fit-content;
    }

    .step_title {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }

    .step_title_text {
        margin-right: 7px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .step_description {
        margin-top: 5px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #787878;
    }

    /* animation for rocket  */
    #app .step_image_rocket {
        position: relative;
        overflow: hidden;
    }

    #app .star {
        width: 2px;
        height: 2px;
        background: #ffffff;
        border-radius: 50%;
        position: absolute;
        /* box-shadow: 5px 5px 5px rgba(250, 250, 250, 0.8); */
        box-shadow: 0px 0px 6px 1px rgba(57, 119, 255, 1)
    }

    #app .star1 {
        left: 10px;
        animation: starfall 1.3s linear infinite;
    }

    #app .star2 {
        left: 20px;
        animation: starfall 1s linear infinite;
    }

    #app .star3 {
        left: 30px;
        animation: starfall .7s linear infinite;
    }

    #app .star4 {
        right: 10px;
        left: auto;
        animation: starfall .7s linear infinite;
    }

    #app .star5 {
        right: 20px;
        left: auto;
        animation: starfall 1s linear infinite;
    }

    #app .star6 {
        right: 30px;
        left: auto;
        animation: starfall 1.3s linear infinite;
    }

    @keyframes starfall {
        0% {
            top: -10%;
        }

        100% {
            top: 120%;
        }
    }

    #app .firstfire {
        opacity: 1;
        animation: rocketFire 1s ease-in-out alternate infinite;
    }

    #app .secondfire {
        opacity: 0;
        animation: rocketFire .5s ease-in-out alternate infinite;
    }

    #app .thirdfire {
        opacity: 0;
        animation: rocketFire .7s ease-in-out alternate infinite;
    }

    @keyframes rocketFire {
        0% {
            opacity: .5;
        }

        100% {
            opacity: 1;
        }
    }

    /* animation for rocket  */
</style>