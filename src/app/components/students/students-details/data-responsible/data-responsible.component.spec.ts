import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResponsibleComponent } from './data-responsible.component';

describe('DataResponsibleComponent', () => {
  let component: DataResponsibleComponent;
  let fixture: ComponentFixture<DataResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
