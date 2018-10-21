import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private msgDuration: number = 2000;

  constructor(public snackBar: MatSnackBar) { }

  pushErrorMessage(message: string) {
    this.snackBar.open(message, 'ERROR', {
      duration: this.msgDuration,
    });
  }

  pushSuccessMessage(message: string) {
    this.snackBar.open(message, 'INFO', {
      duration: this.msgDuration,
    });
  }

  pushWarningMessage(message: string) {
    this.snackBar.open(message, 'WARNING', {
      duration: this.msgDuration,
    });
  }
}
