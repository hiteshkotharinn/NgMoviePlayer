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
        errorMsg = "The request was accepted but an error on the server prevented the fulfillment of the request.";
      } else if (httpErrorResponse.status == 404) {
        errorMsg = "The requested video is not found!"
      } else if (httpErrorResponse.status == 400) {
        errorMsg = "There was a problem with the request!"
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
