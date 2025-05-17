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

  it('should verify horas.', () => {
    const form = component.reactiveForm;
    const hours = form.get('horas');
    expect(hours?.valid).toBeTruthy();
    hours?.setValue(0);
    expect(hours?.valid).toBeFalsy();
    hours?.setValue(51);
    expect(hours?.valid).toBeFalsy();
    hours?.setValue("51");
    expect(hours?.valid).toBeFalsy();
  });

  it('should add a element in tecnologias array', () => {
    const techsArr = component.tecnologias; // como es un getter, no necesitamos inicializar el form y usar el get() del form.
    const techCtrl = component.tecnologia;
    techCtrl.setValue('Node');
    component.agregarTecnologia();
    expect(techsArr?.value.length).toBe(1);
    techCtrl.setValue('Angular');
    component.agregarTecnologia();
    expect(techsArr?.value.length).toBe(2);
    expect(techsArr?.value).toEqual(['Node','Angular']);
  });
});
