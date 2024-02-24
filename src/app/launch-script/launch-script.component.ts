import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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