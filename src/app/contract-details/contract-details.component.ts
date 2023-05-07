import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ContractService } from '../services/contract.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  id!: number;
  contract!: Contract;
  
  constructor(private route: ActivatedRoute, private contractService: ContractService) { }
  
  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  
  this.contract = new Contract();
  this.contractService.getContractById(this.id).subscribe( data => {
    this.contract = data;
  });
  }
  }
  
  
  
  
  
  
  