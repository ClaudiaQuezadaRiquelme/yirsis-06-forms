import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  initialState = {
    proyecto: '',
    horas: 0,
    tecnologia: ''
  };

  tecnologias:Array<string> = [];

  @ViewChild("templateForm")
  templateForm!: NgForm;

  agregar() {
    console.log('templateForm:', this.templateForm);
    
  }

  agregarTec() {
    if (this.templateForm.controls['tecnologia'].invalid) {
      return;
    }
    this.tecnologias.push(this.templateForm.controls['tecnologia'].value);
    console.log('tecnologias:', this.tecnologias);
  }
}
