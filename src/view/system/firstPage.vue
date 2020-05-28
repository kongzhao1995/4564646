<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div id="echart-one"></div>
            </el-col>
            <el-col :span="8">
                <div id="echart-two"></div>
            </el-col>
            <el-col :span="8">
                <div id="echart-three"></div>
            </el-col>
        </el-row>
    </div>
</template>>

<script>
export default {
    data() {
        return {
            option: {
                title: {
                },
                tooltip: {
                    show: true,
                    trigger: 'axis'
                },
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle:{
                            type:'dashed',
                            show: true,
                            color: ['#eee']
                        }
                    },
                axisTick: {
                    show: false
                }
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
        }
        }
    },
    mounted() {
        this.getEcharts()
    },
    methods: {
        getEcharts() {
            this.$echart.myChart('echart-one',this.option)
            // var myChart = this.$echarts.init(document.getElementById('echart-one'))
            // myChart.setOption(this.option)
            // var myChart1 = this.$echarts.init(document.getElementById('echart-two'))
            // myChart1.setOption(this.option)
            // var myChart2 = this.$echarts.init(document.getElementById('echart-three'))
            // myChart2.setOption(this.option)
            // // 图标的自适应
            // setTimeout(function (){
            //     window.onresize = function () {
            //         myChart.resize()
            //         myChart1.resize()
            //         myChart2.resize()
            //     }
            // },50)
        }

    }
}
</script>

<style lang="less" scoped>
#echart-one {
    height: 240px;
}
#echart-two {
    height: 240px;
}
#echart-three {
    height: 240px;
}
    
</style>