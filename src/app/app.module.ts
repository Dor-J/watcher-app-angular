import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WatcherIndexComponent } from './watcher-index/watcher-index.component';
import { WatcherListComponent } from './watcher-list/watcher-list.component';
import { WatcherPreviewComponent } from './watcher-preview/watcher-preview.component';
import { WatcherEditComponent } from './watcher-edit/watcher-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WatcherIndexComponent,
    WatcherListComponent,
    WatcherPreviewComponent,
    WatcherEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
