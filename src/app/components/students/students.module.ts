import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {StepsModule} from 'primeng/steps';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StudentsService } from './students.service';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsPersonalDataComponent } from './students-details/students-personal-data/students-personal-data.component';
import { DataResponsibleComponent } from './students-details/data-responsible/data-responsible.component';
import { TableResponsibleComponent } from './students-details/data-responsible/table-responsible/table-responsible.component';
import { ProfessionalDataComponent } from './students-details/professional-data/professional-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    RouterModule,
    StepsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    InputMaskModule
   ],
  declarations: [
     StudentsComponent,
     StudentsDetailsComponent,
     StudentsPersonalDataComponent,
     DataResponsibleComponent,
     TableResponsibleComponent,
     ProfessionalDataComponent,
     ],
  providers: [StudentsService],
})
export class StudentsModule { }
