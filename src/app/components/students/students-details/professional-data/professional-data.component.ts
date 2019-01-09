import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { StudentsProfessionalDataService } from './students-professional-data.service';

@Component({
  selector: 'app-professional-data',
  templateUrl: './professional-data.component.html',
  styleUrls: ['./professional-data.component.scss']
})
export class ProfessionalDataComponent implements OnInit {

  positions: SelectItem[];

  selectedPosition: any[];

  constructor(private _service: StudentsProfessionalDataService) { }

  ngOnInit() {
    this.positions = this._service.getPositions();
  }

}
