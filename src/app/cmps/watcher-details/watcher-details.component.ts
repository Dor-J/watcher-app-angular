import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'app-watcher-details',
  standalone: false,
  templateUrl: './watcher-details.component.html',
  styleUrl: './watcher-details.component.scss',
})
export class WatcherDetailsComponent {
  @Input() watcher!: Watcher;
  @Output() closeDetails = new EventEmitter<void>();

  evStop(ev: Event) {
    ev.stopPropagation();
  }

  onCloseDetails() {
    this.closeDetails.emit();
  }
}
