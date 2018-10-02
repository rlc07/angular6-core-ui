import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPersonalDataComponent } from './students-personal-data.component';

describe('StudentsPersonalDataComponent', () => {
  let component: StudentsPersonalDataComponent;
  let fixture: ComponentFixture<StudentsPersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsPersonalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
