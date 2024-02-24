import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {
  databases: any[]; // Replace 'any' with the actual type of your database objects
  message: string;

  constructor() {}

  ngOnInit(): void {
    // Fetch data from your service and assign it to 'databases'
  
  }

  confirmDelete(employeeId: number): void {
    // Handle delete logic here
    // You can use Angular services to make API calls for deletion
  }

  verifyConnection(employeeId: number): void {
    // Handle verify connection logic here
    // You can use Angular services to make API calls for verification
  }
}
