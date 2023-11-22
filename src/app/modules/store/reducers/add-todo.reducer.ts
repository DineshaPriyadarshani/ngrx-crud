import { createReducer, on } from "@ngrx/store";
import { addTodoSuccessAction } from "../actions/add-todo.actions";
import { Todo } from "../../models";

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
        data: [
            ...state.data,
            payload
        ]
    }))
);

export const getTodos = (state: any) => {
    return state.todos.data
};
