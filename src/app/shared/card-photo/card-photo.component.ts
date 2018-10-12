import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss']
})
export class CardPhotoComponent implements OnInit {

  @Input() cardSize = 8;
  // tslint:disable-next-line:max-line-length
  temporaryPhoto = 'src/assets/img/avatars/sem-foto.jpg';
  constructor() { }

  ngOnInit() {
  }

}
