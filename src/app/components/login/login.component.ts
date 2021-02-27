import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  loginFormError = null;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.authService.getAuthErrorStatus().subscribe((data) => {
      if(data) {
      this.loginFormError = data;
      }
    })
  }

  onSubmit() {
    const {username, password} = this.loginForm.value;
    this.authService.login(username, password);
  }
}
