import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pill-label',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="pill" [ngStyle]="{ 'background': bg, 'color': color }">{{ text }}</span>`,
  styleUrl: './pill-label.component.css'
})
export class PillLabelComponent {
  // PUBLIC_INTERFACE
  @Input() text: string = '';
  @Input() color: string = '#fff';
  @Input() bg: string = '#42a5f5';
}
