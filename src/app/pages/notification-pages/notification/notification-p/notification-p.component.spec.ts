import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPComponent } from './notification-p.component';

describe('NotificationPComponent', () => {
    let component: NotificationPComponent;
    let fixture: ComponentFixture<NotificationPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotificationPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
