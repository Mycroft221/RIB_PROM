import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) { }
userId: string;
  ngOnInit() {
  }
  login() : void {
    if(this.userId == '1696383'){
     this.apiService.setUserId(this.userId);
     this.router.navigate(["hrqol"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
