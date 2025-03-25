import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherEditComponent } from './watcher-edit.component';

describe('WatcherEditComponent', () => {
  let component: WatcherEditComponent;
  let fixture: ComponentFixture<WatcherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatcherEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
