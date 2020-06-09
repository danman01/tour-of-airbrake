// Angular app.module including airbreak error handler
// see https://airbrake.io/docs/installing-airbrake/installing-airbrake-in-an-angular-app/
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirbrakeErrorHandler } from './airbrake-error-handler';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler, useClass: AirbrakeErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
