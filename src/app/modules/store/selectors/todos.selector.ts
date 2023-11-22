import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTodos  from "../reducers/add-todo.reducer";
import * as fromFeature from '../reducers';

export const selectTodosState = createSelector(
    fromFeature.getTodosState,
    (state: fromTodos.TodosState) => state
  );

export const selectTodos = createSelector(
    selectTodosState,
    fromTodos.getTodos
);
