import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchScriptComponent } from './launch-script.component';

describe('LaunchScriptComponent', () => {
  let component: LaunchScriptComponent;
  let fixture: ComponentFixture<LaunchScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
