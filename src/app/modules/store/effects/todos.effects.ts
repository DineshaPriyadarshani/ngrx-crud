import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { addTodoAction, addTodoFailureAction, addTodoSuccessAction } from "../actions/add-todo.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { TodoService } from "src/app/modules/services/todos.service";
import { editTodoAction, editTodoFailureAction, editTodoSuccessAction, updateTodoAction, updateTodoFailureAction, updateTodoSuccessAction } from "../actions/edit-todo.actions";
import { deleteTodoAction, deleteTodoFailureAction, deleteTodoSuccessAction } from "../actions/delete-todo.actions";

@Injectable()
export class TodosEffects {
    addTodo$ = createEffect(()=> 
        this.$actions.pipe(
            ofType(addTodoAction),
            switchMap(({payload}) => {
                return this.$todoService.addTodo(payload).pipe(
                    map((res) => addTodoSuccessAction({payload: res.payload})),
                    catchError((errors) => of(addTodoFailureAction({errors: errors})))
                )
            })
        )
    )

    editTodo$ = createEffect(() => 
            this.$actions.pipe(
                ofType(editTodoAction),
                switchMap(({payload}) => {
                    return this.$todoService.updateTodoState(payload).pipe(
                        map((res) => editTodoSuccessAction({payload: res.payload})),
                        catchError((errors) => of(editTodoFailureAction({errors: errors})))
                    )
                })
            )
    )

    updateTodo$ = createEffect(() => 
            this.$actions.pipe(
                ofType(updateTodoAction),
                switchMap(({payload}) => {
                    return this.$todoService.updateTodo(payload).pipe(
                        map((res) => updateTodoSuccessAction({payload: res.payload})),
                        catchError((errors) => of(updateTodoFailureAction({errors: errors})))
                    )
                })
            )
    )

    deleteTodo$ = createEffect(() => 
            this.$actions.pipe(
                ofType(deleteTodoAction),
                switchMap(({id}) => {
                    return this.$todoService.deleteTodoAction(id).pipe(
                        map((res) => deleteTodoSuccessAction({payload: res.payload})),
                        catchError((errors) => of(deleteTodoFailureAction({errors: errors})))
                    )
                })
            )
    )

    
    constructor(
        private $actions: Actions,
        private $todoService: TodoService
    ) {}
}
