import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryModalComponentComponent } from './query-modal-component.component';

describe('QueryModalComponentComponent', () => {
  let component: QueryModalComponentComponent;
  let fixture: ComponentFixture<QueryModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
