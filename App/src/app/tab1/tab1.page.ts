import { Component, ViewChild  } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'],
        datasets: [{
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
        }]
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

}
