import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequeteService } from '../../services/requete.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Requete } from '../../class/requete';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-query',
  templateUrl: './update-query.component.html',
  styleUrls: ['./update-query.component.css']
})
export class UpdateQueryComponent implements OnInit {
  queryForm: FormGroup;
  query: Requete = new Requete();

  constructor(
    private fb: FormBuilder,
    private queryService: RequeteService,
    public dialogRef: MatDialogRef<UpdateQueryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.query = { ...this.data };
    this.createForm();
  }

  createForm() {
    this.queryForm = this.fb.group({
      code_requete: [this.query.code_requete],
      date: [this.query.date],
      val_kpi: [this.query.val_kpi],
      val_kpi_alias: [this.query.val_kpi_alias],
      copr: [this.query.copr],
      date_image: [this.query.date_image]
    });
  }

  updateQuery() {

    this.query = { ...this.query, ...this.queryForm.value };

    this.queryService.updateRequete(this.query.id, this.query).subscribe(res => {
      this.toastr.success('Query modifiée', 'Success!');
      this.dialogRef.close();
      console.log(res);
    });
  }
}
