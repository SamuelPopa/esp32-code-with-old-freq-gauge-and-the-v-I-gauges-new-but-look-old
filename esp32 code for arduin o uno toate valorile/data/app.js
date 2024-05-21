document.addEventListener('DOMContentLoaded', function () {
    // Gauge options
    const gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // Initialize Voltage Gauges
    const voltageGauge1 = Highcharts.chart('container-voltage', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300,
            title: {
                text: 'Voltaj'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }]
    }));

    const voltageGauge2 = Highcharts.chart('container2-voltage2', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300,
            title: {
                text: 'Voltaj2'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj2',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }]
    }));

    const voltageGauge3 = Highcharts.chart('container3-voltage3', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300,
            title: {
                text: 'Voltaj3'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj3',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }]
    }));

    // Initialize Current Gauges
    const currentGauge1 = Highcharts.chart('container-current', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Curent'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">A</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }]
    }));

    const currentGauge2 = Highcharts.chart('container2-current2', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Curent2'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent2',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">A</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }]
    }));

    const currentGauge3 = Highcharts.chart('container3-current3', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Curent3'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent3',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:1px;opacity:0.4">A</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }]
    }));

    // Initialize Power Factor Charts
    const powerChart1 = Highcharts.chart('container-Pf', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea1'
        },
        xAxis: {
            categories: ['P1WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100
        },
        series: [{
            name: 'Power',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    });

    const powerChart2 = Highcharts.chart('container2-Pf2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea2'
        },
        xAxis: {
            categories: ['P2WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100
        },
        series: [{
            name: 'Power',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    });

    const powerChart3 = Highcharts.chart('container3-Pf3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea3'
        },
        xAxis: {
            categories: ['P3WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100
        },
        series: [{
            name: 'Power',
            data: [0]
        }],
        credits: {
            enabled: false
        }
    });

    // Initialize Power Distribution Charts
    const powerDistributionChart = Highcharts.chart('containerPW', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Putere W',
            data: []
        }]
    });

    const powerVarChart1 = Highcharts.chart('containerPVAR1', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distributia Puterii1(VAR)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Power (VAR)',
            data: []
        }],
        colors: ['#ff9999', '#ffcc99', '#99ff99']
    });

    // Initialize Phase Angle Chart
    const phaseAngleChart = Highcharts.chart('containerungifaze', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '3-Phase Electrical System Angles'
        },
        pane: {
            startAngle: 90,
            endAngle: 90 + 360,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                background: null,
                outerRadius: '105%',
                innerRadius: '103%',
                backgroundColor: '#DDD'
            }]
        },
        yAxis: {
            min: 0,
            max: 360,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'Degrees'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B'
            }, {
                from: 120,
                to: 240,
                color: '#DDDF0D'
            }, {
                from: 240,
                to: 360,
                color: '#DF5353'
            }]
        },
        series: [{
            name: 'Phase AB',
            data: [0],
            tooltip: {
                valueSuffix: ' degrees'
            }
        }, {
            name: 'Phase AC',
            data: [0],
            tooltip: {
                valueSuffix: ' degrees'
            }
        }, {
            name: 'Phase BC',
            data: [0],
            tooltip: {
                valueSuffix: ' degrees'
            }
        }]
    });

    const gaugeOptionsfr = {
        chart: { type: 'gauge', plotBackgroundColor: null, plotBackgroundImage: null, plotBorderWidth: 0, plotShadow: false },
        title: { text: 'Frecventa' },
        pane: {
            startAngle: -90, // Starting from the left (90 degrees from the top)
            endAngle: 90, // Ending on the right (90 degrees from the top), making a half-circle
            background: [{
                // Background of the gauge itself
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '09%'
            }]
        },
        // The value axis
        yAxis: {
            min: 0,
            max: 65, // Set this to the maximum frequency you expect
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#666',

            labels: {
                step: 2,
                rotation: 'horizontal'
            },
            title: {
                text: 'Hz'
            },
            plotBands: [{ // Only green and yellow bands, remove the red one
                from: 0,
                to: 70,
                color: '#55BF3B' // Green
            },
            ]
        },

        series: [{
            name: 'Frecventa',
            data: [0], // Initial value
            tooltip: {
                valueSuffix: ' Hz'
            }
        }]
    };
 
// Frequency gauge
const chartFrequency = Highcharts.chart('container-frequency', Highcharts.merge(gaugeOptionsfr, {
    
    
    yAxis: {
        min: 0,
        max: 60, // Frequency range
        title: { text: '', y:95 } // add text here, it's useful when you make a general page background here the text will overlap the backgroung making it look nice
    },
    series: [{
        name: 'Frecventa',
        data: [0], // Initial value
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:11px">{y}</span><br/><span style="font-size:12px;opacity:0.4">Hz</span></div>'
        },
        tooltip: { valueSuffix: ' Hz' }
    }],
    credits: {
        enabled: false
    }
}));
    

    // WebSocket connection and data handling
    const standardCurrentInput = document.getElementById('standardCurrent');
    const percentageDifferences = [];

    function updatePercentageDifference(standardCurrent, currentValue) {
        const percentageDifference = ((currentValue / standardCurrent) - 1) * 100;
        return percentageDifference.toFixed(2);
    }

    const ws = new WebSocket('ws://' + window.location.hostname + '/ws');

    ws.onmessage = function (event) {
        const data = JSON.parse(event.data);

        document.getElementById('ID').textContent = data.ID;
        document.getElementById('CTR').textContent = data.CTR;
        document.getElementById('fHz').textContent = data.fHz;
        document.getElementById('InullA').textContent = data.InullA;
        document.getElementById('Isum').textContent = data.Isum;

        const standardCurrent = parseFloat(standardCurrentInput.value);
        const currentValue1 = data.I1rmsA;
        const percentage1 = updatePercentageDifference(standardCurrent, currentValue1);
        document.getElementById('percentage1').textContent = percentage1;
        percentageDifferences[0] = parseFloat(percentage1);

        const currentValue2 = data.I2rmsA;
        const percentage2 = updatePercentageDifference(standardCurrent, currentValue2);
        document.getElementById('percentage2').textContent = percentage2;
        percentageDifferences[1] = parseFloat(percentage2);

        const currentValue3 = data.I3rmsA;
        const percentage3 = updatePercentageDifference(standardCurrent, currentValue3);
        document.getElementById('percentage3').textContent = percentage3;
        percentageDifferences[2] = parseFloat(percentage3);

        const maxPercentage = Math.max(...percentageDifferences);
        document.getElementById('maxPercentage').value = maxPercentage.toFixed(2);

        voltageGauge1.series[0].points[0].update(parseFloat(data.V1rmsV));
        voltageGauge2.series[0].points[0].update(parseFloat(data.V2rmsV));
        voltageGauge3.series[0].points[0].update(parseFloat(data.V3rmsV));

        currentGauge1.series[0].points[0].update(parseFloat(data.I1rmsA));
        currentGauge2.series[0].points[0].update(parseFloat(data.I2rmsA));
        currentGauge3.series[0].points[0].update(parseFloat(data.I3rmsA));

        powerChart1.series[0].setData([parseFloat(data.P1WATT)]);
        powerChart2.series[0].setData([parseFloat(data.P2WATT)]);
        powerChart3.series[0].setData([parseFloat(data.P3WATT)]);

        const powerDataWatt = [
            { name: 'P1', y: data.P1WATT },
            { name: 'P2', y: data.P2WATT },
            { name: 'P3', y: data.P3WATT }
        ];
        powerDistributionChart.series[0].setData(powerDataWatt);

        const powerDataVar = [
            { name: 'P1', y: data.P1VAR },
            { name: 'P2', y: data.P2VAR },
            { name: 'P3', y: data.P3VAR }
        ];
        powerVarChart1.series[0].setData(powerDataVar);

        phaseAngleChart.series[0].setData([data.uUab]);
        phaseAngleChart.series[1].setData([data.uUac]);
        phaseAngleChart.series[2].setData([data.uUbc]);

          if (chartFrequency) {
            chartFrequency.series[0].points[0].update(data.fHz);
      }
    }

    const initialCurrentValue = parseFloat(document.getElementById('I1rmsA').textContent);
    const initialStandardCurrent = parseFloat(standardCurrentInput.value);
    updatePercentageDifference(initialStandardCurrent, initialCurrentValue);
});
