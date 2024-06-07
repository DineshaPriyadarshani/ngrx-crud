import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/root.reducer'; 
import { addTodoAction } from 'src/app/modules/store/actions/add-todo.actions';
import { selectTodos } from 'src/app/modules/store/selectors/todos.selector';
import { Todo, TodoState } from '../../models';
import { Customs } from '../../utils/customs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { editTodoAction, updateTodoAction } from '../../store/actions/edit-todo.actions';
import { deleteTodoAction } from '../../store/actions/delete-todo.actions';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todoItem: string;
  public todosList: Todo[];

  translate = (key: string) => <string>{};

  constructor(private store: Store<fromRoot.State>, private fb: FormBuilder, private translationService: TranslationService) { }

  todoForm: FormGroup;

  ngOnInit(): void {
    this.translate = (key: string) => this.translationService.getTranslation(key);
    this.todoForm = this.createForm();
    this.getTodoList();
  }

  createForm(): FormGroup {
    return this.fb.group({
      todos: this.fb.array([])
    })
  }

  get todosFormArray(): FormArray {
    return this.todoForm.controls['todos'] as FormArray;
  }

  addTodoItem() {
    const dateCreated = new Date().toISOString();
    const newTodoItem: Todo = {
      id: Customs.randomNumberGen(),
      todoItem: this.todoItem,
      todoState: TodoState.Pend,
      dateCreated,
    }
    this.store.dispatch(addTodoAction({payload: newTodoItem}));
    this.todoItem = '';
    this.getTodoList();
  }

  getTodoList() {
    this.store.select(selectTodos).subscribe(data => {
      this.todosList = ([...data]).sort((a: Todo, b: Todo) => Number(a.dateCreated) - Number(b.dateCreated)).reverse();
      this.todosFormArray.clear();
      this.todosList?.map(item => {
        this.todosFormArray.controls.push(
          TodoItemComponent.createTodo(
            this.fb,
            item,
            TodoItemComponent.defaultTodo(this.fb)
          )
        )
      })
    });
  }

  onChangeTodoState(e: Todo) {
    this.store.dispatch(editTodoAction({payload: e}));
  }

  updateTodo(e: Todo) {
    this.store.dispatch(updateTodoAction({payload: e}));
  }

  deleteTodo(e: string) {
    this.store.dispatch(deleteTodoAction({id: e}));
  }
}
