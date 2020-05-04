import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {APPLICATION_ROUTES} from './routes';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APPLICATION_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }