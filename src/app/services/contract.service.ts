import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../model/contract';
import {ContractStatistics} from '../model/contractStatistics';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.baseUrl}/con/contracts/${id}`);
  }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.baseUrl}/con/contracts`);
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.baseUrl}/con/contracts`, contract);
  }

  updateContract(contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${this.baseUrl}/con/contracts`, contract);
  }

  deleteContract(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/con/contracts/${id}`);
  }

  getDeliveryContractStatistics(variable: string): Observable<ContractStatistics> {
    return this.http.get<ContractStatistics>(`${this.baseUrl}/con/delivery-contracts/${variable}/statistics`);
  }
}
