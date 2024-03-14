import { Component, OnInit,  ViewChild } from '@angular/core';
import { RequeteService } from '../../services/requete.service';
import { Requete } from '../../class/requete';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UpdateQueryComponent } from '../update-query/update-query.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourcee.data.length;
    return numSelected === numRows;
  }
  selection = new SelectionModel<Requete>(true, []);
  dataSourcee = new MatTableDataSource<Requete>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSourcee.data.forEach((row) => this.selection.select(row));
  }
  requetes: Requete[] = [];
  dataSource: Requete[] = [];
  displayedColumns: string[] = ['select','code_requete', 'date', 'val_kpi', 'val_kpi_alias', 'actions'];
  searchText: string = '';

  constructor(
    private requeteService: RequeteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchRequetes();
  }

  filterRequetes(): void {
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();
      this.dataSource = this.requetes.filter(requete =>
        requete.val_kpi.toLowerCase().includes(filterValue) ||
        requete.val_kpi_alias.toLowerCase().includes(filterValue)
      );
    } else {
      this.dataSource = [...this.requetes];
    }
  }

  delete(element: Requete): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: `Are you sure you want to delete the query with ID ${element.id}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requeteService.deleteRequete(element.id).subscribe(
          () => {
            console.log('Query deleted successfully');
            this.fetchRequetes();
          },
          error => {
            console.error('Error deleting query', error);
          }
        );
      }
    });
  }
  edit(element: Requete): void {
    const dialogRef = this.dialog.open(UpdateQueryComponent, {
      width: '700px',
      height: '600px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchRequetes();
    });
  }
  fetchRequetes(): void {
    this.requeteService.getAllRequetes().subscribe(data => {
      this.requetes = data;
      this.dataSource = data;
    });
  }


}