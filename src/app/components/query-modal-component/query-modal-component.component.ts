import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-query-modal-component',
  templateUrl: './query-modal-component.component.html',
  styleUrls: ['./query-modal-component.component.css']
})
export class QueryModalComponentComponent implements OnInit {
  @Input() query: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onCloseClick(): void {
    console.log('Close button clicked'); 
    this.activeModal.close();
  }
}
