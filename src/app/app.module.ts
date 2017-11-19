import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Form.io imports
import { FormioModule } from 'angular-formio';
//import { FormioResources } from 'angular-formio/resource';
//import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth'
import { AuthConfig, AppConfig } from '../config';
//Form.io import
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

export const routes: Routes =[
  {
    path: "firstForm",
    component: Form1Component
  },
  {
    path: "secondForm",
    component: Form2Component
  }
]

@NgModule({
  declarations: [
    AppComponent,    
    Form1Component,
    Form2Component
  ],
  imports: [
    FormioModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    // FormioResources,
    // FormioAuthService,
    // {provide: FormioAppConfig, useValue: AppConfig},
    // {provide: FormioAuthConfig, useValue: AuthConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
