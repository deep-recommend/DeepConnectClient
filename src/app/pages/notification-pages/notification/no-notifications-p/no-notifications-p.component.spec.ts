import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNotificationsPComponent } from './no-notifications-p.component';

describe('NoNotificationsPComponent', () => {
    let component: NoNotificationsPComponent;
    let fixture: ComponentFixture<NoNotificationsPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NoNotificationsPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NoNotificationsPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
