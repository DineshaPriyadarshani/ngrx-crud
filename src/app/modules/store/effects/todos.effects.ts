import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { addTodoAction, addTodoFailureAction, addTodoSuccessAction } from "../actions/add-todo.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { TodoService } from "src/app/modules/services/todos.service";

@Injectable()
export class TodosEffects {
    addTodo$ = createEffect(()=> 
        this.$actions.pipe(
            ofType(addTodoAction),
            switchMap(({payload}) => {
                return this.$todoService.addTodo(payload).pipe(
                    map((res) => { console.log('response', res); return addTodoSuccessAction({payload: res.payload})}),
                    catchError((errors) => of(addTodoFailureAction({errors: errors})))
                )
            })
        )
    )

    
    constructor(
        private $actions: Actions,
        private $todoService: TodoService
    ) {}
}
