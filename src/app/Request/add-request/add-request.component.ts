import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Offre, Request} from '../../model/Offre';
import {OffreServiceService} from '../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
interface type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  disable:boolean=false
  type: type[] = [
    {value: 'confirmed', viewValue: 'confirmed'},
    {value: 'cancelled', viewValue: 'cancelled'},

  ];
  offreForm: FormGroup;
  request:Request
  pendingStatus:any
  id:any

  constructor(private fb: FormBuilder , private offreService :OffreServiceService,
              public dialogRef: MatDialogRef<AddRequestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.request = new Request()
    this. createform()
  }


  createform(){
    this.offreForm = this.fb.group({
      name: [''],
      expirationDate:[''],
      creationDate:[''],
      description:[''],
      type:[''],
      stateRequest:[''],
      budget:['']
    })
  }

  createEvent(){
    this. validateDates()
    this.request.name = this.offreForm.get('name').value
    this.request.description = this.offreForm.get('description').value
    this.request.expirationDate = this.offreForm.get('expirationDate').value
    this.request.creationDate = this.offreForm.get('creationDate').value
    this.request.type = this.offreForm.get('type').value
    this.request.budget = this.offreForm.get('budget').value
    this.request.stateRequest = this.offreForm.get('stateRequest').value
    this.offreService.addRequest(this.request).subscribe(res=>{
      this.toastr.success('Request Ajoutee', 'Success!');
      this.dialogRef.close();
      console.log(res)
    })


  }

  validateDates() {
    const creationDate = this.offreForm.get('creationDate')?.value;
    const expirationDate = this.offreForm.get('expirationDate')?.value;

    if (creationDate && expirationDate && creationDate < expirationDate) {
      this.disable=false
    } else {
      this.disable = true
    }
  }

}
