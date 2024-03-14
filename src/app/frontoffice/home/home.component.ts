
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../components/auth-components/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,public dialog: MatDialog,private toastr: ToastrService) { }

  logout(): void {
    this.authService.signOut();
    window.location.reload();  } 

  ngOnInit(): void {
  
  }
  
 
}
