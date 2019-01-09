import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { StudentsService } from './../students.service';
import { Student } from '../../../model/student';

@Component({
    selector: 'app-students-details',
    templateUrl: './students-details.component.html',
    styles: [`
  .ui-steps .ui-steps-item {
      width: 20%;
  }

  .ui-steps.steps-custom {
      margin-bottom: 30px;
  }

  .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
      height: 10px;
      padding: 0 1em;
  }

  .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
      background-color: #4dbd74;
      color: #FFFFFF;
      display: inline-block;
      width: 36px;
      border-radius: 50%;
      margin-top: -14px;
      margin-bottom: 10px;
  }

  .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
      color: #555555;
  }

  .margin-button{
    margin: 2px;
 }
`],
    encapsulation: ViewEncapsulation.None
})
export class StudentsDetailsComponent implements OnInit {

    items: MenuItem[];
    activeIndex = 3;
    student: Student;

    constructor(private _studentService: StudentsService) { }

    ngOnInit() {
        this.items = this._studentService.getItemsSteps(this.activeIndex);
    }

    /** LISTENERS OUTPUT  */
    currentIndexActive(event) {
        this.activeIndex = event;
    }

   async personalData(event) {
        this.activeIndex++;
        this.student = await this._studentService.setValues(event.value);
    }

   async studentAddress(event) {
        this.activeIndex++;
    }

   async outputdataResponsibles(event) {
        this.activeIndex++;
   }
}
