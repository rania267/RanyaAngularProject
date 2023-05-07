import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ApiResponse } from '../model/api.response';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from '../services/contract.service';
@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css']
})
export class UpdateContractComponent implements OnInit {

  id!: number;
  contract!: Contract;
  apiResponse!: ApiResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractService
  ) {}

  ngOnInit() {
    this.contract = new Contract();

    this.id = this.route.snapshot.params['id'];
    this.contractService.getContractById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.contract = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.contractService.updateContract(this.contract).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.contract = new Contract();
    this.router.navigate(['/contract']);
  }

  list() {
    this.router.navigate(['contract']);
  }
}


