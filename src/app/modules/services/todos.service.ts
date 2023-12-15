import { Injectable, OnDestroy } from "@angular/core";
import { of } from "rxjs";
import { Todo } from "../models";

@Injectable() 
export class TodoService implements OnDestroy {

    addTodo(todo: Todo) {
        let TodoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
        TodoArr?.push(todo);
        localStorage.setItem('todos', JSON.stringify(TodoArr));
        return of({ payload: TodoArr });
    }

    updateTodoState(todo: any) {
        let TodoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
        TodoArr?.forEach(element => {
            if(element.id == todo.id) {
                element.todoState = todo.state
            }
        });
        localStorage.setItem('todos', JSON.stringify(TodoArr));
        return of({ payload: TodoArr });
}

    updateTodo(todo: any) {
        let TodoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

        TodoArr?.forEach(element => {
            if(element.id == todo.payload.id) {
                element.todoItem = todo.payload.todoItem
            }
        });
        localStorage.setItem('todos', JSON.stringify(TodoArr));
        return of({ payload: TodoArr });
    }

    deleteTodoAction(id: any) {
        let TodoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

        let index = TodoArr.findIndex(x => x.id == id.id);
        
        if (index !== -1) {
            TodoArr.splice(index, 1);
        }
        localStorage.setItem('todos', JSON.stringify(TodoArr));
        return of({ payload: TodoArr });
    }

    ngOnDestroy(): void {
      
    }
}