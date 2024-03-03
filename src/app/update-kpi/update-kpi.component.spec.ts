import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKpiComponent } from './update-kpi.component';

describe('UpdateKpiComponent', () => {
  let component: UpdateKpiComponent;
  let fixture: ComponentFixture<UpdateKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
