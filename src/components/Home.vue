<template>
    <div class="block block-home">
        <h1 class="title">{{$t("home_title")}}</h1>
        <div class="canvas-wrapper">
            <canvas ref="canvas"></canvas>
        </div>
        <p class="solution">{{$t("home_motto")}}</p>
        <button v-scroll-to="'#about'" class="arrowButton">
            <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
        </button>
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar, 
    data() {
        return {
            dataOfChart: {
                labels: [12, -19, 3, 5, 2, 3, 12, -19, 3, 5, 2, 3, 12, -19, 3, 5, 2, 3, 12, -19, 3, 5, 2, 3, -10, 5],
                datasets: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    maxBarThickness : 25,
                    label: '1',
                    data: [],
                    backgroundColor: function(context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 0 ? '#ffffff' : '#386EE6';
                    },
                    borderColor: function() {
                        return '#252525';
                    },
                    borderWidth: 0 // TODO. If you will create border - you wil get shaddow. Shaddow cannot be deleted without border.
                }]
            }, 
            optionsOfChart: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }, 
                    lineTension: 0, 
                legend: { 
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        angleLines: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }

                    }],
                    yAxes: [{
                        angleLines: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }]
                }

            }, 
        }
    },
    methods: {
        selfRandom(min, max){
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            if (result == 0) {
                result = Math.floor(Math.random() * (max - min + 1)) + min;
                return result
            } else {
                return result
            }
        }
    },
    mounted: function () {
        this.renderChart(this.dataOfChart, this.optionsOfChart);
        setInterval(() => {
            for (let k = 0; k < this.dataOfChart.datasets[0].data.length; k++) {
                setTimeout(() => {
                    this.dataOfChart.datasets[0].data[k] = this.selfRandom(-15, +15);
                    this.$data._chart.update(5000)
                }, this.selfRandom(0));
            }
        }, this.selfRandom(1000, 5000));
        
    }, 
    created() {
        for (let index = 0; index < 25; index++) {
            let minus = [0, 1, 2, 4, 5, 6, 11, 12, 14, 18, 20, 21, 24, 25] 
            if(minus.includes(index)) {
                let a = this.selfRandom(-15, 0); 
                this.dataOfChart.datasets[0].data.push(a);
            } else {
                let a = this.selfRandom(0, 15);
                this.dataOfChart.datasets[0].data.push(a);
            }
        }
    }
}
</script>
<style scoped>
#app .block-home{
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20% 5% 5% 5%;
}
.title{
    font-size: 91px;
    line-height: 1.0;
    white-space: nowrap;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
}
.canvas-wrapper{
    width: 50vw; 
}
.solution{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #959595;
    white-space: nowrap;
}
@media (max-width: 980px){
    .title{
        font-size: 80px;
    }
    .solution{
        font-size: 18px;
    }
}
@media (max-width: 900px){
    .title{
        font-size: 80px;
    }
    .solution{
        font-size: 18px;
    }
    .canvas-wrapper{
        width: 65vw; 
    }
}
@media (max-width: 683px){
    #app .block.block-home{
        padding: 30% 5% 5% 5%;
    }
    .title{
        font-size: 70px;
    }
}
@media (max-width: 600px){
    .canvas-wrapper{
        width: 80vw; 
    }
}
@media (max-width: 600px){
    .title{
        font-size: 60px;
    }
    .canvas-wrapper{
        width: 90vw; 
    }
}
@media (max-width: 420px){
    .title{
        font-size: 55px;
    }
    #app .block.block-home{
        padding: 40% 5% 25% 5%;
    }
}
@media (max-width: 310px){
    .title{
        font-size: 45px;
    }
    .solution{
        font-size: 12px;
    }
    #app .block.block-home{
        padding: 80% 5% 45% 5%;
    }
}
@media (orientation: landscape ) and (max-width: 700px) {
  #app .block.block-home{
        padding: 55px 5% 5% 5%;
        height: auto;
    }
    #app .block.block-home > * {
        margin: 10px 0;
    }
}

</style>