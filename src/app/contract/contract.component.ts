import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ContractService } from '../services/contract.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  
  contracts: Observable<Contract[]>;

  constructor(private contractService: ContractService,
    private router: Router) { }

  ngOnInit(): void {

    this.contracts = this.contractService.getAllContracts();
  }
  newContract: Contract = {
    id: null,
    contractInformation: '',
    creation_date: null,
    expiration_date: null,
    option: '',
    name: '',
    price: null,
    duration: null,
    distance: null
  };
  onSubmit() {
    this.contractService.addContract(this.newContract).subscribe(() => {
      this.router.navigate(['/contracts']);
    });
  }
    
 
    
}
