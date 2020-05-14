import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
