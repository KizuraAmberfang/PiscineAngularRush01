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

  constructor(private imageService: UnsplashService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.imageService.getImagePerId(this.id)
        .subscribe((res: any) => {
        this.image = res.body;
        });
  }
}
