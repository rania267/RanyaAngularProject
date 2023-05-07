import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculerSimillarComponent } from './calculer-simillar.component';

describe('CalculerSimillarComponent', () => {
  let component: CalculerSimillarComponent;
  let fixture: ComponentFixture<CalculerSimillarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculerSimillarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculerSimillarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
