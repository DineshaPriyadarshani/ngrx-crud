import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTodos  from "../reducers/todo.reducer";
import * as fromFeature from '../reducers';

export const selectTodosState = createSelector(
    fromFeature.getTodosState,
    (state: fromTodos.TodosState) => state
  );

export const selectTodos = createSelector(
    selectTodosState,
    fromTodos.getTodos
);

export const selectTodosLoaded = createSelector(
  selectTodosState,
  fromTodos.getTodosLoaded
)