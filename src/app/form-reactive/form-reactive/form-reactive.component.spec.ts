import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveComponent } from './form-reactive.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('FormReactiveComponent', () => {
  let component: FormReactiveComponent;
  let fixture: ComponentFixture<FormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactiveComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    });
    fixture = TestBed.createComponent(FormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
