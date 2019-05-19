import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import {NumberPickerModule, NumberPickerService} from 'ng-number-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBarChartComponent } from './product-bar-chart/product-bar-chart.component';

import { ProductService } from './product.service';
import { ChartService } from './chart.service';
import { CustomNumberPickerService } from './CustomNumberPickerService';



@NgModule({
  declarations: [
    AppComponent,
    ProductBarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule,
    NumberPickerModule
  ],
  providers: [ProductService, ChartService, {provide: NumberPickerService, useClass: CustomNumberPickerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
