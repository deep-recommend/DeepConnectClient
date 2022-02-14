import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailLikePComponent } from './user-detail-like-p.component';

describe('UserDetailLikePComponent', () => {
    let component: UserDetailLikePComponent;
    let fixture: ComponentFixture<UserDetailLikePComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserDetailLikePComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailLikePComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
