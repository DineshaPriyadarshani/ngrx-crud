import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models";

export const editTodoAction = createAction(
    '[TODO] edit todo',
    props<{
        payload: any;
    }>()
);

export const editTodoSuccessAction = createAction(
    '[TODO] edit todo success',
    props<{
        payload: Todo[]
    }>()
);

export const editTodoFailureAction = createAction(
    '[TODO] edit todo failure',
    props<{
        errors: any
    }>()
);

export const updateTodoAction = createAction(
    '[TODO] update todo',
    props<{
        payload: Todo;
    }>()
);

export const updateTodoSuccessAction = createAction(
    '[TODO] update todo success',
    props<{
        payload: Todo[]
    }>()
);

export const updateTodoFailureAction = createAction(
    '[TODO] update todo failure',
    props<{
        errors: any
    }>()
)

