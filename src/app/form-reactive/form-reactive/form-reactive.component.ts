import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
  reactiveForm: FormGroup = new FormGroup({
    proyecto: new FormControl(''),
    horas: new FormControl(0),
    tecnologia: new FormControl('')
  });
}
