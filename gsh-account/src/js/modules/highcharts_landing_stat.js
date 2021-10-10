import highcharts from 'highcharts';

// highcharts lines spline
highcharts.chart('linesChartLandingStats', {
    chart: {
        type: 'spline',
        backgroundColor: 'transparent',
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6'],
        labels: {
            style: {
                color: '#8A91A7'
            }
        }
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '';
            },
            style: {
                color: '#8A91A7'
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#374A58',
            fontWeight: 'normal',            
        },
        symbolHeight: 16,
        symbolWidth: 16,
        symbolRadius: 6
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 8,
                lineColor: '#666666',
                lineWidth: 0
            }
        }
    },
    series: [{
        name: 'Meetings',
        //showInLegend: false,
        color: '#50A062',
        lineWidth: 5,
        marker: {
            radius: 8,
            symbol: 'circle',
            width: 16,
            height: 16,
        },
        data: [0, 0, 25, 20, 50, 40, 80]

    }, {
        name: 'Calls',
        //showInLegend: false,
        color: '#617AB8',
        lineWidth: 5,
        marker: {
            width: 16,
            height: 16,
            symbol: 'circle'
        },
        data: [5, 0, 75, 45, 110, 90, 165]
    }, {
        name: 'Deals',
        //showInLegend: false,
        color: '#F79F1A',
        lineWidth: 5,
        marker: {
            width: 16,
            height: 16,
            symbol: 'circle'
        },
        data: [25, 0, 110, 70, 160, 140, 250]
    }]    
});