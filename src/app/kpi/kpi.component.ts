// Import necessary modules and components
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Kpi } from '../class/kpi';
import { KpiService } from '../services/kpi.service';
import { MatDialog } from '@angular/material/dialog';
import { AddQueryComponent } from '../add-query/add-query.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UpdateKpiComponent } from '../update-kpi/update-kpi.component';
@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css'],
})
export class KpiComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
kpis: Kpi[] = []; 

  filterDatabases(): void {
    // Vérifier si this.searchText est défini et n'est pas une chaîne vide
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();
  
      // Filtrer les données basées sur la propriété 'name'
      this.dataSource = this.kpis.filter(database =>
        database.name_kpi.toLowerCase().includes(filterValue)
      );
    } else {
      // Si le champ de recherche est vide, réinitialiser la dataSource aux données d'origine
      this.dataSource = [...this.kpis];
    }
  }
  displayedColumns: string[] = [
    'name_kpi',
    'subject_area',
    'type',
    'seuil',
    'seuil_gap',
    'seuil_dataQuality',
    'actions',
  ];

  searchText: string = '';

  constructor(private kpiService: KpiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource([]);
  }

  openDialog() {
    this.dialog.open(AddQueryComponent);
  }

  ngOnInit(): void {
    this.kpiService.getAllKpis().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching KPIs', error);
      }
    );
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  edit(element: Kpi) {
    // Ouvrez le dialogue de modification et transmettez l'élément Kpi
    const dialogRef = this.dialog.open(UpdateKpiComponent, {
      width :'700px',
      height :'600px',
      data:element
    });

    // Réagissez à la fermeture du dialogue (si nécessaire)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAll()
    });
  }
  dataSource :any

  getAll(){
    this.kpiService.getAllKpis().subscribe(res=>{
      this.dataSource=res
      console.log(res)
    })
  }

  delete(element: Kpi): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: `Are you sure you want to delete the database ${element.name_kpi}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.kpiService.deleteKpi(element.id).subscribe(
          () => {
            console.log('Database deleted successfully');
            this.dataSource.data = this.dataSource.data.filter(item => item.id !== element.id);

          },
          error => {
            console.error('Error deleting database', error);
          }
        );
      }
    });
  }
kpi: Kpi[] = []; 

}
