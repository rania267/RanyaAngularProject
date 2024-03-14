import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { Database } from '../../class/database';

@Component({
  selector: 'app-launch-script',
  templateUrl: './launch-script.component.html',
  styleUrls: ['./launch-script.component.css']
})
export class LaunchScriptComponent implements OnInit {
  myForm: FormGroup;
  databaseForm: FormGroup;
  message: string;
  msg: string;

  constructor(private formBuilder: FormBuilder, private apiService: DatabaseService) {}

  ngOnInit(): void {
    this.fetchDatabases();
    this.initForm();
  }
  

  initForm(): void {
    this.databaseForm = this.formBuilder.group({
      selectDatabase: ['', Validators.required],
      system: [''],
    });
  } databases: Database[]; 
  fetchDatabases(): void {
    this.apiService.getAllDb().subscribe(
      (response: Database[]) => {
        this.databases = response;
      },
      (error) => {
        console.error('Error fetching databases:', error);
      }
    );
  }
  selectChange(): void {
    const selectValue = this.databaseForm.get('selectDatabase').value;
    if (selectValue === 'SQL') {
      this.databaseForm.get('systemSQL').setValidators(Validators.required);
      this.databaseForm.get('systemNoSQL').clearValidators();
    } else if (selectValue === 'NoSQL') {
      this.databaseForm.get('systemNoSQL').setValidators(Validators.required);
      this.databaseForm.get('systemSQL').clearValidators();
    }
  }

  toggleForm(): void {
  }

  onSubmit(): void {


  }}