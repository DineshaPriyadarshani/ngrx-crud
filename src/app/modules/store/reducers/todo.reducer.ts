import { createReducer, on } from "@ngrx/store";
import { addTodoSuccessAction } from "../actions/add-todo.actions";
import { Todo } from "../../models";
import { editTodoSuccessAction, updateTodoSuccessAction } from "../actions/edit-todo.actions";
import { deleteTodoSuccessAction } from "../actions/delete-todo.actions";
import { loadTodoSuccessAction } from "../actions/load-todo.actions";

export interface TodosState {
    loaded: boolean;
    loading: boolean;
    data: Todo[];
    errors: any;
}

const initialState: TodosState = {
    loaded: false,
    loading: false,
    data: [],
    errors: []
};

export const reducer = createReducer(
    initialState,
    on(loadTodoSuccessAction, (state, {payload}) => ({
        ...state,
        data: payload,
        loaded: true
    })),

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

export const getTodosLoaded = (state: any) => {
    return state.todos.loaded;
}
