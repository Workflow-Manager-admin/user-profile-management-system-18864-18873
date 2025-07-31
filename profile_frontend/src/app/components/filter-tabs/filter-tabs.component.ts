import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.css'
})
export class FilterTabsComponent {
  // PUBLIC_INTERFACE
  @Input() tabs: string[] = [];
  @Input() activeIndex: number = 0;
  @Output() tabSelected = new EventEmitter<number>();

  selectTab(idx: number) {
    this.tabSelected.emit(idx);
  }
}
