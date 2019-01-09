import { Injectable } from '@angular/core';
import { Responsible } from '../../../../model/responsible';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataResponsibleService {

  responsibles: Responsible[];
  constructor() {
      this.responsibles = [];
   }

  addToTable(data: Responsible) {

    if (this.hasMaxRegisterAllowed()) {
        alert('Numero de responsavel excedido!');
        return this.responsibles;
    } else {
        const resp = new Responsible();
        resp.email = data.email;
        resp.phone = data.phone;
        resp.name = data.name;
        this.responsibles.push(resp);
        return this.responsibles;
    }
  }

  hasMaxRegisterAllowed () {
      return this.responsibles && this.responsibles.length >= 3;
  }
}
