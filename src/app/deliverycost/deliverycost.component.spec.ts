import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverycostComponent } from './deliverycost.component';

describe('DeliverycostComponent', () => {
  let component: DeliverycostComponent;
  let fixture: ComponentFixture<DeliverycostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverycostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverycostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
