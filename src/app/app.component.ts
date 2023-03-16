import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedOption = { title: '', template: '' };
  showDialogBox = false;

  onChange(event: any) {
    this.selectedOption = event.target.value;
  }

  showDialog() {
    this.showDialogBox = true;
  }

  closeDialog() {
    this.showDialogBox = false;
  }

  submitForm() {
    this.closeDialog();
  }
}
