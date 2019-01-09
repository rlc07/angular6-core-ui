import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAddressComponent } from './students-address.component';

describe('StudentsAddressComponent', () => {
  let component: StudentsAddressComponent;
  let fixture: ComponentFixture<StudentsAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
