import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() data: any;

  show: boolean = false;

  constructor(private imageService: UnsplashService) {}

  ngOnInit(): void {
      
  }

  showButtons() {
    this.show = true;
  }

  hideButtons() {
    this.show = false;
  }

  download(url: string, username: string, fileName: string) {
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

  copy(str: string) {
    navigator.clipboard.writeText(str);
  }
}
