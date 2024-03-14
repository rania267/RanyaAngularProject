import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


import {MatDialog} from '@angular/material/dialog';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router ,public dialog: MatDialog,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.authService.getUser().roles;
    }
 
  
  }
  logout(): void {
    this.authService.signOut();
    
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.authService.saveToken(data.accessToken);
        this.authService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.authService.getUser().roles;
        
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


  offers:any
  requests:any
  requestSelected:any


}


