import { createReducer, on } from "@ngrx/store";
import { addTodoSuccessAction } from "../actions/add-todo.actions";
import { Todo } from "../../models";
import { editTodoSuccessAction, updateTodoSuccessAction } from "../actions/edit-todo.actions";
import { deleteTodoSuccessAction } from "../actions/delete-todo.actions";

export interface TodosState {
    data: Todo[];
}

const initialState: TodosState = {
    data: []
};

export const reducer = createReducer(
    initialState,
    on(addTodoSuccessAction, (state, { payload }) => ({
        ...state,
        data: payload
    })),

    on(editTodoSuccessAction, (state, { payload}) => ({
        ...state,
        data: payload
    })),

    on(updateTodoSuccessAction, (state, { payload}) => ({
        ...state,
        data: payload
    })),

    on(deleteTodoSuccessAction, (state, { payload}) => ({
        ...state,
        data: payload
    }))
);

export const getTodos = (state: any) => {
    return state.todos.data;
};
