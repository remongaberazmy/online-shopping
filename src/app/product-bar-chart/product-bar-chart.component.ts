import { Component, OnInit, Input } from '@angular/core';
import { ProductReport } from '../ProductReport';
import { ProductService } from '../product.service';
import { ChartService } from '../chart.service';
import * as Highcharts from 'highcharts';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-product-bar-chart',
  templateUrl: './product-bar-chart.component.html',
  styleUrls: ['./product-bar-chart.component.css']
})
export class ProductBarChartComponent implements OnInit {

  public productReports: ProductReport[];
  @Input() public month: number;
  @Input() public year: number;

  constructor(private productService: ProductService, private chartService: ChartService){}

  ngOnInit() {
    this.fetchData();
  }

  updateChart(){
    this.fetchData();
  }

  exportAsPDF(){
    this.productService.exportProductReportAsPDF(this.month, this.year).subscribe(
      blob => importedSaveAs(blob),
      error => console.log(error),
      () => console.log("Completed")
    );
  }

  fetchData(){
    this.productService.getProductReport(this.month, this.year).subscribe(
      data => {
        this.productReports = data;
        this.generateChart(this.productReports);
      },
      error => console.log(error),
      () => console.log("complete")
    )
  }

  generateChart(productReports: ProductReport[]){
    let names = new Array();
    let values = new Array();
    for(let productReport of productReports){
      names.push(productReport.name);
      values.push(productReport.quantity);
    }
    
    let chart = Highcharts.chart('chartContainer',{
      title: {
        text: "Online Shopping in month"
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
  }
}
