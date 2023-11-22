import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './modules/store/effects';
import { reducers } from './modules/store/reducers/root.reducer';
import { MainModule } from './modules/main.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { services } from './modules/services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects)    
  ],
  providers: [...services],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
