import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux'

import { selectGenre, xAxisCat } from '../../reducers/selector'


function GameChart() {
  const genreArr = useSelector(selectGenre)
  const xCat = useSelector(xAxisCat)
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Games Amount By Genre',
    },
    xAxis: {
      categories: xCat, // the categories of the Y Axis
      labels: {
        style: {
          fontSize: '1.2em',
        },
      },
      title: {
        text: 'Game Genres',
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
        text: 'Amount of Games',
      }, // the title of the X Axis
    },
    series: [{
      data: genreArr,
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
