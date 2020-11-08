<template>
    <div class="block block-roadmap">
        <h2 class="block-name">{{$t("roadmap")}}</h2>
        <div class="roadmap_wrapper">

            <div ref="stepWrapperFirst" class="step">
                <div ref="stepImageFirst" class="step_image_wrapper">
                    <svg width="55" height="64" viewBox="0 0 55 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.1006 55.2407H22.0555C20.9477 55.2407 20.0463 54.3392 20.0463 53.2314C20.0463 52.1236 20.9477 51.2222 22.0555 51.2222H33.1006C34.2084 51.2222 35.1099 52.1236 35.1099 53.2314C35.1112 54.3392 34.2084 55.2407 33.1006 55.2407ZM22.0555 52.142C21.455 52.142 20.9661 52.6309 20.9661 53.2314C20.9661 53.832 21.455 54.3208 22.0555 54.3208H33.1006C33.7012 54.3208 34.19 53.832 34.19 53.2314C34.19 52.6309 33.7012 52.142 33.1006 52.142H22.0555Z"
                            fill="white" />
                        <path
                            d="M27.5814 63.1083C26.0387 63.1083 24.7324 62.0778 24.3513 60.6096C22.3683 60.3217 20.8624 58.6209 20.8624 56.5914V56.1313H34.2926V56.5914C34.2926 58.6182 32.7906 60.3191 30.8115 60.6096C30.4317 62.0778 29.1255 63.1083 27.5814 63.1083ZM21.8164 57.0514C22.0319 58.5012 23.2475 59.6395 24.76 59.7276L25.1332 59.7486L25.1884 60.118C25.3698 61.318 26.3764 62.1882 27.5814 62.1882C28.7878 62.1882 29.7944 61.318 29.9744 60.118L30.0296 59.7486L30.4015 59.7263C31.9101 59.6369 33.123 58.4986 33.3386 57.0501H21.8164V57.0514Z"
                            fill="white" />
                        <path
                            d="M34.8392 49.3003H20.2355V44.0085C18.8307 41.6346 17.192 39.2411 15.4889 37.0815C13.3351 34.3489 12.1971 31.0668 12.1971 27.5915C12.1971 19.1083 19.0975 12.2063 27.5788 12.2063C36.06 12.2063 42.9591 19.1083 42.9591 27.5915C42.9591 31.0694 41.8198 34.3515 39.6659 37.0842C38.1311 39.0321 36.332 41.6623 34.8379 44.1425V49.3003H34.8392ZM21.1554 48.3802H33.9193V43.8862L33.985 43.7771C35.5107 41.2338 37.3649 38.5182 38.9445 36.5137C40.9695 33.9453 42.0405 30.8604 42.0405 27.5915C42.0405 19.6156 35.5541 13.1264 27.5801 13.1264C19.606 13.1264 13.1183 19.6156 13.1183 27.5915C13.1183 30.8578 14.188 33.9427 16.213 36.5111C17.966 38.7364 19.6533 41.2048 21.0923 43.6496L21.1554 43.7574V48.3802Z"
                            fill="white" stroke="white" />
                        <path d="M22.6523 32.4345L21.6254 32.6595L25.118 48.6058L26.1449 48.3808L22.6523 32.4345Z"
                            fill="white" />
                        <path d="M32.5197 32.4532L29.0283 48.7449L29.9277 48.9377L33.4192 32.6461L32.5197 32.4532Z"
                            fill="white" />
                        <path d="M30.2438 59.7485H25.0754V60.6684H30.2438V59.7485Z" fill="white" />
                        <path
                            d="M26.7575 38.0293L25.8376 34.5014L23.3382 36.1747L22.9728 35.6292L26.241 33.442L26.8981 35.9604L28.5841 31.8542L29.9757 35.8237L32.4371 34.6973L32.7104 35.2953L29.5933 36.7202L28.5355 33.7023L26.7575 38.0293Z"
                            fill="#3977FF" class="lamp_animated" />
                        <path
                            d="M28.1543 8.99805C27.9362 8.99805 27.7601 8.82192 27.7601 8.60373V1.76883C27.7601 1.55064 27.9362 1.37451 28.1543 1.37451C28.3725 1.37451 28.5486 1.55064 28.5486 1.76883V8.60373C28.5486 8.82192 28.3725 8.99805 28.1543 8.99805Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M38.6251 11.5564C38.5555 11.5564 38.4845 11.538 38.4214 11.4986C38.2348 11.3855 38.1757 11.1437 38.2887 10.957L41.8303 5.11174C41.9433 4.92509 42.1851 4.86594 42.3717 4.97898C42.5583 5.09202 42.6174 5.33388 42.5044 5.52053L38.9629 11.3658C38.8893 11.4894 38.7592 11.5564 38.6251 11.5564Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M45.1327 19.8068C44.9908 19.8068 44.8528 19.7293 44.7831 19.5953C44.6819 19.4021 44.7568 19.1642 44.95 19.063L51.0081 15.9013C51.2012 15.8001 51.4391 15.875 51.5403 16.0682C51.6415 16.2614 51.5666 16.4992 51.3734 16.6004L45.3153 19.7621C45.2562 19.7924 45.1931 19.8068 45.1327 19.8068Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M53.9215 29.5472C53.9136 29.5472 53.9044 29.5472 53.8965 29.5459L47.0776 29.1109C46.8607 29.0964 46.6952 28.9098 46.7096 28.6917C46.7241 28.4749 46.9107 28.3106 47.1288 28.3237L53.9477 28.7587C54.1646 28.7732 54.3301 28.9598 54.3157 29.1779C54.3012 29.3869 54.1278 29.5472 53.9215 29.5472Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M49.5705 43.3109C49.4929 43.3109 49.4141 43.2886 49.3457 43.24L43.7397 39.3331C43.561 39.2083 43.5177 38.9625 43.6412 38.7838C43.766 38.6051 44.0118 38.5617 44.1905 38.6853L49.7965 42.5921C49.9752 42.7169 50.0186 42.9627 49.895 43.1414C49.8175 43.2518 49.6953 43.3109 49.5705 43.3109Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M16.6888 11.5564C16.556 11.5564 16.4259 11.4894 16.351 11.3658L12.8095 5.52053C12.6965 5.33388 12.7556 5.09202 12.9422 4.97898C13.1288 4.86594 13.3706 4.92509 13.4836 5.11174L17.0252 10.957C17.1382 11.1437 17.0791 11.3855 16.8925 11.4986C16.8294 11.538 16.7584 11.5564 16.6888 11.5564Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M10.1826 19.8068C10.1208 19.8068 10.0591 19.7924 9.99995 19.7621L3.9419 16.6004C3.74872 16.4992 3.67382 16.2614 3.77501 16.0682C3.87619 15.875 4.11405 15.8001 4.30722 15.9013L10.3653 19.063C10.5584 19.1642 10.6334 19.4021 10.5322 19.5953C10.4625 19.7293 10.3245 19.8068 10.1826 19.8068Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M1.3938 29.5472C1.18748 29.5472 1.01402 29.3869 1.00088 29.1779C0.986424 28.9611 1.152 28.7732 1.36883 28.7587L8.18775 28.3237C8.40589 28.3106 8.5925 28.4749 8.60695 28.6917C8.62141 28.9085 8.45583 29.0964 8.239 29.1109L1.42008 29.5459C1.41088 29.5472 1.40168 29.5472 1.3938 29.5472Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                        <path
                            d="M5.74481 43.312C5.61997 43.312 5.49776 43.2529 5.42154 43.1424C5.2967 42.9637 5.34138 42.7179 5.5201 42.593L11.1261 38.6851C11.3048 38.5602 11.5505 38.6049 11.6754 38.7837C11.8002 38.9625 11.7555 39.2083 11.5768 39.3331L5.97084 43.241C5.90119 43.2897 5.82235 43.312 5.74481 43.312Z"
                            fill="#3977FF" class="lamp_animated" stroke="#3977FF" />
                    </svg>

                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater3")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("creation")}}</p>
            </div>

            <div ref="stepWrapperSecond" class="step">
                <div ref="stepImageSecond" class="step_image_wrapper">
                    <svg id="icon2" class="step_image" width="64" height="29" viewBox="0 0 64 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1635 14.0286C36.9332 13.1385 39.2675 9.36092 38.3774 5.59121C37.4873 1.8215 33.7097 -0.512855 29.94 0.37728C26.1703 1.26742 23.8359 5.04497 24.7261 8.81468C25.6162 12.5844 29.3938 14.9187 33.1635 14.0286ZM33.6805 16.1488H29.9789C22.9652 16.1488 17.3154 21.7987 17.3154 28.8124H46.5388C46.5388 21.7987 40.6941 16.1488 33.6805 16.1488Z" fill="white"/>
                        <transition name="slide-fade">
                            <path v-if="linesData[0].dashOffset == 0" fill-rule="evenodd" clip-rule="evenodd" d="M56.8393 13.2733C58.8575 12.7967 60.1072 10.7744 59.6307 8.7562C59.1541 6.73804 57.1318 5.48832 55.1136 5.96487C53.0955 6.44141 51.8457 8.46376 52.3223 10.4819C52.7988 12.5001 54.8212 13.7498 56.8393 13.2733ZM57.1161 14.408H55.1344C51.3796 14.408 48.3549 17.4327 48.3549 21.1875H64C64 17.4327 60.871 14.408 57.1161 14.408Z" fill="#386EE6"/>
                        </transition>
                        <transition name="slide-fade">
                            <path v-if="linesData[0].dashOffset == 0" fill-rule="evenodd" clip-rule="evenodd" d="M8.71447 13.272C10.7326 12.7955 11.9824 10.7731 11.5058 8.75498C11.0293 6.73682 9.00691 5.4871 6.98875 5.96364C4.97059 6.44019 3.72087 8.46254 4.19741 10.4807C4.67396 12.4989 6.69631 13.7486 8.71447 13.272ZM8.99125 14.4068H7.00953C3.2547 14.4068 0.22998 17.4315 0.22998 21.1863H15.8751C15.8751 17.4315 12.7461 14.4068 8.99125 14.4068Z" fill="#386EE6"/>
                        </transition>
                    </svg>

                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater4")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/completeIcon.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("gatheringTeam")}}</p>
            </div>

            <div ref="stepWrapperThird" class="step">
                <div ref="stepImageThird" class="step_image_wrapper step_image_rocket">
                    <!-- animation assets  -->
                    <div :class="[linesData[2].dashOffset == 0 ? 'star1' : '', 'star']"></div>
                    <div :class="[linesData[2].dashOffset == 0 ? 'star2' : '', 'star']"></div>
                    <div :class="[linesData[2].dashOffset == 0 ? 'star3' : '', 'star']"></div>
                    <div :class="[linesData[2].dashOffset == 0 ? 'star4' : '', 'star']"></div>
                    <div :class="[linesData[2].dashOffset == 0 ? 'star5' : '', 'star']"></div>
                    <div :class="[linesData[2].dashOffset == 0 ? 'star6' : '', 'star']"></div>
                    <!-- animation assets  -->
                    <svg id="icon3" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[linesData[2].dashOffset == 0 ? 'firstfire' : '']"
                            d="M27.3942 64.1096C27.1761 64.1096 27 63.9335 27 63.7153V56.8804C27 56.6622 27.1761 56.4861 27.3942 56.4861C27.6124 56.4861 27.7885 56.6622 27.7885 56.8804V63.7153C27.7885 63.9335 27.6124 64.1096 27.3942 64.1096Z"
                            fill="#3977FF" stroke="#3977FF" />
                        <path :class="[linesData[2].dashOffset == 0 ? 'secondfire' : '']" 
                            d="M33.3942 61.1089C33.1761 61.1089 33 60.9328 33 60.7146V53.8797C33 53.6615 33.1761 53.4854 33.3942 53.4854C33.6124 53.4854 33.7885 53.6615 33.7885 53.8797V60.7146C33.7885 60.9328 33.6124 61.1089 33.3942 61.1089Z"
                            fill="#3977FF" stroke="#3977FF" />
                        <path :class="[linesData[2].dashOffset == 0 ? 'thirdfire' : '']"
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

            <div ref="stepWrapperFourth" class="step">
                <div ref="stepImageFourth" class="step_image_wrapper">
                    <svg id="icon4" class="step_image" width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <transition name="right-fade">
                            <path v-if="linesData[3].dashOffset == 0" fill-rule="evenodd" clip-rule="evenodd" d="M49.2211 16.5499C49.3337 15.7958 49.1011 14.9997 48.5225 14.4171L36.5433 2.35481C35.5704 1.37513 33.9875 1.36966 33.0078 2.34259C32.0281 3.31552 32.0226 4.89843 32.9956 5.8781L43.2132 16.1666L32.9247 26.3842C31.945 27.3571 31.9395 28.94 32.9125 29.9197C33.8854 30.8994 35.4683 30.9049 36.448 29.9319L48.5103 17.9527C48.9073 17.5584 49.1444 17.0639 49.2211 16.5499Z" fill="white"/>
                        </transition>
                        <transition name="slash-fade">
                            <rect v-if="linesData[3].dashOffset == 0" x="26.3605" width="5" height="32.0469" rx="2.5" transform="rotate(13.2781 26.3605 0)" fill="#386EE6"/>
                        </transition>
                        <transition name="left-fade">
                            <path v-if="linesData[3].dashOffset == 0" fill-rule="evenodd" clip-rule="evenodd" d="M0.0275784 16.5143C-0.0850525 15.7601 0.147512 14.9641 0.726156 14.3814L12.7054 2.31916C13.6783 1.33948 15.2612 1.33401 16.2409 2.30695C17.2206 3.27988 17.226 4.86278 16.2531 5.84246L6.03548 16.1309L16.324 26.3486C17.3036 27.3215 17.3091 28.9044 16.3362 29.8841C15.3632 30.8637 13.7803 30.8692 12.8007 29.8963L0.73839 17.9171C0.341337 17.5228 0.104307 17.0282 0.0275784 16.5143Z" fill="white"/>
                        </transition>
                    </svg>
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("quater214")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description">{{$t("integrationOfExchanhe")}}</p>
            </div>

            <div ref="stepWrapperFivth" class="step">
                <div ref="stepImageFivth" class="step_image_wrapper">
                    <svg id="icon5" class="step_image" width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <transition name="slide-fade">
                            <path v-if="linesData[4].dashOffset == 0" d="M8.0444 27.6613C8.0444 25.1523 8.34628 23.1541 8.95006 21.6667C9.55383 20.1792 10.6548 18.7186 12.2531 17.2849C13.869 15.8333 14.9434 14.6595 15.4761 13.7634C16.0089 12.8495 16.2752 11.8907 16.2752 10.8871C16.2752 7.85842 14.8901 6.34409 12.1199 6.34409C10.8058 6.34409 9.74917 6.75627 8.95006 7.58065C8.1687 8.3871 7.76027 9.50717 7.72475 10.9409H0C0.0355161 7.51792 1.12764 4.83871 3.27636 2.90323C5.44284 0.967742 8.39068 0 12.1199 0C15.8846 0 18.8058 0.922939 20.8835 2.76882C22.9612 4.59677 24 7.18638 24 10.5376C24 12.0609 23.6626 13.5036 22.9878 14.8656C22.313 16.2097 21.1321 17.7061 19.4451 19.3548L17.2875 21.4247C15.9378 22.733 15.1654 24.2652 14.97 26.0215L14.8635 27.6613H8.0444ZM7.27192 35.914C7.27192 34.7133 7.67148 33.7276 8.47059 32.957C9.28746 32.1685 10.3263 31.7742 11.5871 31.7742C12.8479 31.7742 13.8779 32.1685 14.677 32.957C15.4939 33.7276 15.9023 34.7133 15.9023 35.914C15.9023 37.0968 15.5028 38.0735 14.7037 38.8441C13.9223 39.6147 12.8835 40 11.5871 40C10.2908 40 9.24306 39.6147 8.44395 38.8441C7.6626 38.0735 7.27192 37.0968 7.27192 35.914Z" fill="white"/>
                        </transition>
                    </svg>
                </div>
                <div class="step_title">
                    <p class="step_title_text">{{$t("commingSoon")}}</p>
                    <img class="step_title_icon" src="./../assets/roadmap/time.svg" alt="Title icon">
                </div>
                <p class="step_description"> <br> </p>
            </div>

            <!-- LINES svg-images that must be animated -->
            <svg :style="{top: exitTopPositionOfTheFirstIcon + 'px', left: exitLeftPositionOfTheFirstIcon + 'px'}"
                class="line firstLine" :width="widthOfTheLine" :height="heightOfTheLine" :viewBox="viewbox" fill="none"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path id="line1" ref="firstLinePath" :d="directionForPathOfLeftToRightLine" stroke="#386EE6" stroke-width="2" />
            </svg>
            <svg :style="{top: exitTopPositionOfTheSecondIcon + 'px', left: exitLeftPositionOfTheSecondIcon-widthOfTheLine + 'px'}"
                class="line secondLineGrey" :width="widthOfTheLine" :height="heightOfTheSecondLine" :viewBox="viewbox"
                fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path id="line2" ref="secondLineGreyPath" :d="directionForPathOfRightToLeftLine" stroke="#ffffff"
                    stroke-width="2" />
            </svg>
            <svg :style="{top: exitTopPositionOfTheSecondIcon + 'px', left: exitLeftPositionOfTheSecondIcon-widthOfBlueLine + 'px'}"
                class="line secondLineBlue" :width="widthOfBlueLine" height="2" :viewBox="viewboxForBlueOne" fill="none"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path id="line2Blue" ref="secondLineBluePath" :d="directionForPathOfBlueLine" stroke="#386EE6" stroke-width="2" />
            </svg>
            <svg :style="{top: exitTopPositionOfTheThirdIcon + 'px', left: exitLeftPositionOfTheThirdIcon + 'px'}"
                class="line secondLine" :width="widthOfTheLine" :height="heightOfTheThirdLine" :viewBox="viewbox"
                fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path id="line3" ref="thirdLinePath" :d="directionForPathOfLeftToRightLine2" stroke="#ffffff" stroke-width="2" />
            </svg>
            <!-- the height of fourth svg must be like the third. This is a crutch-fix for safari bug -->
            <svg :style="{top: exitTopPositionOfTheFourthIcon + 'px', left: exitLeftPositionOfTheSecondIcon-widthOfTheLine + 'px'}"
                class="line secondLineGrey" :width="widthOfTheLine" :height="heightOfTheThirdLine" :viewBox="viewbox"
                fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path id="line4" ref="fourthLinePath" :d="directionForPathOfRightToLeftLine2" stroke="#ffffff" stroke-width="2" />
            </svg>
            <!--LINES svg-images that must be animated-->
            
        </div>
        <div class="warning_block">
            <img src="../assets/common/warning.svg" class="warning_icon" alt="Warning icon">
            <p class="warning_text">{{$t("warningRoadmap")}}</p>
        </div>
        <button class="arrowButton" @click="test()">
            <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
        </button>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                heightOfIcon: Number,
                widthOfIcon: Number,
                // tops for line exit from icon 
                exitTopPositionOfTheFirstIcon: null,
                exitTopPositionOfTheSecondIcon: null,
                exitTopPositionOfTheThirdIcon: null,
                exitTopPositionOfTheFourthIcon: null,
                exitTopPositionOfTheFivthIcon: null,
                // lefts 
                exitLeftPositionOfTheFirstIcon: null,
                exitLeftPositionOfTheSecondIcon: null,
                exitLeftPositionOfTheThirdIcon: null,
                exitLeftPositionOfTheFourthIcon: null,
                // 
                widthOfTheLine: null,
                widthOfBlueLine: null,
                heightOfTheLine: null,
                heightOfTheSecondLine: null,
                heightOfTheThirdLine: null,
                heightOfTheFourthLine: null,
                viewbox: String,
                viewboxForBlueOne: String,
                directionForPathOfLeftToRightLine: String,
                directionForPathOfLeftToRightLine2: String,
                directionForPathOfRightToLeftLine: String,
                directionForPathOfRightToLeftLine2: String,
                directionForPathOfBlueLine: String,
                linesData: [
                    {
                        id: 'line1',
                        startPct: Number, 
                        endPct: Number,
                        goToId: 'icon2',
                        dashOffset: Number
                    },
                    {
                        id: 'line2',
                        startPct: Number, 
                        endPct: Number,
                        goToId: 'icon3',
                        dashOffset: Number
                    },
                    {
                        id: 'line2Blue',
                        startPct: Number, 
                        endPct: Number,
                        goToId: 'icon3',
                        dashOffset: Number
                    },
                    {
                        id: 'line3',
                        startPct: Number, 
                        endPct: Number,
                        goToId: 'icon4',
                        dashOffset: Number
                    },
                    {
                        id: 'line4',
                        startPct: Number, 
                        endPct: Number,
                        goToId: 'icon5',
                        dashOffset: Number
                    },
                ],
            }
        },
        methods: {
            getPosition() {
                // stepImageFirst
                this.heightOfIcon = this.$refs.stepImageFirst.clientHeight;
                this.widthOfIcon = this.$refs.stepImageFirst.clientWidth;

                // tops for line exit from icon
                this.exitTopPositionOfTheFirstIcon = this.$refs.stepWrapperFirst.offsetTop + (this.heightOfIcon / 2);
                this.exitTopPositionOfTheSecondIcon = this.$refs.stepWrapperSecond.offsetTop + (this.heightOfIcon / 2);
                this.exitTopPositionOfTheThirdIcon = this.$refs.stepWrapperThird.offsetTop + (this.heightOfIcon / 2);
                this.exitTopPositionOfTheFourthIcon = this.$refs.stepWrapperFourth.offsetTop + (this.heightOfIcon / 2);
                this.exitTopPositionOfTheFivthIcon = this.$refs.stepWrapperFivth.offsetTop + (this.heightOfIcon / 2);

                // left position of line exit starting 
                this.exitLeftPositionOfTheFirstIcon = this.$refs.stepImageFirst.offsetLeft + this.widthOfIcon;
                this.exitLeftPositionOfTheSecondIcon = this.$refs.stepImageSecond.offsetLeft;
                this.exitLeftPositionOfTheThirdIcon = this.$refs.stepImageThird.offsetLeft + this.widthOfIcon;
                this.exitLeftPositionOfTheFourthIcon = this.$refs.stepImageFourth.offsetLeft;

                // needable width for connection lines
                this.widthOfTheLine = (this.exitLeftPositionOfTheSecondIcon + this.widthOfIcon / 2) - this
                    .exitLeftPositionOfTheFirstIcon;
                this.widthOfBlueLine = this.widthOfTheLine / 3;
                // 
                // heights of lines
                this.heightOfTheLine = this.exitTopPositionOfTheSecondIcon - (this.heightOfIcon / 2) - this
                    .exitTopPositionOfTheFirstIcon;
                this.heightOfTheSecondLine = this.$refs.stepWrapperThird.offsetTop - this
                .exitTopPositionOfTheSecondIcon;
                this.heightOfTheThirdLine = this.$refs.stepWrapperFourth.offsetTop - this.exitTopPositionOfTheThirdIcon;
                this.heightOfTheFourthLine = this.$refs.stepWrapperFivth.offsetTop - this.exitTopPositionOfTheFourthIcon + 19;
                // 
                // vieboxes for lines 
                this.viewbox = `0 0 ${this.widthOfTheLine} ${this.heightOfTheLine}`;
                this.viewboxThirdLine = `0 0 ${this.widthOfTheLine} ${this.heightOfTheThirdLine}`;
                this.viewboxForBlueOne = `0 0 ${this.widthOfBlueLine} 2`;
                // 
                // directions that are inserted on <path :d=""></path>
                this.directionForPathOfLeftToRightLine =
                    `M ${this.widthOfTheLine} 1H51C23.3858 1 1 23.3858 1 51V ${this.heightOfTheLine}`
                this.directionForPathOfLeftToRightLine2 =
                    `M ${this.widthOfTheLine} 1H51C23.3858 1 1 23.3858 1 51V ${this.heightOfTheThirdLine}`
                this.directionForPathOfRightToLeftLine =
                    `M ${this.widthOfTheLine} 1H51C23.3858 1 1 23.3858 1 51V ${this.heightOfTheSecondLine}`
                this.directionForPathOfRightToLeftLine2 =
                    `M ${this.widthOfTheLine} 1H51C23.3858 1 1 23.3858 1 51V ${this.heightOfTheFourthLine}`
                this.directionForPathOfBlueLine = `M ${this.widthOfBlueLine} 1 H -${this.widthOfBlueLine} 1`
            },
            onResize() {
                this.getPosition();
            },
            calcPathLength(elem){
                if (elem.getTotalLength){
                    return elem.getTotalLength();
                }
            },
            calcStartPoint(elem) {
                let scrolledDistance = window.scrollY; 
                let elementViewportOffset = elem.getBoundingClientRect().top; 
                let totalOffset = scrolledDistance + elementViewportOffset;
                let toMiddlePointOnScreen = totalOffset - window.innerHeight/1.2;
                let percentStartPoint = (toMiddlePointOnScreen / (this.$parent.$refs.app.clientHeight - window.innerHeight)) * 100;
                return percentStartPoint; 
            },
            calcFinishPoint(elem) {
                let scrolledDistance = window.scrollY; 
                let elementViewportOffset = elem.getBoundingClientRect().top; 
                let totalOffset = scrolledDistance + elementViewportOffset;
                let toMiddlePointOnScreen = totalOffset - window.innerHeight/1.2;
                let percentFinishPoint = (toMiddlePointOnScreen / (this.$parent.$refs.app.clientHeight - window.innerHeight)) * 100;
                return percentFinishPoint;
            },
            handleScroll() {
                let percentOfScroll = (window.scrollY / (this.$parent.$refs.app.clientHeight - window.innerHeight)) * 100;
                for (let i = 0; i < this.linesData.length; i++) {
                    let data = this.linesData[i];
                    let elem = document.getElementById(data.id)
                    let goToElem = document.getElementById(data.goToId);
                    let dashLen = this.calcPathLength(elem);
                    let dataStartPct = this.calcStartPoint(elem);
                    let dataFinishPct = this.calcFinishPoint(goToElem); 
                    let fractionThroughThisElem = (percentOfScroll - dataStartPct) / (dataFinishPct - dataStartPct);
                    fractionThroughThisElem = Math.max(fractionThroughThisElem, 0);
                    fractionThroughThisElem = Math.min(fractionThroughThisElem, 1);
                    let dashOffset = dashLen * (1 - fractionThroughThisElem);
                    this.checkDashOffset(i, dashOffset); 
                    elem.setAttribute("stroke-dasharray", dashLen);
                    elem.setAttribute("stroke-dashoffset", dashOffset);
                }
            }, 
            checkDashOffset(i, dashOffset) {
                this.linesData[i].dashOffset = dashOffset; 
                return
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.getPosition();
            })
        },
        computed: {
            collectDashOffset: function () {
                let a = []; 
                a.push(this.linesData[0].dashOffset)
                a.push(this.linesData[1].dashOffset)
                a.push(this.linesData[2].dashOffset)
                a.push(this.linesData[3].dashOffset)
                a.push(this.linesData[4].dashOffset)
                return a;
            }
        }
    }
</script>
<style scoped>

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
.warning_text{
    color: #787878;
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
}
.warning_icon{
    width: 13px;
    height: 12px;
    margin-right: 8px;
}
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
        height: fit-content;
        justify-content: flex-start;
        position: relative;
    }
    @media (max-width: 769px) {
            .block-roadmap{
                padding-bottom: 10px;
            }
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
        margin-top: 5vw;
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

    /* lines styles  */
    .line {
        position: absolute;
    }

    #app .firstLine,
    #app .secondLine {
        transform: rotate3d(0, 360, 0, 180deg);
    }

    /* animation for lamp  */
    #app .lamp_animated {
        animation: lampBlining .8s ease-in-out alternate infinite;
    }

    @keyframes lampBlining {
        0% {
            opacity: 0.2;
        }

        100% {
            opacity: 1;
        }
    }

    /* animation for lamp  */
    /* animations for team  */
    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(0);
        opacity: 0;
    }

    /* animation for lamp  */
    /* slash-fade */

    .slash-fade-enter-active {
        transition: all .1s linear;
        transition-delay: 0.5s;
    }
    .slash-fade-leave-active {
        transition: all .03s;
    }
    .slash-fade-enter, .slash-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .right-fade-enter-active {
        transition: all .1s linear;
        transition-delay: 1s;
    }
    .right-fade-leave-active {
        transition: all .03s;
    }
    .right-fade-enter, .right-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .left-fade-enter-active {
        transition: all .1s linear;
        transition-delay: 0s;
    }
    .left-fade-leave-active {
        transition: all .03s;
    }
    .left-fade-enter, .left-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
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
        box-shadow: 0px 0px 6px 1px rgba(57, 119, 255, 1);
        top: -10%;
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