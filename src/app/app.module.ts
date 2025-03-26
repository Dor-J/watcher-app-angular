import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './page/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { WatcherIndexComponent } from './cmps/watcher-index/watcher-index.component';
import { WatcherListComponent } from './cmps/watcher-list/watcher-list.component';
import { WatcherPreviewComponent } from './cmps/watcher-preview/watcher-preview.component';
import { WatcherDetailsComponent } from './cmps/watcher-details/watcher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WatcherIndexComponent,
    WatcherListComponent,
    WatcherPreviewComponent,
    WatcherDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
