import { Injectable } from '@angular/core';
import { Responsible } from '../../../../model/responsible';

@Injectable({
  providedIn: 'root'
})
export class StudentsProfessionalDataService {

  constructor() {}

  getPositions() {
   return [
        {label: 'Atacante', value: {id: 1, name: 'Atacante'}},
        {label: 'Lateral Esquerdo', value: {id: 2, name: 'Lateral Esquerdo'}},
        {label: 'Meia', value: {id: 3, name: 'Meia'}},
        {label: 'Centro', value: {id: 4, name: 'Centro'}}
    ];
  }
  addToTable(data: Responsible) {

    // if (this.hasMaxRegisterAllowed()) {
    //     alert('Numero de responsavel excedido!');
    //     return this.responsibles;
    // } else {
    //     const resp = new Responsible();
    //     resp.email = data.email;
    //     resp.phone = data.phone;
    //     resp.name = data.name;
    //     this.responsibles.push(resp);
    //     return this.responsibles;
    // }
  }

//   hasMaxRegisterAllowed () {
//       return this.responsibles && this.responsibles.length >= 3;
//   }
}
