import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequeteService } from '../services/requete.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Requete } from '../class/requete';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-update-query',
  templateUrl: './update-query.component.html',
  styleUrls: ['./update-query.component.css']
})
export class UpdateQueryComponent implements OnInit {
  queryForm: FormGroup;
  query: Requete = new Requete(); // Assuming Query is the class representing your data model

  constructor(
    private fb: FormBuilder,
    private queryService: RequeteService,
    public dialogRef: MatDialogRef<UpdateQueryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.query = new Requete();
    console.log("data", this.data);
    // Assuming data is an instance of the Query class
    this.createForm();
  }

  createForm() {
    this.queryForm = this.fb.group({
      code_requete: [this.data.code_requete],
      date: [this.data.date],
      val_kpi: [this.data.val_kpi],
      val_kpi_alias: [this.data.val_kpi_alias],
      copr: [this.data.copr],
      date_image: [this.data.date_image]
    });
  }

  updateQuery() {
    this.query.code_requete = this.queryForm.get('code_requete').value;
    this.query.date = this.queryForm.get('date').value;
    this.query.val_kpi = this.queryForm.get('val_kpi').value;
    this.query.val_kpi_alias = this.queryForm.get('val_kpi_alias').value;
    this.query.copr = this.queryForm.get('copr').value;
    this.query.date_image = this.queryForm.get('date_image').value;

    this.queryService.updateRequete(this.data.id, this.query).subscribe(res => {
      this.toastr.success('Query modifiée', 'Success!');
      this.dialogRef.close();
      console.log(res);
    });
  }
}
