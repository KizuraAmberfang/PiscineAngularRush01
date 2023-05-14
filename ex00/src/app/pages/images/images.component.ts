import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  image : any;
  id : string | null = null;
  breakpoints: number = 2;

  constructor(private imageService: UnsplashService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.innerWidth < 768 ? this.breakpoints = 1 : this.breakpoints = 2;
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.imageService.getImagePerId(this.id)
        .subscribe((res: any) => {
          this.image = res.body;
        });
  }

  download(url: string, fileName: string, username: string) {
    if (this.id)
    {
      this.imageService.downloadImg(url)
        .subscribe((res: any) => {
            const a: any = document.createElement('a');
            a.setAttribute('target', '_black');
            a.href = res.url;
            a.download = username + '-' + fileName + '-unsplash.jpeg';
            document.body.appendChild(a);
            a.style = 'display: none';
            a.click();
            console.log(a);
            a.remove();
          }
        )
    }
  };

  copy(str: string) {
    navigator.clipboard.writeText(str);
  };

  onResize(e: any) {
    e.target.innerWidth < 768 ? this.breakpoints = 1 : this.breakpoints = 2;
  }
}
