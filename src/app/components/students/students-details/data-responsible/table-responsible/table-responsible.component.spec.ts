import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponsibleComponent } from './table-responsible.component';

describe('TableResponsibleComponent', () => {
  let component: TableResponsibleComponent;
  let fixture: ComponentFixture<TableResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
