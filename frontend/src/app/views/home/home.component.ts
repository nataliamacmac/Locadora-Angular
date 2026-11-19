import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Locadora de Veículos",
      icon: "home",
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

}
