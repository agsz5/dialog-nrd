import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dialog-nrd-app',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    @Input() title = '';
    @Input() show = false;
    @Output() onClose = new EventEmitter<void>();

  closeDialog() {
    this.onClose.emit();
  }
}
