import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOffreComponent } from './delete-offre.component';

describe('DeleteOffreComponent', () => {
  let component: DeleteOffreComponent;
  let fixture: ComponentFixture<DeleteOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
