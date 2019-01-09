import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students-address',
  templateUrl: './students-address.component.html',
  styleUrls: ['./students-address.component.scss']
})
export class StudentsAddressComponent implements OnInit {

  @Output() studentAddress = new EventEmitter();
  form: FormGroup;
  subject = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form =  this._formBuilder.group({
      zipcode: [null],
      street: [null],
      district: [null],
      number: [null],
      city: [null],
      state: [null],
      complement: [null]
    });
  }

  get f() { return this.form.controls; }

  forNext() {
    this.studentAddress.emit(this.form);
  }

}
