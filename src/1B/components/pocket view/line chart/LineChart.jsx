import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

function LineChart() {

    const data = {

        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [

            {

                label: '3M',
                data: [5, 4.5, 4, 4.25, 2, 2.5, 4.75, 4.6, 3.5, 4, 2.5, 5],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#62a1e7",
                pointBorderColor: "#62a1e7",
                pointBackgroundColor: "#62a1e7",
                pointRadius: "4"

            },

            {

                label: '6M',
                data: [4, 5, 2, 3.25, 1, 3.5, 2.75, 3.6, 4.5, 3, 1.5, 4],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#62a1e7",
                pointBorderColor: "#62a1e7",
                pointBackgroundColor: "#62a1e7",
                pointRadius: "4"

            },

            {

                label: '1Y',
                data: [1, 3, 4, 2.25, 3, 2.5, 3.75, 4.6, 3.5, 2, 3.5, 2],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#62a1e7",
                pointBorderColor: "#62a1e7",
                pointBackgroundColor: "#62a1e7",
                pointRadius: "4"

            },

            {

                label: '2Y',
                data: [5, 2, 3, 1.25, 2, 4.5, 2.75, 2.6, 4.5, 1, 4.5, 4],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#62a1e7",
                pointBorderColor: "#62a1e7",
                pointBackgroundColor: "#62a1e7",
                pointRadius: "4"

            },

        ],

    }

  return <Line data = {data} height = {50} width = {100}
  
  options = 
  {{ maintainAspectRatio: false, responsive: true, 
     elements: {
         line: {
             tension: 0 // disables bezier curves
         }
     },  

     annotation: {
        annotations: [{
            drawTime: 'afterDatasetsDraw',
            borderColor: '#d3455b',
            borderDash: [8, 8],
            borderWidth: 2,
            mode: 'horizontal',
            type: 'line',
            value: 4.5,
            scaleID: 'y-axis-0',
      }]
    },
    //  legend: {
    //     labels: {
    //       boxWidth: '0',
    //     }
    //   },

      scales: {
        xAxes: [{
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            },
            offset: true
        }],
        yAxes: [{
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            },
            offset: true
        }]
    }

    }
 
}
  
  />
  
}

export default LineChart;
