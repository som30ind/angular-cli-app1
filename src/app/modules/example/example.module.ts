import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ExampleComponent } from './example.component';

import { TemplateDataBindingComponent } from './template-data-binding/template-data-binding.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormInputBindingComponent } from './form-input-binding/form-input-binding.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularServicesComponent } from './angular-services/angular-services.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ExampleComponent,
        children: [
          { path: 'template-basic', component: TemplateDataBindingComponent },
          { path: 'types-of-angular-directive', component: AngularDirectiveComponent },
          { path: 'pipes', component: PipesComponent },
          { path: 'user-input-binding', component: FormInputBindingComponent },
          { path: 'template-driven-form', component: TemplateDrivenFormComponent },
          { path: 'reactive-form', component: ReactiveFormComponent },
          { path: 'angular-services', component: AngularServicesComponent },

        ]
      }
    ])

  ],
  declarations: [
    ExampleComponent,
    AngularDirectiveComponent,
    PipesComponent,
    FormInputBindingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AngularServicesComponent,
    TemplateDataBindingComponent
  ]
})
export class ExampleModule { }
