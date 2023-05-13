import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private http: HttpClient) { }

  getImagesPage(page:number, per_page: number) {
    // return this.http.get('../photos?page=' + page + '&per_page=' + per_page);
    return this.http.get('https://fakestoreapi.com/products?limit=' + per_page);
  }

  getImagePerId(id: number) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }

}
