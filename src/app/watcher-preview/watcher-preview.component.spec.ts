import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherPreviewComponent } from './watcher-preview.component';

describe('WatcherPreviewComponent', () => {
  let component: WatcherPreviewComponent;
  let fixture: ComponentFixture<WatcherPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatcherPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
