import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsStepsComponent } from './buttons-steps.component';

describe('ButtonsStepsComponent', () => {
  let component: ButtonsStepsComponent;
  let fixture: ComponentFixture<ButtonsStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
