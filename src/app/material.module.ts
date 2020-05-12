import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatChipsModule
} from '@angular/material';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule } from '@angular/router';

const myModules = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatChipsModule
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    myModules,
    RouterModule
  ],
  exports: [myModules]
})
export class MaterialModule { }
