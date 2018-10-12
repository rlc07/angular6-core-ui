import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageValidateComponent } from './message-validate.component';

describe('MessageValidateComponent', () => {
  let component: MessageValidateComponent;
  let fixture: ComponentFixture<MessageValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
