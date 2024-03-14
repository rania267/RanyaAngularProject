import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Kpi } from '../../class/kpi';
import { KpiService } from '../../services/kpi.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Kpi>;

  // ... autres propriétés

  displayedColumns: string[] = [
    'name_kpi',
    'subject_area',
    'type',
    'seuil',
    'seuil_gap',
    'seuil_dataQuality',
    'actions', 
  ];

  constructor(private kpiService: KpiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.getArchivedKpis();
  }

  getArchivedKpis() {
    this.kpiService.getArchivedKpis().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching archived KPIs', error);
      }
    );
  }

  restoreKpi(element: Kpi) {

  }

  deletePermanently(element: Kpi) {

  }
}