import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';


@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {

  constructor(private srvis :GetDataService) {
  }
  data1;
  ngOnInit() {
      this.srvis.getProducts().subscribe(res=>{
          this.data1=res;
          console.log(res);
      })
 }
}
