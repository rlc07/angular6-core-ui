import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContainerComponent } from './card-container/card-container.component';
import { TableImageComponent } from './table-image/table-image.component';
import { CardPhotoComponent } from './card-photo/card-photo.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { LabelRequiredComponent } from './label-required/label-required.component';
import { MessageValidateComponent } from './message-validate/message-validate.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardContainerComponent,
    TableImageComponent,
    CardPhotoComponent,
    AddressComponent,
    LabelRequiredComponent,
    MessageValidateComponent,
   ],
  exports: [
    CardContainerComponent,
    TableImageComponent,
    CardPhotoComponent,
    AddressComponent,
    LabelRequiredComponent,
    MessageValidateComponent,
  ]
})
export class SharedModule { }
