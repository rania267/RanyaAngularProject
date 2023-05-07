import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Offre} from '../../model/Offre';
import {OffreServiceService} from '../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {


  offreForm: FormGroup;
  offre:Offre
  pendingStatus:any
  id:any

  constructor(private fb: FormBuilder , private offreService :OffreServiceService,
              public dialogRef: MatDialogRef<UpdateOffreComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.offre = new Offre()
    this. createform()
    console.log("data",this.data)

  }


  createform(){
    this.offreForm = this.fb.group({
      name: [this.data.name],
      expiration_date:[this.data.expiration_date],
      creation_date:[this.data.creation_date],
      description:[this.data.description],
      orderPrice:[this.data.orderPrice]
    })
  }

  updateEvent(){
    this.offre.name = this.offreForm.get('name').value
    this.offre.description = this.offreForm.get('description').value
    this.offre.expiration_date = this.offreForm.get('expiration_date').value
    this.offre.creation_date = this.offreForm.get('expiration_date').value
    this.offre.orderPrice = this.offreForm.get('orderPrice').value
    this.offreService.updateOffre(this.offre ,this.data.id).subscribe(res=>{
      this.toastr.success('Request Ajoutee', 'Success!');
      this.dialogRef.close();
      console.log(res)
    })


  }

}
