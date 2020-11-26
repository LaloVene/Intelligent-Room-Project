import { Component, ViewChild  } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  @ViewChild('barChart') barChart;
  @ViewChild('areaChart') areaChart;
  @ViewChild('doughnutChart') doughnutChart;

  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
    this.createDoughnutChart();
    this.createAreaChart();
  }

  createBarChart() {
    new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
        datasets: [
          {
            label: 'Temperature',
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: 'rgba(255, 43, 43, 0.2)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255, 43, 43)',// array should have same number of elements as number of dataset
            borderWidth: 1
          },
          {
            label: 'Humidity',
            data: [35, 40, 56, 48, 47, 52, 38, 25],
            backgroundColor: 'rgba(56, 128, 255,0.2)', // array should have same number of elements as number of dataset
            borderColor: 'rgba(56, 128, 255,1)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createAreaChart() {
    new Chart(this.areaChart.nativeElement, {
      type: 'radar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Light',
            data: [16, 14, 12, 10, 15, 12, 16, 18, 13, 15, 18],
            backgroundColor: 'rgba(255, 215, 0, 0.1)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255, 215, 0)',// array should have same number of elements as number of dataset
            borderWidth: 1
          },
          {
            label: 'Fan',
            data: [5, 4, 6, 5, 5, 6, 5, 5, 4, 4, 7],
            backgroundColor: 'rgba(255, 69, 0, 0.3)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255, 69, 0)',// array should have same number of elements as number of dataset
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                showLabelBackdrop: false, // hide square behind 
                suggestedMin: 0,
                suggestedMax: 20
            },
            gridLines: {
              color: 'nan'
            },
        }
      }

    });
  }
  createDoughnutChart() {
    new Chart(this.doughnutChart.nativeElement, {
        type: 'doughnut',
        data: {
          // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Energy Saved',
                'Total Energy',
            ],
            datasets: [{
              data: [20, 30],
              backgroundColor: [
                  "rgb(144, 238, 144)",
                  "rgba(220, 220, 220, 0.1)",
              ],
              borderColor: "none",
              borderWidth: 2
            }],
        },
        options: {
          circumference: Math.PI,
          rotation: Math.PI
        }
    });
  }
}
