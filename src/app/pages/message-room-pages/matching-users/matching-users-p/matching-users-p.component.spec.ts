import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingUsersPComponent } from './matching-users-p.component';

describe('MatchingUsersPComponent', () => {
    let component: MatchingUsersPComponent;
    let fixture: ComponentFixture<MatchingUsersPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatchingUsersPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchingUsersPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
