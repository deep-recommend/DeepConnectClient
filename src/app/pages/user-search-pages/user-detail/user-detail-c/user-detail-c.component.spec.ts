import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCComponent } from './user-detail-c.component';

describe('UserDetailCComponent', () => {
    let component: UserDetailCComponent;
    let fixture: ComponentFixture<UserDetailCComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserDetailCComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
