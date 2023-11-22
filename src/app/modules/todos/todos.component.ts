import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/root.reducer'; 
import { addTodoAction } from 'src/app/modules/store/actions/add-todo.actions';
import { selectTodos } from 'src/app/modules/store/selectors/todos.selector';
import { Todo, TodoState } from '../models';
import { Customs } from '../utils/customs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todoItem: string;
  public todsList: [];

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
  }

  addTodoItem() {
    const newTodoItem: Todo = {
      id: Customs.randomNumberGen(),
      todoItem: this.todoItem,
      todoState: TodoState.Pend
    }
    this.store.dispatch(addTodoAction({payload: newTodoItem}));
    this.store.select(selectTodos).subscribe(data => {
      console.log(data);
    });

  }

}
