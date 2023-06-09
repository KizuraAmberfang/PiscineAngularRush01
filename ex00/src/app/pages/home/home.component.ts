import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UnsplashService} from '../../services/unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    this.getImagesPage(this.page, this.per_page);
  }

  getImagesPage(page : number, per_page: number) {
    this.imageService.getImagesPage(page, per_page)
    .subscribe((res: any) => {
      this.images = res.body;
    })
  }

  changePage(e: PageEvent) {
    this.page = e.pageIndex;
    this.per_page = e.pageSize;
    this.paginatorLen = this.per_page * 10;
    this.getImagesPage(this.page, this.per_page);
  }

  onResize(e : any) {
    this.breakpoints = e.target.innerWidth / 400;
  }
}
