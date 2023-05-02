import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ContractService } from '../services/contract.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {



  newContract: Contract = new Contract();
  submitted = false;
  
  constructor(private contratService: ContractService,
  private router: Router) { }
  
  ngOnInit() {
  }
  
  onSubmit() {
  this.submitted = true;
  this.contratService.addContract(this.newContract)
  .subscribe(data => console.log(data), error => console.log(error));
  this.newContract = new Contract();
  this.router.navigate(['/contract']);
  }}
