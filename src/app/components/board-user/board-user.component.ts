import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-components/auth.service';
import { RegisterService } from '../auth-components/register-service/register.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content!: string;

  constructor(private userService: RegisterService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
