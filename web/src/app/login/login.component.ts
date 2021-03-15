import { Router } from '@angular/router';
import { AuthService } from '@app/services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const config = {
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    };

    this.loginForm = this.formBuilder.group(config);
  }

  login() {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).then(() => {
      this.router.navigate(['']);
    });
  }
}
