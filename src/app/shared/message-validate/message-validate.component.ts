import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidations } from './form-validations';

@Component({
  selector: 'app-message-validate',
  templateUrl: './message-validate.component.html',
  styleUrls: ['./message-validate.component.scss']
})
export class MessageValidateComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() subject: false;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched || this.subject) {
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }
}
