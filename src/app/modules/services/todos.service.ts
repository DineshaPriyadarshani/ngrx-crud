import { Injectable, OnDestroy } from "@angular/core";
import { of } from "rxjs";
import { Todo } from "../models";

@Injectable() 
export class TodoService implements OnDestroy {

    addTodo(todo: Todo) {
        return of({ payload: todo });
    }

    ngOnDestroy(): void {
        
    }
}