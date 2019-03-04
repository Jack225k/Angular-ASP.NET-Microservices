import { Component, OnInit } from '@angular/core';

const SAMPLE_DATA: any[] = [
  {data:[65, 59, 80, 81, 56, 54, 30], label: 'Fall Sales'},
  {data:[30, 37, 78, 23, 48, 20, 47], label: 'Winter Sales'}
];

const SAMPLE_DATA_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_DATA;
  public barChartLabels: string[] = SAMPLE_DATA_LABELS;
  public barChartType = 'bar';
  public barChartLegend = 'true';
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
