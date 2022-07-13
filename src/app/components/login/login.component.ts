import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = '';
  password = '';

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

  doLogin(): void {
    console.log(this.login, this.password);
    
    console.log(this.login, this.password);
    if(this.service.login(this.login, this.password)) {
      this.router.navigate(['/heroes']);
    }else {
      alert('Login failed');
    }
  }

}
