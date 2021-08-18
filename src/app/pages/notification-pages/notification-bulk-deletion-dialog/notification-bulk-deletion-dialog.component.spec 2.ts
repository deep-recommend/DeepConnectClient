import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBulkDeletionDialogComponent } from './notification-bulk-deletion-dialog.component';

describe('NotificationBulkDeletionDialogComponent', () => {
  let component: NotificationBulkDeletionDialogComponent;
  let fixture: ComponentFixture<NotificationBulkDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationBulkDeletionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBulkDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
