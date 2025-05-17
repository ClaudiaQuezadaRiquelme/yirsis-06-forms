import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive/form-reactive.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      FormTemplateComponent,
      FormReactiveComponent,
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
