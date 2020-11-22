import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  hidePass = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  getErrorMessage() {
    if (this.registrationForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.registrationForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  createUser() {
    if (this.registrationForm.invalid) return;
    const {name, email, password} = this.registrationForm.value;+Swal.fire({
      title: 'Loading...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this.authService.createUser(name, email, password).then(response => {
      console.log(response);
      Swal.close();
      this.router.navigate(['/'])
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
    this.registrationForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
    })
  }

}
