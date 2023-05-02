import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../model/contract';
import {ContractStatistics} from '../model/contractStatistics';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.baseUrl}/con/contracts/${id}`);
  }

  getAllContracts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/con/contracts`);
  }

  addContract(contract: Contract): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/con/addContract`, contract);
  }

  updateContract(contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${this.baseUrl}/con/contracts`, contract);
  }

  deleteContract(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/con/deleteContract/${id}`);
  }

  getDeliveryContractStatistics(variable: string): Observable<ContractStatistics> {
    return this.http.get<ContractStatistics>(`${this.baseUrl}/con/delivery-contracts/${variable}/statistics`);
  }
}
