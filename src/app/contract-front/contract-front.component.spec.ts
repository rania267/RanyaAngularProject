import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFrontComponent } from './contract-front.component';

describe('ContractFrontComponent', () => {
  let component: ContractFrontComponent;
  let fixture: ComponentFixture<ContractFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
