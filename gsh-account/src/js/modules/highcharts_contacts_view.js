import highcharts from 'highcharts';

// highcharts lines spline
highcharts.chart('myLineChartContactsView', {
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
        categories: ['October 30, 2017', 'May 20, 2015', 'May 29, 2017', 'November 7, 2017', 'December 7, 2017'],
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
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 0
            }
        }
    },
    series: [{
        //name: 'Name 1',
        showInLegend: false,
        color: '#F79F1A',
        lineWidth: 5,
        marker: {
            symbol: 'circle'
        },
        data: [6, 2, 20, 15, 35]
    }]    
});