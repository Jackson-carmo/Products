import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Products[]> {
    const url = `${this.baseUrl}`
    return this.http.get<Products[]>(url);
  }
}
