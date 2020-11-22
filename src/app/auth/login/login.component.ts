import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hidePass: boolean = true;

  constructor(private fb: FormBuilder, private AuthService: AuthService, private router: Router) { }

  getErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  loginUser() {
    if (this.loginForm.invalid) return;
    const {email, password} = this.loginForm.value;
    Swal.fire({
      title: 'Loading...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this.AuthService.loginUser(email, password).then(response => {
      console.log(response);
      Swal.close();
      this.router.navigate(['/home'])
    }).catch(err => {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    })
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
    })
  }

}
