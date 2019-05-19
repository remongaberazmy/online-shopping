import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductReport } from './ProductReport';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductReport(month: number, year: number): Observable<ProductReport[]>{
    return this.http.get<ProductReport[]>("http://localhost:8080/store-web/api/product/monthly?month="+month+"&year="+year);
  }

  exportProductReportAsPDF(month: number, year: number): Observable<Blob>{
    return this.http.get<Blob>("http://localhost:8080/store-web/api/product/monthly/export?month="+month+"&year="+year, { responseType: 'blob' as 'json'});
  }
}
