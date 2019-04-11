import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { MoviePlayerService } from './shared';
import { UpperCasePipe } from './custom-pipe/upper-case.pipe';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component'
import { ErrorHandlerService } from './service/error-handler/error-handler.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviePlayerComponent,
    UpperCasePipe,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports:[
    MatSnackBarModule
  ],
  entryComponents: [SnackBarComponent],
  providers: [
    MoviePlayerService,
    UpperCasePipe,
    { provide:ErrorHandler, useClass: ErrorHandlerService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
