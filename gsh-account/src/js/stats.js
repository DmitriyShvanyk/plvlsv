import $ from 'jquery';
import 'bootstrap';
import Sidebar from '../js/modules/sidebar';
import {loadFonts} from '../js/modules/loadFonts';

import highcharts from 'highcharts';
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
highchartsMore(highcharts);
solidGauge(highcharts);

import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import '../pages/stats.scss';


// sidebar
const sidebar = document.querySelector('.sidebar');
new Sidebar(sidebar);


// load fonts
loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');



window.addEventListener('DOMContentLoaded', () => {

  // calendar
  flatpickr('.stats__datapicker', {
    mode: "range",
    enableTime: false,
    altFormat: "F j",
    dateFormat: "Y-m-d",
    disableMobile: "true",
    altInput: true,
    allowInput: true,
    static: true,
    onChange: function (selectedDates, dateStr, instance) {
      instance.element.value = dateStr.replace('to', '-');
    }
  });


  // highcharts bar stats 1
  highcharts.chart('statsBar1', {
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
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
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
        borderWidth: 0,
        zones: [{
          value: 25,
          color: '#BDC4CA'
        }, {
          value: 50,
          color: '#428D57'
        }, {
          color: '#F79F1A'
        }]
      }
    },
    series: [{
      name: 'Name stat',
      showInLegend: false,
      data: [20, 30, 40, 40, 145, 130, 145, 130, 200, 180, 200, 180, 230, 210, 230, 210, 230, 210, 230, 210, 230, 210, 230, 180, 180, 150, 140, 150, 140, 150, 40, 50, 40, 50, 30, 40, 30, 20, 20, 10, 10, 10, 10, 10],
      pointWidth: 8,
      borderRadius: 4
    }]
  });


  // highcharts bar stats 2
  highcharts.chart('statsBar2', {
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
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
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
        borderWidth: 0,
        zones: [{
          value: 25,
          color: '#BDC4CA'
        }, {
          value: 50,
          color: '#428D57'
        }, {
          color: '#F79F1A'
        }]
      }
    },
    series: [{
      name: 'Name stat',
      showInLegend: false,
      data: [20, 30, 40, 40, 145, 130, 245, 130, 200, 180, 20, 50, 230, 210, 30, 210, 230, 210, 230, 210, 230, 210, 230, 180, 180, 150, 140, 150, 140, 150, 40, 50, 40, 50, 30, 40, 30, 20, 20, 10, 10, 10, 10, 10],
      pointWidth: 8,
      borderRadius: 4
    }]
  });


  const graphCircleValue1 = parseInt(document.querySelector('.stats__circle-graph-value--1').textContent);
  const graphCircleValue2 = parseInt(document.querySelector('.stats__circle-graph-value--2').textContent);
  const graphCircleValue3 = parseInt(document.querySelector('.stats__circle-graph-value--3').textContent);
  const graphCircleValue4 = parseInt(document.querySelector('.stats__circle-graph-value--4').textContent);

  // highcharts circle 1
  highcharts.chart('stats__circle-graph-1', {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        shadow: true,

        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 300,
            fontSize: '0',
            lineHeight: '0',
            color: '#667581',
            fill: '#667581',
          }
        },

      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    pane: {
      startAngle: -180,
      endAngle: 180,
      background: {
        backgroundColor: (highcharts.theme && highcharts.theme.background2) || '#F9FAFB',
        innerRadius: '80%',
        outerRadius: '100%',
      },
    },
    yAxis: {
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min: 0,
      max: 1000
    },
    series: [{
      data: [{
        y: graphCircleValue1,
        radius: 80,
        innerRadius: 100,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, '#FFCF54'], // start
            [1, '#F79F1A'], // end
          ],
        },
      }],
    }]
  });

  // highcharts  area 1
  highcharts.chart('stats__chart-area-1', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: ''
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      },
      accessibility: {
        rangeDescription: ''
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 2020,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Name',
      data: [100, 300, 400, 300, 450, 700, 500, 300],
      showInLegend: false,
      color: '#FFD12E',
    }]
  });

  // highcharts circle 2
  highcharts.chart('stats__circle-graph-2', {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        shadow: true,

        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 300,
            fontSize: '0',
            lineHeight: '0',
            color: '#667581',
            fill: '#667581',
          }
        },

      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    pane: {
      startAngle: -180,
      endAngle: 180,
      background: {
        backgroundColor: (highcharts.theme && highcharts.theme.background2) || '#F9FAFB',
        innerRadius: '80%',
        outerRadius: '100%',
      },
    },
    yAxis: {
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min: 0,
      max: 1000
    },
    series: [{
      data: [{
        y: graphCircleValue2,
        radius: 80,
        innerRadius: 100,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, '#FFCF54'], // start
            [1, '#F79F1A'], // end
          ],
        },
      }],
    }]
  });

  // highcharts  area 2
  highcharts.chart('stats__chart-area-2', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: ''
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      },
      accessibility: {
        rangeDescription: ''
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 2020,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Name',
      data: [100, 300, 50, 300, 50, 700, 1500, 300],
      showInLegend: false,
      color: '#FFD12E',
    }]
  });


  // highcharts circle 3
  highcharts.chart('stats__circle-graph-3', {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        shadow: true,

        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 300,
            fontSize: '0',
            lineHeight: '0',
            color: '#667581',
            fill: '#667581',
          }
        },

      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    pane: {
      startAngle: -180,
      endAngle: 180,
      background: {
        backgroundColor: (highcharts.theme && highcharts.theme.background2) || '#F9FAFB',
        innerRadius: '80%',
        outerRadius: '100%',
      },
    },
    yAxis: {
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min: 0,
      max: 1000
    },
    series: [{
      data: [{
        y: graphCircleValue3,
        radius: 80,
        innerRadius: 100,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, '#FFCF54'], // start
            [1, '#F79F1A'], // end
          ],
        },
      }],
    }]
  });

  // highcharts  area 3
  highcharts.chart('stats__chart-area-3', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: ''
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      },
      accessibility: {
        rangeDescription: ''
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 2020,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Name',
      data: [100, 300, 400, 300, 450, 700, 500, 300],
      showInLegend: false,
      color: '#FFD12E',
    }]
  });


  // highcharts circle 4
  highcharts.chart('stats__circle-graph-4', {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        shadow: true,

        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 300,
            fontSize: '0',
            lineHeight: '0',
            color: '#667581',
            fill: '#667581',
          }
        },

      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    pane: {
      startAngle: -180,
      endAngle: 180,
      background: {
        backgroundColor: (highcharts.theme && highcharts.theme.background2) || '#F9FAFB',
        innerRadius: '80%',
        outerRadius: '100%',
      },
    },
    yAxis: {
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min: 0,
      max: 1000
    },
    series: [{
      data: [{
        y: graphCircleValue4,
        radius: 80,
        innerRadius: 100,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, '#FFCF54'], // start
            [1, '#F79F1A'], // end
          ],
        },
      }],
    }]
  });

  // highcharts  area 4
  highcharts.chart('stats__chart-area-4', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: ''
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      },
      accessibility: {
        rangeDescription: ''
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        },
        enabled: false
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 2020,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Name',
      data: [100, 800, 450, 300, 450, 100, 500, 100],
      showInLegend: false,
      color: '#FFD12E',
    }]
  });



});