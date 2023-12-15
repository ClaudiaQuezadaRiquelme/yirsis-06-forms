import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';



@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormReactiveComponent
  ]
})
export class FormReactiveModule { }
