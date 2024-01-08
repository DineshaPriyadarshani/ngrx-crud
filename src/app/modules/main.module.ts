import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  * as fromComponents from './components/index';
import { MainRoutingModule } from './main-routing.module';
import { Primemodules } from './prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/reducers';
import * as fromGuards from './guards';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', fromTodos.reducers),
    ...Primemodules
  ],
  exports: [
    ...Primemodules
  ],
  providers: [fromGuards.guards]
})
export class MainModule { }
