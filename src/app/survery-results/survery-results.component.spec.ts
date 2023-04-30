import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryResultsComponent } from './survery-results.component';

describe('SurveryResultsComponent', () => {
  let component: SurveryResultsComponent;
  let fixture: ComponentFixture<SurveryResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveryResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
