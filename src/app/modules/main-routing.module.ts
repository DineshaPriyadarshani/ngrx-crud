import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    canActivate: [
      fromGuards.TodoGuard
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
