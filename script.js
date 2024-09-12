Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pop. cob. - ABBC'
    },
    subtitle: {
        text: 'Plano F x Plano P'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [2018, 2019, 2020, 2021, 2022],
        lineColor: '#ccd6eb'
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        lineWidth: 1,
        lineColor: '#ccd6eb',
        stackLabels: {
            enabled: true
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            pointWidth: 25,
            borderWidth: 0,
            borderRadius: 0
        }
    },
    series: [
        {
            name: '<b>Ativos</b>',
            color: 'none',
            events: {
                legendItemClick () {
                    const series = this.chart.series
                    series.forEach(function (serie) {
                        if(serie.userOptions.linkedTo === ':Ativos') {
                            //não definimos a parâmetro 'visible', então a visibilidade fica como toggle
                            serie.setVisible()
                        }
                    })
                }   
            }
        },
        {
            name: '<b>Inativos</b>',
            color: 'none',
            events: {
                legendItemClick() {
                    const series = this.chart.series
                    series.forEach(function(serie) {
                        if(serie.userOptions.linkedTo === ':Inativos') {
                            serie.setVisible()
                        }
                    })
                }
            }
        },
        {
            name: '<b>Pensionistas</b>',
            color: 'none',
            events: {
                legendItemClick() {
                    const series = this.chart.series
                    series.forEach(serie => {
                        if(serie.userOptions.linkedTo === ':Pensionistas') {
                            serie.setVisible()
                        }
                    })
                }
            }
        },
        {   
            linkedTo: ':Ativos',
            name: 'Plano F - Ativos',
            data: [66285, 64412, 63022, 57648, 55575],
            color: '#56aec3',
            stack: 0
        },
        {
            linkedTo: ':Inativos',
            name: 'Plano F - Inativos',
            data: [52053, 52693, 50074, 45764, 49031],
            color: '#89bedd',
            stack: 0
        },
        {
            linkedTo: ':Pensionistas',
            name: 'Plano F - Pensionistas',
            data: [15054, 14823, 13827, 12659, 11727],
            color: '#66d0d3',
            stack: 0
        }, 
        {
            linkedTo: ':Ativos',
            name: 'Plano P - Ativos',
            data: [348338, 369797, 369622, 362908, 385563],
            color: '#73e198',
            stack: 1
        },
        {
            linkedTo: ':Inativos',
            name: 'Plano P - Inativos',
            data: [56787, 65377, 75818, 87041, 92174],
            color: '#91ca96',
            stack: 1
        },
        {
            linkedTo: ':Pensionistas',
            name: 'Plano P - Pensionistas',
            data: [15535, 16451, 18766, 22251, 23875],
            color: '#97ac83',
            stack: 1
        }
    ]
})