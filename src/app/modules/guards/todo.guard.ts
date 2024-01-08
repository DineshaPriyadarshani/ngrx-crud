import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import * as fromRoot from '../store';
import { Store } from "@ngrx/store";
import { loadTodoAction } from "../store/actions/load-todo.actions";

@Injectable()
export class TodoGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.select(fromRoot.selectTodosLoaded).pipe(
            tap(loaded => {
                if(!loaded) {
                    this.store.dispatch(loadTodoAction())
                }
            })
        )
    }

    constructor(private store: Store<fromRoot.State>) {}
}