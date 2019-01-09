import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardContainerComponent } from './card-container/card-container.component';
import { TableImageComponent } from './table-image/table-image.component';
import { CardPhotoComponent } from './card-photo/card-photo.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { LabelRequiredComponent } from './label-required/label-required.component';
import { MessageValidateComponent } from './message-validate/message-validate.component';
import { ButtonsStepsComponent } from './buttons-steps/buttons-steps.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CardContainerComponent,
    TableImageComponent,
    CardPhotoComponent,
    AddressComponent,
    LabelRequiredComponent,
    MessageValidateComponent,
    ButtonsStepsComponent
   ],
  exports: [
    CardContainerComponent,
    TableImageComponent,
    CardPhotoComponent,
    AddressComponent,
    LabelRequiredComponent,
    MessageValidateComponent,
    ButtonsStepsComponent
  ]
})
export class SharedModule { }
