import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-steps',
  templateUrl: './buttons-steps.component.html',
  styleUrls: ['./buttons-steps.component.scss']
})
export class ButtonsStepsComponent implements OnInit {

  @Input() activeIndex = 0;
  @Output() currentIndexActive = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  forNext() {
    this.activeIndex++;
    this.currentIndexActive.emit(this.activeIndex);
  }

  back() {
    this.activeIndex--;
    this.currentIndexActive.emit(this.activeIndex);
  }
}
