import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieversComponent } from './recievers.component';

describe('RecieversComponent', () => {
  let component: RecieversComponent;
  let fixture: ComponentFixture<RecieversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
