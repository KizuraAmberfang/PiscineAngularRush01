import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() data: any;

  show: boolean = false;

  constructor () {}

  ngOnInit(): void {
      
  }

  showButtons() {
    this.show = true;
  }

  hideButtons() {
    this.show = false;
  }

  download(url: string, fileName: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  }
}
