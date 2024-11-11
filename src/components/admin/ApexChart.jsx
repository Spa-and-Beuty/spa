"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // To dynamically import the chart

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Page Views',
        type: 'bar',
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
      },
      {
        name: 'Clicks',
        type: 'area',
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
      },
    ],
    options: {
      chart: {
        height: 313,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        dashArray: [0, 0],
        width: [0, 2],
        curve: 'smooth',
      },
      fill: {
        opacity: [1, 1],
        type: ['solid', 'gradient'],
        gradient: {
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90],
        },
      },
      markers: {
        size: [0, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 0,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          barHeight: '70%',
          borderRadius: 3,
        },
      },
      colors: ['#ff6c2f', '#22c55e'],
      tooltip: {
        shared: true,
        y: [
          {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(1) + 'k';
              }
              return y;
            },
          },
          {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(1) + 'k';
              }
              return y;
            },
          },
        ],
      },
    },
  });

  return (
    <div className='lg:w-1/2 w-full md:w-1/2 bg-white p-4 transition-all duration-200'>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
