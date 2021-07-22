import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Button',
  template: `
    <button
      class="m5"
      *ngFor="let option of options; index as i"
      (click)="onVote.emit(i)"
    >
      {{ option }}
    </button>
  `,
  styleUrls: ['./style.css'],
})
export class ButtonComponent {
  @Input() options!: string[];
  @Output() onVote = new EventEmitter<number>();
}
