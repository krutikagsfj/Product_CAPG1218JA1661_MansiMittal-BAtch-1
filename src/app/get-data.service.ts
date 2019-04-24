import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }
  getProducts()
 {
   let url="assets/productBrands.json";
   return this.http.get(url);
 }
}
