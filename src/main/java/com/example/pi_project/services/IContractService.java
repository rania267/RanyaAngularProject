package com.example.pi_project.services;

import com.example.pi_project.entities.Contract;

import java.util.List;

public interface IContractService {
    public List<Contract> getAllContracts();
    public Contract getContractById(int id);
    public Contract addContract(Contract contract);
    public void deleteContract(int id);
    public Contract updateContract(Contract contract);
}
