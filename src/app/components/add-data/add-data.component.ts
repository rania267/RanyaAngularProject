import { Component, Inject,OnInit } from '@angular/core';
import { Database } from '../../class/database';
import {FormBuilder, FormGroup} from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  databaseForm: FormGroup;
  database:Database
  pendingStatus:any
  disable:boolean=false
  id:any
 
  constructor(private fb: FormBuilder , private databaseService :DatabaseService,
              public dialogRef: MatDialogRef<AddDataComponent>,
              private dialog: MatDialog ,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.database = new Database()
    this. createform()
  }

  createform(){
    this.databaseForm = this.fb.group({

      name: [''],
      username:[''],
      password:[''],
      url:[''],
      host: [''],
      port: [''],

      system:['']
    })
  }
 
  createEvent(){
  
    this.database.id= this.databaseForm.get('id')?.value

    this.database.name = this.databaseForm.get('name')?.value
    this.database.username = this.databaseForm.get('username')?.value
    this.database.password = this.databaseForm.get('password')?.value
    this.database.port = this.databaseForm.get('port')?.value
    this.database.url = this.databaseForm.get('url')?.value
    this.database.system = this.databaseForm.get('system')?.value
    this.database.host = this.databaseForm.get('host')?.value

    this.databaseService.addDatabasee(this.database).subscribe(res=>{
      this.toastr.success('DataBase Ajoutée', 'Success!');
      this.dialogRef.close();
      console.log(res)
    })


  }
  databaseSystems = [
    { label: 'MySQL', value: 'mysql' },
    { label: 'Oracle', value: 'oracle' },
    { label: 'SqlServer', value: 'sqlserver' },
    { label: 'PostgreSQL', value: 'postgresql' },
    { label: 'MongoDB', value: 'mongodb' },

  ];
  testMySQLConnection() {
    const formData = this.databaseForm.value; 

    this.databaseService.testDatabaseConnection(formData).subscribe(
      result => {
        Swal.fire({
          title: 'Succès',
          text: 'Connexion établie',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error => {
        Swal.fire({
          title: 'Erreur',
          text: 'Erreur lors de la connexion ',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  openDialog(message: string, success: boolean): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message, success }
    });
  }
  
  testConnection() {
    const selectedSystem = this.databaseForm.get('system')?.value;

    switch (selectedSystem) {
      case 'mysql':
        this.testMySQLConnection();
        break;
      case 'oracle':
        this.testOracleConnection();
        break;
      case 'postgresql':
        this.testPostgresConnection();
        break;
        case 'mongodb':
          this.testMongodbConnection();
          break;
          case 'sqlserver':
            this.testSqlServerConnection();
            break;  
      default:
        console.log('Système de base de données non pris en charge');
        break;
    }
  
 

}
validateDates() {
  const creationDate = this.databaseForm.get('creation_date')?.value;
  const expirationDate = this.databaseForm.get('expiration_date')?.value;

  if (creationDate && expirationDate && creationDate < expirationDate) {
    this.disable=false
  } else {
    this.disable = true
  }
}
prepareFormData() {
  return {
    username: this.database.username,
    password: this.database.password,
    host: this.database.url,
    port: this.database.port
  };

}

testOracleConnection() {
  const formData = this.databaseForm.value; 
  
  this.databaseService.testDatabaseConnection(formData).subscribe(
    result => {
      Swal.fire({
        title: 'Succès',
        text: 'Connexion établie',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
    error => {
      Swal.fire({
        title: 'Erreur',
        text: 'Erreur lors de la connexion ',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  );
}

testPostgresConnection() {
  const formData = this.databaseForm.value; 
    this.databaseService.testDatabaseConnection(formData).subscribe(
      result => {
        Swal.fire({
          title: 'Succès',
          text: 'Connexion établie',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error => {
        Swal.fire({
          title: 'Erreur',
          text: 'Erreur lors de la connexion ',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
}


testMongodbConnection() {
  const formData = this.databaseForm.value; 
  this.databaseService.testDatabaseConnection(formData).subscribe(
    result => {
      Swal.fire({
        title: 'Succès',
        text: 'Connexion établie',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
    error => {
      if (error.status === 200) {
        Swal.fire({
          title: 'Erreur',
          text: 'Erreur lors de la connexion ',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        console.error(error);
      }
    }
  );
  }  
testSqlServerConnection() {
  const formData = this.databaseForm.value; 
    this.databaseService.testDatabaseConnection(formData).subscribe(
      result => {
        Swal.fire({
          title: 'Succès',
          text: 'Connexion établie',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error => {
        Swal.fire({
          title: 'Erreur',
          text: 'Erreur lors de la connexion  ',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
}

}