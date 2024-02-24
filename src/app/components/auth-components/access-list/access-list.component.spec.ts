import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessListComponent } from './access-list.component';

describe('AccessListComponent', () => {
  let component: AccessListComponent;
  let fixture: ComponentFixture<AccessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessListComponent]
    });
    fixture = TestBed.createComponent(AccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
