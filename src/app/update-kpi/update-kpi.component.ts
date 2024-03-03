import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KpiService } from '../services/kpi.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Kpi } from '../class/kpi';
@Component({
  selector: 'app-update-kpi',
  templateUrl: './update-kpi.component.html',
  styleUrls: ['./update-kpi.component.css']
})
export class UpdateKpiComponent implements OnInit {
  kpiForm: FormGroup;
  kpi: Kpi = new Kpi(); // Assuming Kpi is the class representing your data model

  constructor(
    private fb: FormBuilder,
    private kpiService: KpiService,
    public dialogRef: MatDialogRef<UpdateKpiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

    this.kpi = new Kpi()

    console.log("data",this.data);
    // Assuming data is an instance of the Kpi class
    this.createForm();
  }

  createForm() {
    this.kpiForm = this.fb.group({
      name_kpi: [this.data.name_kpi],
      subject_area: [this.data.subject_area],
      type: [this.data.type],
      seuil: [this.data.seuil],
      seuil_gap: [this.data.seuil_gap],
      seuil_dataQuality: [this.data.seuil_dataQuality],
    });
  }

  updateKpi() {
    this.kpi.name_kpi = this.kpiForm.get('name_kpi').value;
    this.kpi.subject_area = this.kpiForm.get('subject_area').value;
    this.kpi.type = this.kpiForm.get('type').value;
    this.kpi.seuil = this.kpiForm.get('seuil').value;
    this.kpi.seuil_gap = this.kpiForm.get('seuil_gap').value;
    this.kpi.seuil_dataQuality = this.kpiForm.get('seuil_dataQuality').value;
  
    this.kpiService.updateKpi(this.data.id, this.kpi).subscribe(res => {
      this.toastr.success('Kpi modifié', 'Success!');
      this.dialogRef.close();
      console.log(res);
    });
  }
  
}
