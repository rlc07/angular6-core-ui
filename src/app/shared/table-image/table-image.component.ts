import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-image',
  templateUrl: './table-image.component.html',
  styleUrls: ['./table-image.component.scss']
})
export class TableImageComponent implements OnInit {

  @Input() students: any;
  constructor() { }

  ngOnInit() {
  }

}
