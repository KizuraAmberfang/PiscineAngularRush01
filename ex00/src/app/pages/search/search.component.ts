import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  images : any;
  page: number = 1;
  per_page: number = 10;
  paginatorLen : number = this.per_page * 10;
  search: string | null = null;
  breakpoints: number = 5;

  constructor(
    private imageService: UnsplashService,
    private route: ActivatedRoute,
  ) {
    route.queryParamMap.subscribe(params => {
      this.search = params.get('q');
      this.getImagesPage(this.page, this.per_page);
    });
  }

  ngOnInit() {
    this.page = 1,
    this.per_page = 10
    this.paginatorLen = this.per_page * 10;
    this.breakpoints = window.innerWidth / 400;
    this.route.queryParamMap
      .subscribe((params) => {
        this.search = params.get('q');
      });
    this.getImagesPage(this.page, this.per_page);
  }

  getImagesPage(page : number, per_page: number) {
    if (this.search)
      this.imageService.getImagesSearch(page, per_page, this.search)
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
