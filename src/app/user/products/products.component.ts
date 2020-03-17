import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../userservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productdata:any
  constructor(private userService: UserservicesService,private http: HttpClient) { }

  ngOnInit() {
    this.userService.getConfig().subscribe(
      product=>this.productdata=product
    )
  }
  

  headElements = ['ID', 'Name', 'Airport_Type', 'Icao_Code'];
}
