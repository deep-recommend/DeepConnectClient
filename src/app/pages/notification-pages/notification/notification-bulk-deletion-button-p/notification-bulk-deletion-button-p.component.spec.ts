import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBulkDeletionButtonPComponent } from './notification-bulk-deletion-button-p.component';

describe('NotificationBulkDeletionButtonPComponent', () => {
  let component: NotificationBulkDeletionButtonPComponent;
  let fixture: ComponentFixture<NotificationBulkDeletionButtonPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationBulkDeletionButtonPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBulkDeletionButtonPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
