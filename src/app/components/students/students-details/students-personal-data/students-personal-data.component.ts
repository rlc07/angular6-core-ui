import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-personal-data',
  templateUrl: './students-personal-data.component.html',
  styleUrls: ['./students-personal-data.component.scss']
})
export class StudentsPersonalDataComponent implements OnInit {


  @Output() personalData = new EventEmitter();

  form: FormGroup;
  subject = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form =  this._formBuilder.group({
      name: [null, Validators.required],
      document: [null],
      documentType: [null],
      dateOfBirth: [null, Validators.required],
      category: [null],
      age: [null],
      phone: [null],
      email: [null]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.personalData.emit(this.form);
  }

}
