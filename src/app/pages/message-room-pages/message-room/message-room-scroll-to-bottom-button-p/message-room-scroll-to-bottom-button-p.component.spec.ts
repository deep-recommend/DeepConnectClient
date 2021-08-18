import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomScrollToBottomButtonPComponent } from './message-room-scroll-to-bottom-button-p.component';

describe('MessageRoomScrollToBottomButtonPComponent', () => {
  let component: MessageRoomScrollToBottomButtonPComponent;
  let fixture: ComponentFixture<MessageRoomScrollToBottomButtonPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRoomScrollToBottomButtonPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomScrollToBottomButtonPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
