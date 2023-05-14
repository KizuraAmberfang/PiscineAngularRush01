import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';
import { Observable, catchError, take, throwError } from 'rxjs';

const httpOption: {
  headers: any;
  observe: any;
  params: any;
  responseType: any;
} = {
  headers: new HttpHeaders({
    Authorization: 'Client-ID ' + enviroment.access_key,
    'Content-Type': 'application/json',
  }),
  observe: 'response',
  params: 'HttpParams',
  responseType: 'json',
};

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  readonly baseUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) { }

  getImagesPage(page:number, per_page: number): Observable<any> {
    // console.log(httpOption.headers);
    return this.http.get('https://api.unsplash.com/photos?page=' + page + '&per_page=' + per_page, httpOption)
    .pipe(
      take(per_page),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
    // return this.http.get('https://fakestoreapi.com/products?limit=' + per_page);
  }

  getImagePerId(id: string) :Observable<any> {
    return this.http.get('https://api.unsplash.com/photos/' + id, httpOption)
    .pipe(
      take(1),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  }

}
