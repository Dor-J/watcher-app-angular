import { Component, OnDestroy, OnInit } from '@angular/core';
import { watcherService } from '../../services/watcher.service';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'app-watcher-index',
  standalone: false,
  templateUrl: './watcher-index.component.html',
  styleUrl: './watcher-index.component.scss',
})
export class WatcherIndexComponent implements OnInit {
  watchers: Watcher[] = [];
  selectedWatcher: Watcher | null = null;

  ngOnInit(): void {
    this.loadWatchers();
  }

  loadWatchers(): void {
    watcherService
      .query()
      .then((loadedWatchers: unknown[]) => {
        this.watchers = loadedWatchers as Watcher[];
      })
      .catch((err) => {
        console.log('Problem getting watchers:', err);
      });
  }

  onRemoveWatcher(watcherId: string) {
    watcherService
      .remove(watcherId)
      .then(() => {
        this.watchers = this.watchers.filter(
          (watcher) => watcher.id !== watcherId
        );
      })
      .catch((err) => {
        console.log('err:', err);
      });
  }

  onAddWatcher() {
    const watcherName: string | null = prompt('Enter a name');
    const moviesStr = prompt('Enter comma separated movies');
    const movies = moviesStr ? moviesStr.split(',') : [];
    const newWatcher = watcherService.createWatcher(
      watcherName as string,
      movies
    );
    watcherService
      .save(newWatcher)
      .then((savedWatcher) => {
        this.watchers = [...this.watchers, savedWatcher];
      })
      .catch((err) => {
        console.log('err:', err);
      });
  }

  onSelectWatcher(watcher: Watcher) {
    this.selectedWatcher = watcher;
  }

  onCloseDetails() {
    this.selectedWatcher = null;
  }
}
