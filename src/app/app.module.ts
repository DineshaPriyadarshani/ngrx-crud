import { LOCALE_ID, NgModule } from '@angular/core';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './modules/services/translation.service';
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
    EffectsModule.forRoot(effects),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
            useClass: TranslationService
        }
    })   
  ],
  providers: [...services],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
