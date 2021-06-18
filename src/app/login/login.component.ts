import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Role = Role;
  uname:string='';
  upwd:string='';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(role: Role) {
    if(role==1)
    {
      if((this.uname=='user1256') && (this.upwd=='user@1256'))
      {
        this.authService.login(role);
        this.router.navigate(['/']);
      }
      else{
        alert("Invalid credentials");
      }  
    }
    else
    {
      if((this.uname=='admin') && (this.upwd=='admin@1256'))
      {
        this.authService.login(2);
        this.router.navigate(['/']);
      }
      else
      {
        alert("Invalid credentials");
      }
    }
  }  

  logout() {
    this.authService.logout();
  }
}