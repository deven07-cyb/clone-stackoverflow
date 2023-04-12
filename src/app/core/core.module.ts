import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    LeftbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LeftbarComponent
  ],
  exports:[
    HeaderComponent,
    TopbarComponent
  ]
})
export class CoreModule { }
