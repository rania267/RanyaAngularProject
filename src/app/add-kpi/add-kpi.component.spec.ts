import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKpiComponent } from './add-kpi.component';

describe('AddKpiComponent', () => {
  let component: AddKpiComponent;
  let fixture: ComponentFixture<AddKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
