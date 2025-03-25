import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherIndexComponent } from './watcher-index.component';

describe('WatcherIndexComponent', () => {
  let component: WatcherIndexComponent;
  let fixture: ComponentFixture<WatcherIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatcherIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
