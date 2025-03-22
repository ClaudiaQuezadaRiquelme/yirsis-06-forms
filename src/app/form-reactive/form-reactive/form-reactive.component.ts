import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    tecnologia: this.fb.control('')
  });

  constructor(
    private fb: FormBuilder
  ) {}

  validar() {
    return this.reactiveForm.invalid && this.reactiveForm.touched;
  }
}
