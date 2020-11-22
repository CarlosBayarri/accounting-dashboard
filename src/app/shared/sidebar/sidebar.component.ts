import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }
  logOut() {
    this.AuthService.logOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
  ngOnInit() {
  }

}
