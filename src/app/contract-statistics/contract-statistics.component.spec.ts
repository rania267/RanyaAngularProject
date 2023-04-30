import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStatisticsComponent } from './contract-statistics.component';

describe('ContractStatisticsComponent', () => {
  let component: ContractStatisticsComponent;
  let fixture: ComponentFixture<ContractStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
