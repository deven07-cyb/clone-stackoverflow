import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CoreModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class FrontModule { }
