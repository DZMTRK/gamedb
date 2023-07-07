import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { selectGenre, xAxisCat } from '../../reducers/selector'


function GameChart() {
  const { t } = useTranslation()
  const genreArr = useSelector(selectGenre)
  const xCat = useSelector(xAxisCat)
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: t('description.chartMainTitle'),
    },
    xAxis: {
      categories: xCat, // the categories of the Y Axis
      labels: {
        style: {
          fontSize: '1.2em',
        },
      },
      title: {
        text: t('description.chartXcatTitle'),
      }, // the title of the Y Axis
      crosshair: true,
    },
    yAxis: {
      min: 0, // minimum value of the X Axis
      allowDecimals: false,
      labels: {
        style: {
          fontSize: '1.2em',
        },
      },
      title: {
        text: t('description.chartYcatTitle'),
      }, // the title of the X Axis
    },
    plotOptions: {
      bar: {
        pointWidth: 25,
      },
    },
    series: [{
      name: t('description.barLabel'),
      data: genreArr,
      colorByPoint: true,
      showInLegend: false,
    }],
  }
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default GameChart
