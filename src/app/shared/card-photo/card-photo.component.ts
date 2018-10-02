import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss']
})
export class CardPhotoComponent implements OnInit {

  @Input() cardSize = 8;
  // tslint:disable-next-line:max-line-length
  temporaryPhoto = 'http://s2.glbimg.com/aOegzogS4lz3ancMsQ0REkCnARUdvvLNUE1pxtZQFreHS2k3gedIRolKKFop7c21/e.glbimg.com/og/ed/f/original/2013/03/12/634984746801544337w.jpg';
  constructor() { }

  ngOnInit() {
  }

}
