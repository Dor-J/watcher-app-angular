import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'app-watcher-list',
  standalone: false,
  templateUrl: './watcher-list.component.html',
  styleUrl: './watcher-list.component.scss',
})
export class WatcherListComponent {
  @Input() watchers: Watcher[] = [];
  @Output() selectWatcher = new EventEmitter<Watcher>();
  @Output() removeWatcher = new EventEmitter<string>();

  onSelect(watcher: Watcher) {
    this.selectWatcher.emit(watcher);
  }

  onRemove(watcherId: string) {
    this.removeWatcher.emit(watcherId);
  }
}
