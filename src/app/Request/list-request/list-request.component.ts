import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {ConfirmationComponent} from '../../confirmation/confirmation.component';
import {UpdateOffreComponent} from '../../offre/update-offre/update-offre.component';
import {AddOffreComponent} from '../../offre/add-offre/add-offre.component';
import {OffreServiceService} from '../../services/offre-service.service';
import {UpdateRequestComponent} from '../update-request/update-request.component';
import {AddRequestComponent} from '../add-request/add-request.component';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  displayedColumns: string[] = [ 'Name','description','Date','expiration','status','budget', 'actions'];
  dataSource :any
  constructor(private OffreServiceService :OffreServiceService,public dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.OffreServiceService.getRequests().subscribe(res=>{
      this.dataSource=res
    })
  }
  delete(element: any) {
    let dialogRef =  this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.OffreServiceService.deleteRequest(element.id).subscribe(res=>{
          console.log("done")
        })
      }
      else console.log('nope');
    });
  }

  edit(element :any){
    let dialogRef =  this.dialog.open(UpdateRequestComponent,{
      width :'700px',
      height :'800px',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
    console.log(element)
  }
  add(){
    let dialogRef =  this.dialog.open(AddRequestComponent,{
      width :'700px',
      height :'800px',

    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
  }

}
