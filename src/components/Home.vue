<template>
    <div class="canvas-wrapper">
        <canvas ref="canvas"></canvas>
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
                    label: '1',
                    data: [],
                    backgroundColor: function(context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 0 ? '#ffffff' : '#386EE6';
                    },
                    borderColor: [
                        'transparent' // TODO!!! 
                    ],
                    borderWidth: 1
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
                legend: { 
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        maxBarThickness : 25,
                        barPercentage: 1,
                        categoryPercentage: 1,
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
.canvas-wrapper{
    width: 50vw; 
    position: relative;
    margin: 0 auto; 
}

</style>