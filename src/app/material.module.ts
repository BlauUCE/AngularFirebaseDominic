import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { HomeComponent } from './components/pages/home/home.component';

const myModules = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    myModules
  ],
  exports: [myModules]
})
export class MaterialModule { }