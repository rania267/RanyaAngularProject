import { ToastrService } from 'ngx-toastr';
import { AddDataComponent } from '../add-data/add-data.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-database',
  templateUrl: './add-database.component.html',
  styleUrls: ['./add-database.component.css']
})
export class AddDatabaseComponent {
  postgresResult: string;
  mysqlResult: string;
  oracleResult: string;
  mongodbResult: string;

  constructor(private formBuilder: FormBuilder, private verificationService: DatabaseService,
    private toastr: ToastrService,
    private dialog: MatDialog) { }
    openAddDataDialog() {
      const dialogRef = this.dialog.open(AddDataComponent, {
        width: '800px',
        height: '600px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The AddDataComponent was closed', result);
      });
    }
    verifyPostgresConnection() {
      this.verificationService.verifyPostgresConnection().subscribe(
        result => {
          this.postgresResult = result;
          this.openAddDataDialog(); 
        },
        error => {
          this.postgresResult = 'Erreur lors de la vérification PostgreSQL';
        }
      );
    }


    verifyMongoDBConnection() {{
      this.verificationService.verifyMongoDBConnection().subscribe(
        result => {
          this.mongodbResult = result;
          this.toastr.success('Connexion MongoDB établie', 'Succès!');
          this.openAddDataDialog(); 
        },
        error => {
          this.mongodbResult = 'Erreur lors de la vérification MongoDB';
          this.toastr.error('Erreur lors de la vérification MongoDB', 'Erreur');
        }
      );
    }}
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
    verifyMySQLConnection() {
      this.verificationService.verifyMySQLConnection().subscribe(
        result => {
          this.mysqlResult = result;
          this.toastr.success('Connexion MySQL établie', 'Succès!');
          this.openAddDataDialog(); 
        },
        error => {
          this.mysqlResult = 'Erreur lors de la vérification MySQL';
          this.toastr.error('Erreur lors de la vérification MySQL', 'Erreur');
        }
      );
    }     databaseForm: FormGroup;
    message: string;
    verificationResult: string;
    verifyOracleConnection() {
      this.verificationService.verifyOracleConnection().subscribe(
        result => {
          this.oracleResult = result;
          this.toastr.success('Connexion Oracle établie', 'Succès!');
          this.openAddDataDialog();
        },
        error => {
          this.oracleResult = 'Erreur lors de la vérification Oracle';
          this.toastr.error('Erreur lors de la vérification Oracle', 'Erreur');
        }
      );
    }
}
