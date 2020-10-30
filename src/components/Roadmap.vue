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
                <img class="step_image" src="./../assets/roadmap/lamp.svg" alt="Lamp icon">
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater3")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("creation")}}</p>
            </div>
            
            <div class="step">
                <img class="step_image" src="./../assets/roadmap/team.svg" alt="Team icon">
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater4")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("gatheringTeam")}}</p>
            </div>

            <div class="step">
                <img class="step_image" src="./../assets/roadmap/rocket.svg" alt="Rocket icon">
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater14")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("estimatedProject")}}</p>
            </div>

            <div class="step">
                <img class="step_image" src="./../assets/roadmap/code.svg" alt="Code icon">
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater214")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("integrationOfExchanhe")}}</p>
            </div>

            <div class="step">
                <img class="step_image" src="./../assets/roadmap/ask.svg" alt="Ask icon">
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
            }
        },
        methods: {
            checkTHeHeightOfLine() {
                let a = this.$refs.firstLinePath;
                this.length = a.getTotalLength();
                console.log(this.length);
            }
        },
        mounted: function () {
            this.checkTHeHeightOfLine();
        }
    }
</script>
<style scoped>
    #app .block-roadmap {
        /* height: auto; */
        height: fit-content;
        justify-content: flex-start;
    }

    #app .block-name {
        padding: 0;
        margin-top: 10px;
    }
    .roadmap_wrapper{
        width: 50%;      /*CHECK FOR MOBILE */
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
    .step:nth-child(2n){
        align-self: flex-end;
    }
    .step{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: fit-content;
        text-align: center;
        margin-bottom: 50px;
        width: 195px;
    }
    .step:last-child{
        margin-bottom: 0;
    }
    .step_title{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
    .step_title_text{
        margin-right: 7px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    .step_description{
        margin-top: 5px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #787878;
    }
</style>