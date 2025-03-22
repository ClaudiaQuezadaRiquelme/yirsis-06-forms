import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
  // reactiveForm: FormGroup = new FormGroup({
  //   proyecto: new FormControl(''),
  //   horas: new FormControl(0),
  //   tecnologia: new FormControl('')
  // });

  reactiveForm: FormGroup = this.fb.group({
    proyecto: this.fb.control('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(15), // invalida el form pero no impide que se siga escribiendo
    ]),
    horas: this.fb.control(0, [
      Validators.required, 
      Validators.min(0), 
      Validators.max(50), // invalida el form pero no impide que se siga escribiendo
    ]),
    tecnologia: this.fb.array([]),
  });
  tecnologia: FormControl = this.fb.control('', [
    Validators.required, Validators.minLength(3), Validators.maxLength(20)
  ]);

  get tecnologias() {
    return this.reactiveForm.get('tecnologia') as FormArray;
  }

  proyectos: any[] = [];

  constructor(
    private fb: FormBuilder
  ) {}

  validar() {
    return this.reactiveForm.invalid && this.reactiveForm.touched;
  }

  agregarTecnologia() {
    if (this.tecnologia.invalid) {
      this.reactiveForm.markAllAsTouched(); // fuerza a que aparezca un error en el form
      return;
    }
    this.tecnologias.push(this.fb.control(this.tecnologia.value));
    console.log('this.tecnologias.value:' ,this.tecnologias.value);
    this.tecnologia.reset(); // limpiar input de tecnologia
  }

  agregarProyecto() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched(); // fuerza a que aparezca un error en el form
      return;
    }
    this.proyectos.push(this.reactiveForm.value);
  }
}
