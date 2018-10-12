import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { FormGroup } from '@angular/forms';

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
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.items = [{
            label: 'Dados Pessoais',
            command: (event: any) => {
                this.activeIndex = 0;
            }
        },
        {
            label: 'Endereço',
            command: (event: any) => {
                this.activeIndex = 1;
            }
        },
        {
            label: 'Dados do Responsável',
            command: (event: any) => {
                this.activeIndex = 2;
            }
        },
        {
          label: 'Dados Profissionais',
          command: (event: any) => {
              this.activeIndex = 3;
          }
        },
        {
            label: 'Confirmar Cadastro',
            command: (event: any) => {
                this.activeIndex = 4;
            }
        }
    ];
}


 next(event) {
    console.log(event)

     this.activeIndex++;
 }

 back() {
    this.activeIndex--;
}

onSubmit(event) {
    console.log(this.f)
}
test(event){
    console.log("gol")
}
}
