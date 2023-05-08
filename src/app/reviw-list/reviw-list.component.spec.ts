import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviwListComponent } from './reviw-list.component';

describe('ReviwListComponent', () => {
  let component: ReviwListComponent;
  let fixture: ComponentFixture<ReviwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
