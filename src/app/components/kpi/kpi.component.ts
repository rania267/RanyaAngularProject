import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Kpi } from '../../class/kpi';
import { KpiService } from '../../services/kpi.service';
import { MatDialog } from '@angular/material/dialog';
import { AddQueryComponent } from '../add-query/add-query.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UpdateKpiComponent } from '../update-kpi/update-kpi.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css'],
})
export class KpiComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  kpis: Kpi[] = [];
  dataSource: MatTableDataSource<Kpi>;
  displayedColumns: string[] = [
    'select',
    'name_kpi',
    'subject_area',
    'type',
    'seuil',
    'seuil_gap',
    'seuil_dataQuality',
    'archived',
    'actions',
  ];
  searchText: string = '';
  selection = new SelectionModel<Kpi>(true, []);

  constructor(private kpiService: KpiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource([]);
  }

  openDialog() {
    this.dialog.open(AddQueryComponent);
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
  ngOnInit(): void {
    this.kpiService.getAllKpis().subscribe(
      (data) => {
        this.kpis = data;  
        this.dataSource = new MatTableDataSource(this.kpis);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching KPIs', error);
      }
    );
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  moveToTrash(): void {
    const selectedKpis = this.selection.selected;

    if (selectedKpis.length === 0) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Move to Trash',
        message: `Are you sure you want to move the selected KPIs to the trash?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const ids = selectedKpis.map((kpi) => kpi.id);
        this.kpiService.moveToTrash(ids).subscribe(
          () => {
            console.log('KPIs moved to trash successfully');
            this.selection.clear();
            this.getAll();
          },
          (error) => {
            console.error('Error moving KPIs to trash', error);
          }
        );
      }
    });
  }

  edit(element: Kpi) {
    const dialogRef = this.dialog.open(UpdateKpiComponent, {
      width: '700px',
      height: '600px',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getAll();
    });
  }

  getAll() {
    this.kpiService.getAllKpis().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  delete(element: Kpi): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: `Are you sure you want to delete the KPI ${element.name_kpi}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.kpiService.deleteKpi(element.id).subscribe(
          () => {
            console.log('KPI deleted successfully');
            this.dataSource.data = this.dataSource.data.filter(
              (item) => item.id !== element.id
            );
          },
          (error) => {
            console.error('Error deleting KPI', error);
          }
        );
      }
    });
  }

  filterDatabases(): void {
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();
    
      this.dataSource.data = this.kpis.filter(kpi =>
        kpi.name_kpi.toLowerCase().includes(filterValue)
      );
    } else {
      this.dataSource.data = [...this.kpis];
    }
  }
}
