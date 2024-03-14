import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Kpi } from '../../class/kpi';
import { KpiService } from '../../services/kpi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatabaseService } from '../../services/database.service';
import { Requete } from '../../class/requete';
import { Database } from '../../class/database';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryModalComponentComponent } from '../query-modal-component/query-modal-component.component';

@Component({
  selector: 'app-add-kpi',
  templateUrl: './add-kpi.component.html',
  styleUrls: ['./add-kpi.component.css']
})
export class AddKpiComponent implements OnInit {
  searchText: string = '';
  newKpi: any = {};
  steps = ['Add KPI', 'First Query', 'Second Query', 'Validation'];
  currentStep = 1;
  queryForm: Requete = {
    id: 1,
    code_requete: 123,
    date: '2024-03-11',
    val_kpi: 'Some value',
    val_kpi_alias: 'Alias value',
    copr: 'Copr value',
    date_image: '2024-03-11',
    dims: [],
    id_databasee: {} as Database,
    name_database: {} as Database,
    kpi: {} as Kpi,
    body: '',
    alias: '' 
  };

  dataSource: MatTableDataSource<Kpi>;
  displayedColumns: string[] = ['id_kpi', 'name_kpi', 'subject_area', 'type'];

  kpiData: Kpi[] = [
    { id: 1, name_kpi: 'KPI 1', subject_area: 'Area 1', type: 'Type A', seuil: 10, seuil_gap: 2, seuil_dataQuality: 90, isArchived: false, isPermanentlyDeleted: false },
    { id: 2, name_kpi: 'KPI 2', subject_area: 'Area 2', type: 'Type B', seuil: 20, seuil_gap: 5, seuil_dataQuality: 80, isArchived: false, isPermanentlyDeleted: false },
  ];

  constructor(private router: Router, private kpiService: KpiService, private databaseService: DatabaseService, private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.kpiData);
  }

  ngOnInit(): void {
    this.loadDatabasesByType();
  }

  onSubmitFirstQuery(): void {
    this.kpiService.addFirstQuery(this.queryForm).subscribe(
      (response) => {
        console.log('First query added successfully:', response);

     
        this.nextStep();
      },
      (error) => {
        console.error('Error adding first query:', error);
      }
    );
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  addKpi(): void {
    this.kpiService.addKpi(this.newKpi).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'KPI ajoutée avec succès',
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/kpi']); 
          }
        });

        console.log('KPI added successfully:', response);
      },
      (error) => {
        console.error('Error adding KPI:', error);
      }
    );
  }

  element: any;
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  createQuery(): string {
  
    const database = this.queryForm.id_databasee.name;
    const valKPI = this.queryForm.val_kpi;
    const as = this.queryForm.val_kpi_alias; 
    const body = this.queryForm.body; 
    const dimensions = this.queryForm.dims.map(dim => dim.val_dim).join(', '); 
    const alias = this.queryForm.alias; 

    const query = `SELECT ${valKPI} AS ${as} FROM ${database} WHERE ${body} GROUP BY ${dimensions}`;

    return query;
  }

  seeQuery() {
    const query = this.createQuery();

    const formattedQuery = query.split('\n').map(line => `<div>${line}</div>`).join('');

    Swal.fire({
      title: 'Query',
      html: `<div style="white-space: pre-line;">${formattedQuery}</div>`,
      icon: 'info',
      confirmButtonText: 'Close',
      customClass: {
        container: 'custom-swal-container',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-html-container',
      },
    });
  }

  getDatabaseListByType(): string[] {
    return this.newKpi.databases || [];
  }

  onDatabaseTypeChange(): void {
    this.newKpi.selectedDatabase = '';
  }

  showDateRangeDialog() {
    Swal.fire({
      title: 'Query',
      html: `
        <label for="start">Start Date:</label>
        <input type="date" id="start" class="swal2-input" required>

        <label for="end">End Date:</label>
        <input type="date" id="end" class="swal2-input" required>
      `,
      showCancelButton: true,
      confirmButtonText: 'See Results',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const startInput = document.getElementById('start') as HTMLInputElement;
        const endInput = document.getElementById('end') as HTMLInputElement;

        if (!startInput.value || !endInput.value) {
          Swal.showValidationMessage('Please select both start and end dates');
        }

        this.executeQuery(startInput.value, endInput.value);
      },
    });
  }

  executeQuery(startDate, endDate) {
    const query = 'SELECT * FROM your_table WHERE date BETWEEN ? AND ?';

    Swal.fire({
      title: 'Query Result',
      html: `<pre>${query}</pre><br><strong>Start Date *:</strong> ${startDate}<br><strong>End Date *:</strong> ${endDate}`,
      icon: 'success',
    });
  }



  openQueryModal(query: string): void {
    const modalRef = this.modalService.open(QueryModalComponentComponent, {
      size: 'md', 
      centered: true,
      backdrop: 'static',
    });

    modalRef.componentInstance.query = query;
  }

  loadDatabasesByType(): void {
    if (this.newKpi.databaseType === 'mysql') {
      this.databaseService.getMySQLDatabases().subscribe((data) => {
        this.newKpi.databases = data;
      });
    } else if (this.newKpi.databaseType === 'oracle') {
      this.databaseService.getOracleDatabases().subscribe((data) => {
        this.newKpi.databases = data;
      });
    } else if (this.newKpi.databaseType === 'postgres') {
      this.databaseService.getPostgresDatabases().subscribe((data) => {
        this.newKpi.databases = data;
      });
    }
  }
}
