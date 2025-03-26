import { Watcher } from '../models/watcher.model.js';
import { storageService } from './async-storage.service.js';
import { loadFromStorage, saveToStorage } from './util.service.js';

export const watcherService = {
  query,
  remove,
  save,
  createWatcher,
};

const WATCHER_DB = 'WATCHER_DB';
_createWatchers();

async function query(): Promise<Watcher[]> {
  return storageService.query(WATCHER_DB);
}

async function remove(watcherId: string) {
  return storageService.remove(WATCHER_DB, watcherId);
}

async function save(watcher: Watcher) {
  return storageService.post(WATCHER_DB, watcher);
}

function createWatcher(fullname: string, movies = ['A', 'B', 'C']) {
  return {
    fullname,
    movies,
  };
}

function _createWatchers() {
  let watchers: Watcher[] = loadFromStorage(WATCHER_DB);
  if (!watchers || !watchers.length) {
    watchers = [
      {
        id: 'w101',
        fullname: 'Puki Ba',
        movies: ['Rambo', 'Rocky'],
      },
      {
        id: 'w102',
        fullname: 'John Doe',
        movies: ['The Godfather', 'Breaking Bad'],
      },
      {
        id: 'w103',
        fullname: 'Jane Smith',
        movies: ['Inception', 'Stranger Things'],
      },
      {
        id: 'w104',
        fullname: 'Alice Johnson',
        movies: ['The Matrix', 'Game of Thrones'],
      },
      {
        id: 'w105',
        fullname: 'Bob Brown',
        movies: ['The Dark Knight', 'The Mandalorian'],
      },
      {
        id: 'w106',
        fullname: 'Emily Davis',
        movies: ['Pulp Fiction', 'The Crown'],
      },
    ];

    saveToStorage(WATCHER_DB, watchers);
  }
}
