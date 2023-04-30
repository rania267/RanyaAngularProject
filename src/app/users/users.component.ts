import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AddComponent } from './add/add.component';

export interface PeriodicElement {
  username: string;
  email: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'Hydrogen', email: "1.0079", password: '*******'},
  {username: 'Helium', email: "4.0026", password: '*******'},
  {username: 'Lithium', email: "6.941", password: '******'},
  {username: 'Beryllium', email: "9.0122", password: '******'},
  {username: 'Boron', email: "10.811", password: '******'},
  {username: 'Carbon', email: "12.0107", password: '******'},
  {username: 'Nitrogen', email: "14.0067", password: '*******'},
  {username: 'Oxygen', email: "15.9994", password: '*******'},
  {username: 'Fluorine', email: "18.9984", password: '*******'},
  {username: 'Neon', email: "20.1797", password: '*******'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'password','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(AddComponent);
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
