import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {StepsModule} from 'primeng/steps';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StudentsService } from './students.service';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsPersonalDataComponent } from './students-details/students-personal-data/students-personal-data.component';
import { DataResponsibleComponent } from './students-details/data-responsible/data-responsible.component';
import { ProfessionalDataComponent } from './students-details/professional-data/professional-data.component';
import { StudentsAddressComponent } from './students-details/students-address/students-address.component';

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
    InputMaskModule,
    InputTextModule,
    SelectButtonModule
   ],
  declarations: [
     StudentsComponent,
     StudentsDetailsComponent,
     StudentsPersonalDataComponent,
     DataResponsibleComponent,
     ProfessionalDataComponent,
     StudentsAddressComponent,
     ],
  providers: [StudentsService],
})
export class StudentsModule { }
