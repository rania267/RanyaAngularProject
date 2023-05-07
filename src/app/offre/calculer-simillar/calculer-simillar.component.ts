import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {OffreServiceService} from '../../services/offre-service.service';

@Component({
  selector: 'app-calculer-simillar',
  templateUrl: './calculer-simillar.component.html',
  styleUrls: ['./calculer-simillar.component.css']
})
export class CalculerSimillarComponent implements OnInit {
  requests:any
  offers:any
  requestSelected:any
  result:any
  offreSelected:any
  constructor(private OffreServiceService :OffreServiceService,public dialog: MatDialog,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getAlloffers()
    this.getAllRequest()
  }
  getAlloffers(){
    this.OffreServiceService.getOffres().subscribe(res=>{
      this.offers =res
      console.log(res)
    })
  }

  getAllRequest(){
    this.OffreServiceService.getRequests().subscribe(res=>{
      this.requests=res
      console.log(res)
    })
  }

  calculer(){
    this.OffreServiceService.similar(this.offreSelected,this.requestSelected).subscribe(res=>{
     this.result =res
    })

  }
}
