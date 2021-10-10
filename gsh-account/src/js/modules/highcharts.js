import highcharts from 'highcharts';

// highcharts bar
highcharts.chart('myBarChart', {
    chart: {
        type: 'column',
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
        categories: [
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020'
        ],
        crosshair: true,
        labels: {
            style: {
                color: '#6D728B'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#6D728B'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        //name: 'Name 1',
        showInLegend: false,
        data: [55, 45, 75, 65, 100, 70],
        color: '#F79F1A',
        pointWidth: 17,
        borderRadius: 4
    }, {
        //name: 'Name 2',
        showInLegend: false,
        data: [45, 40, 65, 60, 85, 45],
        color: '#FFD12E',
        pointWidth: 17,
        borderRadius: 4
    }]
});


// highcharts lines spline
highcharts.chart('myLineChart', {
    chart: {
        type: 'spline',
        backgroundColor: 'transparent'        
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
                color: '#6D728B'
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#6D728B'
            },
            formatter: function () {
                return this.value + '';
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

    }, {
        //name: 'Name 2',
        showInLegend: false,
        color: '#FFD12E',
        lineWidth: 3,
        marker: {
            symbol: 'circle'
        },
        data: [4, 1, 14, 10, 30]
    }]
});