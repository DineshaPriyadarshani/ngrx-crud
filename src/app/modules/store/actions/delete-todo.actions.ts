import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models";

export const deleteTodoAction = createAction(
    '[TODO] delete todo',
    props<{
        id: string;
    }>()
);

export const deleteTodoSuccessAction = createAction(
    '[TODO] delete todo success',
    props<{
        payload: Todo[]
    }>()
);

export const deleteTodoFailureAction = createAction(
    '[TODO] delete todo failure',
    props<{
        errors: any
    }>()
)