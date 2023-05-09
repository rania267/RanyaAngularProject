import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { ContractService } from '../services/contract.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api.response';
import { NgxQRCodeModule } from 'ngx-qrcode2';



@Component({
  selector: 'app-contract-front',
  templateUrl: './contract-front.component.html',
  styleUrls: ['./contract-front.component.css']
})
export class ContractFrontComponent implements OnInit {
  contrats: Observable<ApiResponse>;
  constructor(private contratService: ContractService,
    private router: Router) { }

  ngOnInit(): void {
    this.contrats = this.contratService.getAllContracts();
  }

}
