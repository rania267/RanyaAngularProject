import { Component, OnInit, ViewChild } from '@angular/core';
import { RequeteService } from '../../services/requete.service';
import { Requete } from '../../class/requete';
import { DatabaseService } from '../../services/database.service';
import { Database } from '../../class/database';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDatabaseComponent } from '../update-database/update-database.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {
  databases: Database[] = [];
  dataSource: MatTableDataSource<Database>;
  selection = new SelectionModel<Database>(true, []);
  searchText: string = '';

  displayedColumns: string[] = ['select', 'name', 'username', 'password', 'port', 'system', 'url', 'verify_connection', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private requeteService: RequeteService,
    private databaseService: DatabaseService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Database>([]);
  }

  ngOnInit(): void {
    this.fetchDatabases();
  }
  private handleConnectionResult(result: string): void {
    this.toastr.success(`Connection established successfully. Result: ${result}`, 'Success!');
  }

  private handleConnectionError(error: any): void {
    this.toastr.error(`Error verifying database connection. Details: ${error}`, 'Error');
  }
  verifyConnection(databaseId: number, databaseType: string): void {
    if (databaseType === 'mysql') {
      this.databaseService.verifyMySQLConnectionn(databaseId).subscribe(
        result => this.handleConnectionResult(result),
        error => this.handleConnectionError(error)
      );
    } else if (databaseType === 'PostgreSQL') {
      this.databaseService.verifyPostgresConnectionn(databaseId).subscribe(
        result => this.handleConnectionResult(result),
        error => this.handleConnectionError(error)
      );
    } else if (databaseType === 'Oracle') {
      this.databaseService.verifyOracleConnectionn(databaseId).subscribe(
        result => this.handleConnectionResult(result),
        error => this.handleConnectionError(error)
      );
    } else if (databaseType === 'MongoDB') {
      this.databaseService.verifyMongoDBConnectionn(databaseId).subscribe(
        result => this.handleConnectionResult(result),
        error => this.handleConnectionError(error)
      );
    }
  }
  fetchDatabases(): void {
    this.databaseService.getAllDb().subscribe(data => {
      this.databases = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  filterDatabases(): void {
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();

      this.dataSource.data = this.databases.filter(database =>
        database.name.toLowerCase().includes(filterValue)
      );
    } else {
      this.dataSource.data = [...this.databases];
    }
  }

  private openResultDialog(message: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Connection Verification Result',
        message: message
      }
    });
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

  edit(element: any): void {
    let dialogRef = this.dialog.open(UpdateDatabaseComponent, {
      width: '700px',
      height: '600px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchDatabases();
    });
    console.log(element);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
}
