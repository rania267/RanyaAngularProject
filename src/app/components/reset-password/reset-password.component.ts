import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth-components/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent  {

  token: string = '';
  password: string = '';
  message: string = ''; 
  constructor(
    private route: ActivatedRoute,
    private passwordResetService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }

  resetPassword(): void {
    this.passwordResetService.resetPassword(this.token, this.password).subscribe(
      (response) => {
        // Gérer la réponse du backend, par exemple, afficher un message de réussite.
        console.log('Password reset successful', response);
      },
      (error) => {
        // Gérer les erreurs, par exemple, afficher un message d'erreur.
        console.error('Password reset failed', error);
      }
    );
  }
}