import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'app-watcher-preview',
  standalone: false,
  templateUrl: './watcher-preview.component.html',
  styleUrl: './watcher-preview.component.scss',
})
export class WatcherPreviewComponent {
  @Input() watcher!: Watcher;
  @Output() selectWatcher = new EventEmitter<Watcher>();
  @Output() removeWatcher = new EventEmitter<string>();

  onSelect() {
    this.selectWatcher.emit(this.watcher);
  }

  onRemove() {
    this.removeWatcher.emit(this.watcher.id);
  }
}
