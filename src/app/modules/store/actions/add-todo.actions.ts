import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models";

export const addTodoAction = createAction(
    '[TODO] add todo',
    props<{
        payload: Todo;
    }>()
);

export const addTodoSuccessAction = createAction(
    '[TODO] add todo success',
    props<{
        payload: Todo[]
    }>()
);

export const addTodoFailureAction = createAction(
    '[TODO] add todo failure',
    props<{
        errors: any
    }>()
)