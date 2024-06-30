import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class SaveButtonComponent {
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
