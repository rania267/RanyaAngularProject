import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatabaseComponent } from './add-database.component';

describe('AddDatabaseComponent', () => {
  let component: AddDatabaseComponent;
  let fixture: ComponentFixture<AddDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
