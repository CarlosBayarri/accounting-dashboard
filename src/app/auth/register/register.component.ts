import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  hidePass = true;
  loading: boolean = false;
  uiSubscription: Subscription;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  getErrorMessage() {
    if (this.registrationForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.registrationForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  createUser() {
    if (this.registrationForm.invalid) return;
    this.store.dispatch(actions.isLoading());
    const {name, email, password} = this.registrationForm.value;
    this.authService.createUser(name, email, password).then(response => {
      console.log(response);
      this.store.dispatch(actions.stopLoading());
      this.router.navigate(['/'])
    }).catch(err => {
      console.error(err);
      this.store.dispatch(actions.stopLoading());
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    })
  }
  ngOnInit() {

    this.uiSubscription = this.store.select('ui').subscribe(ui => this.loading = ui.isLoading);

    this.registrationForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
    })
  }
  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }
}
