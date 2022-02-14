import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromMeComponent } from './like-from-me.component';

describe('LikeFromMeComponent', () => {
    let component: LikeFromMeComponent;
    let fixture: ComponentFixture<LikeFromMeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeFromMeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LikeFromMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
