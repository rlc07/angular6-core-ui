import { Component, OnInit } from '@angular/core';

import { StudentsService } from './students.service';
import { Student } from './../../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  
  students = [];

  constructor(private _studentService: StudentsService) { }

  ngOnInit() {
    this.students = this._studentService.getStudents();
  }

}
