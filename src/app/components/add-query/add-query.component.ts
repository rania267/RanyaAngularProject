import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteService } from '../../services/requete.service';
import { ToastrService } from 'ngx-toastr';
import { Kpi } from '../../class/kpi';
import { KpiService } from '../../services/kpi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent implements OnInit {
  requeteForm: FormGroup;
  kpiList: Kpi[] = [];

  constructor(
    private fb: FormBuilder,
    private kpiService: KpiService,
    private requeteService: RequeteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadKpiList();
  }

  createForm() {
    this.requeteForm = this.fb.group({
      code_requete: ['', Validators.required],
      date: [''],
      val_kpi: [''],
      val_kpi_alias: [''],
      copr: [''],
      date_image: ['']
    });
  }

  loadKpiList() {
    this.kpiService.getAllKpis().subscribe(
      (kpiList) => {
        this.kpiList = kpiList;
      },
      (error) => {
        console.error('Error getting KPI list:', error);
      }
    );
  }

  createQuery() {
    const newRequete = this.requeteForm.value;

    if (newRequete.val_kpi) {
      const selectedKpi = this.kpiList.find(kpi => kpi.id === newRequete.val_kpi);
      if (selectedKpi) {
        newRequete.kpi = selectedKpi;
        this.requeteService.createRequete(newRequete).subscribe(
          (response) => {
            this.toastr.success('Query ajoutée avec succès', 'Success!');
          },
          (error) => {
            this.toastr.error('Erreur lors de l\'ajout de la query', 'Error!');
            console.error('Error adding query:', error);
          }
        );
      } else {
        this.toastr.error('Veuillez sélectionner un KPI valide avant d\'ajouter la query', 'Error!');
      }
    } else {
      this.toastr.error('Veuillez sélectionner un KPI avant d\'ajouter la query', 'Error!');
    }
  }
}