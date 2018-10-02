import { Injectable } from '@angular/core';

import { Student } from './../../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsList: Student[];

  constructor() { }

  getStudents(): Student[] {

    this.studentsList = [];

   const s1 = new Student();
    s1.id = 1;
    s1.name = 'Lucas Silva';
    s1.documentType = 'CPF';
    s1.document = '46397889831';
    s1.category = 'SUB-17';
    s1.dateOfBirth = '04/01/1998';
    s1.age = 16;
    this.studentsList.push(s1);

    const s2 = new Student();
    s2.id = 2;
    s2.name = 'Marcos Silva';
    s2.category = 'SUB-16';
    s2.dateOfBirth = '04/01/1999';
    s2.age = 13;
    this.studentsList.push(s2);

    return this.studentsList;

  }
}
