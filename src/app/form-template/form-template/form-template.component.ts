import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  @ViewChild("templateForm")
  templateForm!: NgForm;

  agregar() {
    console.log('templateForm:', this.templateForm);
    
  }
}
