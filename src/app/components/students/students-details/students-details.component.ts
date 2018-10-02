import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent implements OnInit {


  @Input() title: string;
  @Input() hidden = false;
  @Input() isValid = true;
  @Input() showNext = true;
  @Input() showPrev = true;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive = false;
  isDisabled = true;

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
