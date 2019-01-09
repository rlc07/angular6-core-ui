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
  documentTypes = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.documentTypes = [
      {label: 'CPF', value: 'CPF'},
      {label: 'RG', value: 'RG' }
  ];
    this.form =  this._formBuilder.group({
      name: [null, Validators.required],
      documentNumber: [null],
      documentType: [null],
      dateOfBirth: [null, Validators.required],
      age: [null],
      phone: [null],
      email: [null]
    });
  }

  populationDataForm(data) {
    // this.form.patchValue({
    //   name: data.name,
    //   documentNumber: data.documentNumber,
    //   documentType: data.documentType,
    //   dateOfBirth: data.dateOfBirth,
    //   phone: data.phone,
    //   email: data.email
    // });
  }

  get f() { return this.form.controls; }

  forNext() {
    if (!this.form.valid) {
      this.subject = true;
      return;
    }
    this.personalData.emit(this.form);
  }
}
