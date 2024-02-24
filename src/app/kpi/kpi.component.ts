import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Kpi } from '../class/kpi';
@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

   dataSource: MatTableDataSource<Kpi>;
  displayedColumns: string[] = ['id_kpi', 'name_kpi', 'subject_area', 'type', 'seuil', 'seuil_gap', 'seuil_dataQuality'];

  kpiData: Kpi[] = [
    // Sample data, replace with your actual data
    { id_kpi: 1, name_kpi: 'KPI 1', subject_area: 'Area 1', type: 'Type A', seuil: 10, seuil_gap: 2, seuil_dataQuality: 90 },
    { id_kpi: 2, name_kpi: 'KPI 2', subject_area: 'Area 2', type: 'Type B', seuil: 20, seuil_gap: 5, seuil_dataQuality: 80 },
    // Add more data as needed
  ];
  searchText: string = '';
  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
  constructor() {
    this.dataSource = new MatTableDataSource(this.kpiData);
  }

  ngOnInit(): void {
  }}
