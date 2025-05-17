import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveComponent } from './form-reactive.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('FormReactiveComponent', () => {
  let component: FormReactiveComponent;
  let fixture: ComponentFixture<FormReactiveComponent>;

  beforeEach(() => {
    component = new FormReactiveComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 3 inputs: proyecto, horas, tecnologias.', () => {
    const form = component.reactiveForm;
    const project = form.get('proyecto');
    const hours = form.get('horas');
    const tech = form.get('tecnologias');
    expect(project).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(tech).toBeTruthy();
  });

  it('should verify proyecto accept 3+ characters.', () => {
    const form = component.reactiveForm;
    const project = form.get('proyecto');
    project?.setValue("abc");
    expect(project?.valid).toBeTruthy();
  });

  it('should verify proyecto accept max 15 characters.', () => {
    const form = component.reactiveForm;
    const project = form.get('proyecto');
    project?.setValue("asdfghjklqwertyuiopzxcvbnm");
    expect(project?.valid).toBeFalsy();
  });
});
