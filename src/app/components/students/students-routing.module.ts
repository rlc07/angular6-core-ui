import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Escola'
    },
    children: [
      {
        path: '',
        component: StudentsComponent,
        data: {
          title: 'Alunos'
        }
      },
      {
        path: ':id',
        component: StudentsDetailsComponent,
        data: {
          title: 'Detalhes do Aluno'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
