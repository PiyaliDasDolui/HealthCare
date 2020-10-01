import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Test } from './test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'User login';
  constructor(private authService: AuthService,
              private router: Router,
              private test: Test
    ) { }

  login(loginForm: NgForm): void {
    if (loginForm) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.passWord;

      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
  }

}
