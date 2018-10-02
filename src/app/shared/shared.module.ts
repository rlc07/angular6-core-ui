import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContainerComponent } from './card-container/card-container.component';
import { TableImageComponent } from './table-image/table-image.component';
import { CardPhotoComponent } from './card-photo/card-photo.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ CardContainerComponent, TableImageComponent, CardPhotoComponent, AddressComponent ],
  exports: [ CardContainerComponent, TableImageComponent, CardPhotoComponent, AddressComponent ]
})
export class SharedModule { }
