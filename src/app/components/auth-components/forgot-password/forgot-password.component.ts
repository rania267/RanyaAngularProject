import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../../../class/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  message!: string;
  email!: string;

  constructor(private http: HttpClient,private authService: AuthService) {}

  user: User = new User();
 
  resetPassword() {
    Swal.fire({
      title: 'Processing...',
      text: 'Please wait while we process your request.',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    this.authService.forgotPassword(this.email).subscribe(
      (response: any) => {
        console.log('Password reset request successful', response);

        Swal.fire({
          title: 'Success!',
          text: 'A PASSWORD RESET REQUEST HAS BEEN SENT. PLEASE CHECK YOUR INBOX FOR THE RESET LINK.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      (error: any) => {
        console.error('Password reset request failed', error);

        Swal.fire({
          title: 'Error!',
          text: error.error?.error || 'Password reset request failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
  
