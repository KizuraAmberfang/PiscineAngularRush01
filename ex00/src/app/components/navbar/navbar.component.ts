import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor (private router: Router) {}

  value : string = "";
  
  onKeyEnterEvent(e : any) {
    this.router.navigate(['/search'], {queryParams: {q : e.target.value}});
  }

  ngOnInit(): void {
  }

}