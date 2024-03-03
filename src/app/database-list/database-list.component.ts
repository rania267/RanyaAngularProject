import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { Requete } from '../class/requete';
import { DatabaseService } from '../services/database.service';
import { Database } from '../class/database';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDatabaseComponent } from '../update-database/update-database.component';
@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {
  databases: Database[] = []; 

  filterDatabases(): void {
    // Vérifier si this.searchText est défini et n'est pas une chaîne vide
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();
  
      // Filtrer les données basées sur la propriété 'name'
      this.dataSource = this.databases.filter(database =>
        database.name.toLowerCase().includes(filterValue)
      );
    } else {
      // Si le champ de recherche est vide, réinitialiser la dataSource aux données d'origine
      this.dataSource = [...this.databases];
    }
  }
  delete(element: Database): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: `Are you sure you want to delete the database ${element.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.databaseService.deleteDatabase(element.id).subscribe(
          () => {
            console.log('Database deleted successfully');
            this.fetchDatabases();
          },
          error => {
            console.error('Error deleting database', error);
          }
        );
      }
    });
  }
  fetchDatabases(): void {
    this.databaseService.getAllDb().subscribe(data => {
      this.databases = data;
      this.dataSource = data;
    });
  }
  edit(element :any){
    let dialogRef =  this.dialog.open(UpdateDatabaseComponent,{
      width :'700px',
      height :'600px',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      this.fetchDatabases()
    });
    console.log(element)
  }
  constructor(private requeteService: RequeteService,private databaseService:DatabaseService,private dialog: MatDialog) { }
  dataSource: Database[] = []; // Assuming dataSource is of type Requete[]
  displayedColumns: string[] = ['name', 'username', 'password', 'port', 'system', 'url', 'verify_connection', 'actions'];
  searchText: string = '';
  ngOnInit(): void {
    this.databaseService.getAllDb().subscribe(data => {
      this.databases = data;
      this.dataSource = data; // Assuming your dataSource should contain the same data as databases
    });
  }
}