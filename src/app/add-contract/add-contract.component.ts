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
  ngOnInit(): void {
  }


  constructor(private contractService: ContractService,private router: Router) {}

  onSubmit() {
    // send POST request to save new contract data
    this.contractService.addContract(this.newContract)
      .subscribe(() => {
        console.log('Contract added successfully');
        // reset form fields
        this.newContract = new Contract();
      }, error => {
        console.error('Error adding contract:', error);
      });
      this.router.navigate(['/contract']);

  }
}
