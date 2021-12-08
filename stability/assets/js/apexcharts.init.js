(function () {

    'use strict';

    // Chart Staking
    function initChartStaking() {
        const chartEl = document.querySelector("#chartStaking");
        if (!chartEl) return;
        
        let available = 30;
        let already = 66.98746511;        

        function renderSeriesValue(){
            const series1 = chartEl.querySelector('.apexcharts-legend-series[rel="1"]');
            const seriesValue1 = `<span class="apexcharts-legend-value">${available}</span>`;
            series1.insertAdjacentHTML('beforeend', seriesValue1);

            const series2 = chartEl.querySelector('.apexcharts-legend-series[rel="2"]');
            const seriesValue2 = `<span class="apexcharts-legend-value">${already}</span>`;
            series2.insertAdjacentHTML('beforeend', seriesValue2);
        }        

        const chart = new ApexCharts(chartEl, {
            chart: {
                height: 150,
                width: 335,
                type: "donut",
                events: {
                    mounted: function (chartContext, config) {
                        renderSeriesValue()                        
                    },
                    updated: function (chartContext, config) {   
                        renderSeriesValue()
                    }
                },
            },
            plotOptions: {
                pie: {
                    startAngle: 0,
                    endAngle: 360,
                    size: '85%',
                    offsetX: -25,
                    offsetY: 0,
                }
            },
            dataLabels: {
                enabled: !0,
                formatter: function (e) {
                    return e + "%"
                },
                offsetY: -20,
                hideOverflowingLabels: true,
                style: {
                    fontSize: "0px",
                    colors: ["#304758"]
                }
            },
            stroke:{               
               width: 0,
            },
            series: [available, already],
            labels: ["Доступно для стейкинга", "Сейчас в стейкинге"],
            colors: ["#00C273", "#0088DC"],
            legend: {
                show: !0,
                position: "right",
                horizontalAlign: "center",
                verticalAlign: "middle",
                floating: !1,
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: "Open Sans",
                offsetX: 25,
                offsetY: -24,
                labels: {
                    colors: ["#676F9D"],
                    useSeriesColors: false
                },
                markers: {
                    width: 6,
                    height: 6
                },
            }
        })

        chart.render();

        /*chart.updateOptions([{
            series: [10, 90]
        }])*/
    }
    initChartStaking();

})();