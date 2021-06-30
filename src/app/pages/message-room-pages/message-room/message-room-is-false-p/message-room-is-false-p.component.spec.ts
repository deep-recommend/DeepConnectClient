import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomIsFalsePComponent } from './message-room-is-false-p.component';

describe('MessageRoomIsFalsePComponent', () => {
  let component: MessageRoomIsFalsePComponent;
  let fixture: ComponentFixture<MessageRoomIsFalsePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRoomIsFalsePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomIsFalsePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
