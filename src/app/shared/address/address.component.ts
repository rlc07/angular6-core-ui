import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Output() address = new EventEmitter();
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

  getAddress() {
    this.address.emit(this.form);
  }
}
