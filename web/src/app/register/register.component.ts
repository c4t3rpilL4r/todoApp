import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
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

    const isSuccessful = this.userService.register(username, password);
    console.log(isSuccessful);
  }
}
