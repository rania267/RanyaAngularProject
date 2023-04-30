import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      number: ['', Validators.required],
      category: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.productForm.get('name').value);
    formData.append('description', this.productForm.get('description').value);
    formData.append('price', this.productForm.get('price').value);
    formData.append('number', this.productForm.get('number').value);
    formData.append('category', this.productForm.get('category').value);
    formData.append('image', this.productForm.get('image').value);

    this.productService.addProduct(formData).subscribe(
      response => {
        console.log(response);
        this.productForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    this.productForm.get('image').setValue(file);
  }

}
