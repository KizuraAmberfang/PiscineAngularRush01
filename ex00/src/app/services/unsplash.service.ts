import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../enviroment/enviroment';
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
    return this.http.get('https://api.unsplash.com/photos?order_by=popular&page=' + page + '&per_page=' + per_page, httpOption)
    .pipe(
      take(per_page),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  }

  getImagesSearch(page:number, per_page: number, search: string): Observable<any> {
    return this.http.get('https://api.unsplash.com/photos/random?query=' + search + '&count=' + per_page, httpOption)
    .pipe(
      take(per_page),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  }

  getImagesToday(page:number, per_page: number): Observable<any> {
    return this.http.get('https://api.unsplash.com/photos?order_by=latest&per_page=' + per_page + '&page=' + page, httpOption)
    .pipe(
      take(per_page),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  }

  getImagePerId(id: string) : Observable<any> {
    return this.http.get('https://api.unsplash.com/photos/' + id, httpOption)
    .pipe(
      take(1),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  }

  downloadImg(url: string) : Observable<any> {
    return this.http.get(url + '&client_id=' + enviroment.access_key)
    .pipe(
      take(1),
      catchError((err) => {
        return throwError(() => 
          console.log(err));
      })
    );
  } 
}
