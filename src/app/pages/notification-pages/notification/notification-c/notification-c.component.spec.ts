import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCComponent } from './notification-c.component';

describe('NotificationCComponent', () => {
  let component: NotificationCComponent;
  let fixture: ComponentFixture<NotificationCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
