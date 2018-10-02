import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormWizardModule } from 'angular2-wizard';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StudentsService } from './students.service';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsPersonalDataComponent } from './students-details/students-personal-data/students-personal-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    RouterModule,
    FormWizardModule
  ],
  declarations: [StudentsComponent, StudentsDetailsComponent, StudentsPersonalDataComponent],
  providers: [StudentsService]
})
export class StudentsModule { }
