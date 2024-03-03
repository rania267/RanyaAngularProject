import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { Database } from '../class/database';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-database',
  templateUrl: './update-database.component.html',
  styleUrls: ['./update-database.component.css']
})
export class UpdateDatabaseComponent implements OnInit {
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
      id:[this.data.id],

      name: [this.data.name],
      username:[this.data.username],
      password:[this.data.password],
      port:[this.data.port],
      url:[this.data.url],
      system:[this.data.system]

    })
  }

 
  updateEvent(){
  
    this.offre.id= this.offreForm.get('id')?.value

    this.offre.name = this.offreForm.get('name')?.value
    this.offre.username = this.offreForm.get('username')?.value
    this.offre.password = this.offreForm.get('password')?.value
    this.offre.port = this.offreForm.get('port')?.value
    this.offre.url = this.offreForm.get('url')?.value
    this.offre.system = this.offreForm.get('system')?.value

    this.offreService.updateDatabase(this.data.id,this.offre).subscribe(res=>{
      this.toastr.success('DataBase modifiée', 'Success!');
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
