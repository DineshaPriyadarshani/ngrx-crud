import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { addTodoAction, addTodoFailureAction, addTodoSuccessAction } from "../actions/add-todo.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { TodoService } from "src/app/modules/services/todos.service";
import { editTodoAction, editTodoFailureAction, editTodoSuccessAction, updateTodoAction, updateTodoFailureAction, updateTodoSuccessAction } from "../actions/edit-todo.actions";
import { deleteTodoAction, deleteTodoFailureAction, deleteTodoSuccessAction } from "../actions/delete-todo.actions";
import { loadTodoAction, loadTodoFailureAction, loadTodoSuccessAction } from "../actions/load-todo.actions";

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

    addTodoSuccess$ = createEffect(() =>
        this.$actions.pipe(
        ofType(addTodoSuccessAction),
        switchMap(() => [
            loadTodoAction()
        ])),
        { dispatch: false }
    );

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

    editTodoSuccess$ = createEffect(() =>
        this.$actions.pipe(
        ofType(editTodoSuccessAction),
        switchMap(() => [
            loadTodoAction()
        ])),
        { dispatch: false }
    );

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

    updateTodoSuccess$ = createEffect(() =>
        this.$actions.pipe(
        ofType(updateTodoSuccessAction),
        switchMap(() => [
            loadTodoAction()
        ])),
        { dispatch: false }
    );

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

    deleteTodoSuccess$ = createEffect(() =>
        this.$actions.pipe(
        ofType(deleteTodoSuccessAction),
        switchMap(() => [
            loadTodoAction()
        ])),
        { dispatch: false }
    );

    loadTodo$ = createEffect(() => 
            this.$actions.pipe(
                ofType(loadTodoAction),
                switchMap(() => {
                    return this.$todoService.loadTodo().pipe(
                        map((res) => loadTodoSuccessAction({payload: res.payload})),
                        catchError((errors) => of(loadTodoFailureAction({errors: errors})))
                    )
                })
            )
    )

    
    constructor(
        private $actions: Actions,
        private $todoService: TodoService
    ) {}
}
