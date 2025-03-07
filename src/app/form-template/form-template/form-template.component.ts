import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  tecnologias:Array<string> = [];

  @ViewChild("templateForm")
  templateForm!: NgForm;

  agregar() {
    console.log('templateForm:', this.templateForm);
    
  }

  agregarTec() {
    if (this.templateForm.invalid && this.templateForm.touched) {
      return;
    }
    this.tecnologias.push(this.templateForm.controls["tecnologia"].value);
    console.log('tecnologias:', this.tecnologias);
  }
}
