<template>
  <div class="data-analyze">
    <div id="default"></div>
    <div id="dataset"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  created() {
     /***************************************请求数据,修改下面的数据********************************************************************************/
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      let myChart = echarts.init(document.getElementById("default"));
      let dataset = echarts.init(document.getElementById("dataset"));
      //饼图
      let option = {
        title: { left: "center", text: "选题情况统计（饼图）" },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          left: "left",
          orient: "vertical"
        },
        tooltip: {},
        dataset: {
          source: [
             /***************************************更改数据即可调整比例********************************************************************************/
            ["选题审核通过", 10],
            ["选题未审核", 20],
            ["选题未通过", 30]
          ]
        },
        series: [
          {
            type: "pie",
            radius: 60,
            center: ["50%", "50%"]
          }
        ]
      };

      //柱状图
      let option2 = {
        title: { left: "left", text: "选题情况统计（柱图）" },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {},
        tooltip: {},
        dataset: {
          /***************************************更改数据即可调整比例********************************************************************************/
          source: [
            ["选题审核通过", 10],
            ["选题未审核", 20],
            ["选题未通过", 30]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#c23531", "#2f4554", "#61a0a8"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      dataset.setOption(option2);
    }
  }
};
</script>
<style lang="scss" scoped>
.data-analyze {
  #dataset,
  #default {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 80%;
    border: 1px solid pink;
  }
}
</style>