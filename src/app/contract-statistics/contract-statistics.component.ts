import { Component, OnInit } from '@angular/core';
import { ContractStatistics } from '../model/contractStatistics';
import { ContractService } from '../services/contract.service';
@Component({
  selector: 'app-contract-statistics',
  templateUrl: './contract-statistics.component.html',
  styleUrls: ['./contract-statistics.component.css']
})
export class ContractStatisticsComponent implements OnInit {

  statistics: ContractStatistics;

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getDeliveryContractStatistics('duration')
      .subscribe((data: ContractStatistics) => {
        this.statistics = data;
      });
  }

}