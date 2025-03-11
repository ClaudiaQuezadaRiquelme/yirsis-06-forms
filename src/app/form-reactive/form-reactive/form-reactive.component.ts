import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    proyecto: this.fb.control(''),
    horas: this.fb.control(0),
    tecnologia: this.fb.control('')
  });

  constructor(
    private fb: FormBuilder
  ) {}
}
