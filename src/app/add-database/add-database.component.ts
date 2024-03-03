import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-database',
  templateUrl: './add-database.component.html',
  styleUrls: ['./add-database.component.css']
})
export class AddDatabaseComponent implements OnInit {
  databaseForm: FormGroup;
  message: string;
  verificationResult: string;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private databaseService: DatabaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.databaseForm = this.formBuilder.group({
      selectDatabase: ['', Validators.required],
      selectSQLDatabase: [''],
      selectNoSQLDatabase: ['']
    });
  }

  verifySQLConnection() {
    if (this.databaseForm.valid) {
      const formData = this.databaseForm.value;
  
      // Check if the database URL is provided
      if (formData.selectDatabase === 'SQL' && !formData.selectSQLDatabase) {
        this.verificationResult = 'Please select a SQL database.';
        this.toastr.error(this.verificationResult, 'Error');
        return;
      }
  
      // ... (Other checks if needed)
      this.databaseService.testDatabaseConnection().subscribe(
        (result: any) => {
          if (result.includes('successful')) {
            this.verificationResult = result || 'Connection successful';
            this.toastr.success(this.verificationResult, 'Success');
            // Other logic...
          } else {
            console.error('Unexpected response format:', result);
            this.verificationResult = result || 'Failed to verify connection: Unexpected response format';
            this.toastr.error(this.verificationResult, 'Error');
          }
        },
        (error: any) => {
          console.error('Error verifying connection:', error);
          this.verificationResult = 'Failed to verify connection: ' + (error.message || 'Unknown error');
          this.toastr.error(this.verificationResult, 'Error');
        }
      );
      
      
    }
  }
  
  
  
  addDatabase(formData: any, databaseType: string) {
    this.databaseService.addDatabase(formData, databaseType).subscribe(
      data => {
        console.log(data);
        this.message = 'Database added successfully!';
      },
      error => {
        console.error(error);
        this.message = 'Error adding database.';
      }
    );
  }

  add() {
    this.verifySQLConnection();
    let dialogRef = this.dialog.open(AddDataComponent, {
      width: '800px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Add logic to handle the result if necessary.
    });
  }

  selectChange() {
    // Add logic for change in the selected database type.
  }

  toggleForm() {
    // Add logic to toggle between different form options if necessary.
  }
}
