import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './page/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { WatcherIndexComponent } from './cmps/watcher-index/watcher-index.component';
import { WatcherListComponent } from './cmps/watcher-list/watcher-list.component';
import { WatcherPreviewComponent } from './cmps/watcher-preview/watcher-preview.component';
import { WatcherEditComponent } from './cmps/watcher-edit/watcher-edit.component';
import { WatcherDetailsComponent } from './cmps/watcher-details/watcher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WatcherIndexComponent,
    WatcherListComponent,
    WatcherPreviewComponent,
    WatcherEditComponent,
    WatcherDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
