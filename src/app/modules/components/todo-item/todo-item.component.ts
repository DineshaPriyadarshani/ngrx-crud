import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/root.reducer';
import { Todo, TodoState } from '../../models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() index: number;
  @Input() todo: Todo;
  @Output() changeTodoState = new EventEmitter<{id: string, state: string}>();
  @Output() onUpdateTodo = new EventEmitter<{payload: Todo}>();
  @Output() onDeleteTodo = new EventEmitter<{id: string}>();

  editItem: string;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
  }

  public static defaultTodo(fb: FormBuilder) {
    const todos = {
      todoId: '',
      todoItem: '',
      todoState: '',
      isCompleted: false
    }
  }

  public static createTodo(fb: FormBuilder, todo: Todo, _e: void): FormGroup {
    return fb.group({
      todoId: todo.id,
      todoItem: todo.todoItem,
      todoState: todo.todoState,
      isCompleted: todo.todoState == TodoState.Done ? true: false
    })
  }

  get todoItem() {
    return this.form?.controls['todoItem'].value;
  }

  get todoIndex() {
    return this.form?.controls['todoId'].value;
  }

  get isCompleted() {
    return this.form?.controls['isCompleted'].value;
  }

  onChangeState(index: string, checked: any) {
    this.changeTodoState.emit({id:index, state: checked.checked? TodoState.Done: TodoState.Pend})
  }

  editTodo() {
    this.editItem = this.todoItem
  }

  updateTodo() {
    const updateTodoItem: Todo = {
      id: this.todoIndex,
      todoItem: this.editItem,
      todoState: this.todo.todoState,
      dateCreated: this.todo.dateCreated
    }

    this.onUpdateTodo.emit({payload: updateTodoItem});
    this.editItem = '';
  }

  deleteTodo(index: string) {
    this.onDeleteTodo.emit({id: index})
  }

  cancelEdit() {
    this.editItem = '';
  }

}
