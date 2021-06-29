import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomCComponent } from './message-room-c.component';

describe('MessageRoomCComponent', () => {
  let component: MessageRoomCComponent;
  let fixture: ComponentFixture<MessageRoomCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRoomCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
