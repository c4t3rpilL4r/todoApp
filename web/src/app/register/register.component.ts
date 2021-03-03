import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  message: string;
  isSuccessful = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
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

    this.registerForm = this.formBuilder.group(config);
  }

  register() {
    const { username, password } = this.registerForm.value;

    this.isSuccessful = this.userService.register(username, password);

    if (this.isSuccessful) {
      this.message = 'Registration successful.';

      setTimeout(() => {
        this.router.navigate(['../login']);
      }, 2000);
    }
  }
}
