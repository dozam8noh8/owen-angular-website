import { Component, OnInit } from '@angular/core';


export interface navType {
  title: string, 
  route: string,
  }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  navOptions: navType[] = [
    {title: "Home", route: ''},
    {title: "About Me", route: 'aboutme'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
