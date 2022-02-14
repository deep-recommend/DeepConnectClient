import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomHeaderPComponent } from './message-room-header-p.component';

describe('MessageRoomHeaderPComponent', () => {
    let component: MessageRoomHeaderPComponent;
    let fixture: ComponentFixture<MessageRoomHeaderPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageRoomHeaderPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageRoomHeaderPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
