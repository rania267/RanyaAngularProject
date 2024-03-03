import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Kpi } from '../class/kpi';
import { KpiService } from '../services/kpi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-kpi',
  templateUrl: './add-kpi.component.html',
  styleUrls: ['./add-kpi.component.css']
})
export class AddKpiComponent implements OnInit {
  searchText: string = ''; 
  newKpi: any = {};
  steps = ['Add KPI', 'First Query', 'Second Query', 'Validation']; 
  currentStep = 1;  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }
  addKpi(): void {
    // Call your KpiService to add the new KPI
    this.kpiService.addKpi(this.newKpi).subscribe(
      (response) => {
        // Display a success message with SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'KPI ajoutée avec succès',
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            // If the user clicks "Ok," navigate to the KPI list page
            this.router.navigate(['/kpi']); // Redirect to the KPI list page
          }
        });
  
        console.log('KPI added successfully:', response);
      },
      (error) => {
        // Handle error, e.g., show an error message
        console.error('Error adding KPI:', error);
      }
    );
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  dataSource: MatTableDataSource<Kpi>;
  displayedColumns: string[] = ['id_kpi', 'name_kpi', 'subject_area', 'type'];

  kpiData: Kpi[] = [
    // Sample data, replace with your actual data
    { id: 1, name_kpi: 'KPI 1', subject_area: 'Area 1', type: 'Type A', seuil: 10, seuil_gap: 2, seuil_dataQuality: 90 },
    { id: 2, name_kpi: 'KPI 2', subject_area: 'Area 2', type: 'Type B', seuil: 20, seuil_gap: 5, seuil_dataQuality: 80 },
    // Add more data as needed
  ];
  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
  constructor(private router: Router,  private kpiService: KpiService) {
    this.dataSource = new MatTableDataSource(this.kpiData);
  }

  ngOnInit(): void {
  }}
