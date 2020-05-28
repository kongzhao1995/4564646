// import echarts from 'echarts'

// function getEcharts(id, option) {
//   if (id) {
//     var myChart = echarts.init(document.getElementById(id))
//     myChart.setOption(option)

//   }
// }
// export default getEcharts
import echarts from 'echarts'
// import moment from 'moment'

// const mount  =  (params) =>{
//   return  moment(params).format('YYYY-MM-DD')
// }
const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $echart: {
      get() {
        return {
          //画一条简单的线
          myChart: (id, option) => {
            let chart = echarts.init(document.getElementById(id))
            // chart.dispose()
            // console.log(chart)
            chart.setOption(option)
            window.addEventListener('resize', () => {
              chart.resize()
            })
          }
        }
      }
    }
  })
}

export default {
  install
}


