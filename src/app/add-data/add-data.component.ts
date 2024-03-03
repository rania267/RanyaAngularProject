import { Component, Inject,OnInit } from '@angular/core';
import { Database } from '../class/database';
import {FormBuilder, FormGroup} from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  offreForm: FormGroup;
  offre:Database
  pendingStatus:any
  disable:boolean=false
  id:any
 
  constructor(private fb: FormBuilder , private offreService :DatabaseService,
              public dialogRef: MatDialogRef<AddDataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.offre = new Database()
    this. createform()
  }

  createform(){
    this.offreForm = this.fb.group({
      id: [''],

      name: [''],
      username:[''],
      password:[''],
      url:[''],
      system:['']
    })
  }
 
  createEvent(){
  
    this.offre.id= this.offreForm.get('id')?.value

    this.offre.name = this.offreForm.get('name')?.value
    this.offre.username = this.offreForm.get('username')?.value
    this.offre.password = this.offreForm.get('password')?.value
    this.offre.port = this.offreForm.get('port')?.value
    this.offre.url = this.offreForm.get('url')?.value
    this.offre.system = this.offreForm.get('system')?.value

    this.offreService.addDatabasee(this.offre).subscribe(res=>{
      this.toastr.success('DataBase Ajoutée', 'Success!');
      this.dialogRef.close();
      console.log(res)
    })


  }

  validateDates() {
    const creationDate = this.offreForm.get('creation_date')?.value;
    const expirationDate = this.offreForm.get('expiration_date')?.value;

    if (creationDate && expirationDate && creationDate < expirationDate) {
      this.disable=false
    } else {
      this.disable = true
    }
  }

}
