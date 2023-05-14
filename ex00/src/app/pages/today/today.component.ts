import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  images : any;
  page: number = 1;
  per_page: number = 10;
  paginatorLen : number = this.per_page * 10;
  breakpoints: number = 5;

  constructor(
    private imageService: UnsplashService
  ) {}

  ngOnInit() {
    this.page = 1,
    this.per_page = 10
    this.paginatorLen = this.per_page * 10;
    this.breakpoints = window.innerWidth / 400;
    this.getImagesPage();
  }

  getImagesPage() {
    this.imageService.getImagesToday(this.page, this.per_page)
    .subscribe((res: any) => {
      console.log(res);
      this.images = res.body;
    })
  }

  changePage(e: PageEvent) {
    this.page = e.pageIndex;
    this.per_page = e.pageSize;
    this.paginatorLen = this.per_page * 10;
    this.getImagesPage();
  }

  onResize(e : any) {
    this.breakpoints = e.target.innerWidth / 400;
  }
}
