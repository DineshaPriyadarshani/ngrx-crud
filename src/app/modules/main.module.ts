import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos/todos.component';
import { MainRoutingModule } from './main-routing.module';
import { Primemodules } from './prime.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/reducers';


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    StoreModule.forFeature('todos', fromTodos.reducers),
    ...Primemodules
  ],
  exports: [
    ...Primemodules
  ]
})
export class MainModule { }
