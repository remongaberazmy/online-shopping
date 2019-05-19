import { Injectable } from '@angular/core';
import { ProductReport } from './ProductReport';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  generateChart(productReports: ProductReport[]){
    let names: any[];
    let values: Number[];
    for(var productReport of productReports){
      names.push(productReport.name);
      values.push(productReport.quantity);
    }

    let chart = Highcharts.chart('chartContainer',{
      title: {
        text: "Basic Column Chart in Angular"
      },
      xAxis: {
        categories: names
      },
      series: [{
        type: "column",
        colorByPoint: true,
        data: values,
        showInLegend: false
      }]
    });
      
    chart.update;
  }
}
