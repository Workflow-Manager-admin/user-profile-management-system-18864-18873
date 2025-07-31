import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  // PUBLIC_INTERFACE
  @Input() icon: string = '';
  /** Name to show as the card's label. */
  @Input() label: string = '';
  /** Number or value to show. */
  @Input() value: string = '';
  /** Badge color. */
  @Input() badgeColor: string = '#1976d2';
  /** Optional badge text. */
  @Input() badge?: string;
}
