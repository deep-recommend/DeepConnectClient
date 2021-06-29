import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomMessageSenderPComponent } from './message-room-message-sender-p.component';

describe('MessageRoomMessageSenderPComponent', () => {
  let component: MessageRoomMessageSenderPComponent;
  let fixture: ComponentFixture<MessageRoomMessageSenderPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRoomMessageSenderPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomMessageSenderPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
