import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-database',
  templateUrl: './add-database.component.html',
  styleUrls: ['./add-database.component.css']
})
export class AddDatabaseComponent implements OnInit {

  databaseForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.databaseForm = this.formBuilder.group({
      selectDatabase: ['', Validators.required],
      system: [''],
      // Add other form controls here (name, port, username, url, password, etc.)
    });
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
    // Implement logic to toggle form visibility or any other actions
  }

  onSubmit(): void {
    // Implement logic to handle form submission
    // You can access form values using this.databaseForm.value
  }}