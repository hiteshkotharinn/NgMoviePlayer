import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(public snackBar: MatSnackBar) { }

  public handleError(error: any) {

    let errorMsg = error.message;

    //Throw error for HttpErrorResponse
    if (error instanceof HttpErrorResponse) {
      let httpErrorResponse: HttpErrorResponse = error;
      if (httpErrorResponse.status == 500) {
        errorMsg = httpErrorResponse.error.responseMsg;
      } else if (httpErrorResponse.status == 404) {
        errorMsg = "404 Bad Request!"
      } else if (httpErrorResponse.status == 400) {
        errorMsg = "400 Incorrect Request Params!"
      } else {
        console.error(error);
      }
    } else {
      console.error(error);
    }

    //Open SnackBar
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 100000,
      verticalPosition: 'top',
      data: errorMsg
    });
  }
}
