import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomScreenPComponent } from './message-room-screen-p.component';

describe('MessageRoomScreenPComponent', () => {
    let component: MessageRoomScreenPComponent;
    let fixture: ComponentFixture<MessageRoomScreenPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageRoomScreenPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageRoomScreenPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
