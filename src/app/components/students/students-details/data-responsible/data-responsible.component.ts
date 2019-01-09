import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentsDataResponsibleService } from './students-data-responsible.service';
import { Responsible } from '../../../../model/responsible';

@Component({
  selector: 'app-data-responsible',
  templateUrl: './data-responsible.component.html',
  styleUrls: ['./data-responsible.component.scss'],
  providers: [StudentsDataResponsibleService]
})
export class DataResponsibleComponent implements OnInit {

  @Output() outputdataResponsibles = new EventEmitter();

  form: FormGroup;
  responsibles: Responsible [];

  constructor(private _formBuilder: FormBuilder,
              private _service: StudentsDataResponsibleService) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      name: [null],
      email: [null],
      phone: [null],
    });
  }

  get f() { return this.form.controls; }

  hasStudent() {
    return this.responsibles && this.responsibles.length > 0;
  }

  add() {
   this.responsibles = this._service.addToTable(this.form.value);
   this.form.reset();
  }

  forNext() {
    this.outputdataResponsibles.emit(this.form);
  }

}
