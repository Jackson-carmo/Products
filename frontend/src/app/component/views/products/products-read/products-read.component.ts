import { Component, OnInit } from '@angular/core';
import { Products } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Products[] = []

  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'valor', 'acoes'];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.products = response;
    })
  }
}
