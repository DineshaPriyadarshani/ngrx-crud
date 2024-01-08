import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models";

export const loadTodoAction = createAction(
    '[TODO] load todo'
);

export const loadTodoSuccessAction = createAction(
    '[TODO] load todo success',
    props<{
        payload: Todo[]
    }>()
);

export const loadTodoFailureAction = createAction(
    '[TODO] load todo failure',
    props<{
        errors: any
    }>()
)