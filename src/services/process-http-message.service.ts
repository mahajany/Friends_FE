import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMessageService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      //Server Side error - extrct info
      // errMsg=`${error.status} - ${error.statusText|| ' '} ${error.error}`
      errMsg = "{ status: " + error.status
        + ", statusText: " + error.statusText
        + ", error: " + JSON.stringify(error.error) + "}";
    }

    return throwError(errMsg);

  }
}
