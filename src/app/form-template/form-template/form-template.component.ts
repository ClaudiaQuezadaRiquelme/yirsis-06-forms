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
  proyectos: any[] = [];

  @ViewChild("templateForm")
  templateForm!: NgForm;

  agregar() {
    if (this.templateForm.invalid) {
      return;
    }
    this.proyectos.push({
      proyecto: this.templateForm.controls['proyecto'].value,
      tecnologias: this.tecnologias,
      horas: this.templateForm.controls['horas'].value
    });
    this.templateForm.resetForm({
      horas: 0
    });
    this.tecnologias = [];
    console.log('this.proyectos:', this.proyectos);
  }

  agregarTec() {
    if (this.templateForm.controls['tecnologia'].invalid) {
      return;
    }
    this.tecnologias.push(this.templateForm.controls['tecnologia'].value);
    console.log('tecnologias:', this.tecnologias);
    this.templateForm.resetForm({
      ...this.templateForm.value, // operador spread
      tecnologia: ''
    });
  }
}
