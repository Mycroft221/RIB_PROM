import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) { }
  ngOnInit() {
  }

  hrqol() : void {
    this.router.navigate(['hrqol']);
  }

  cat() : void {
    this.router.navigate(['cat']);
  }

  economic() : void {
    this.router.navigate(['economic']);
  }

  gos() : void {
    this.router.navigate(['gos']);
  }

  psychosocial() : void {
    this.router.navigate(['psychosocial']);
  }

  respiratoryFL() : void {
    this.router.navigate(['respiratoryFL']);
  }

  respiratoryS(): void {
    this.router.navigate(['respiratoryS']);
  }
}
