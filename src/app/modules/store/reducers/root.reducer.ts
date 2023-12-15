import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodosReducers from './todo.reducer';
import { InjectionToken } from '@angular/core';

export interface State {
    todos: fromTodosReducers.TodosState
}

export const reducers = new InjectionToken<
    ActionReducerMap<State, Action>
    >('Root reducers token', {
    factory: () => ({
        todos: fromTodosReducers.reducer
    }),
});

export const getTodosState = createFeatureSelector<fromTodosReducers.TodosState>(
    'todos'
);