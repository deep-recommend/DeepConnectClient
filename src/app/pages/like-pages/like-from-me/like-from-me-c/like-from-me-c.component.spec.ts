import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromMeCComponent } from './like-from-me-c.component';

describe('LikeFromMeCComponent', () => {
    let component: LikeFromMeCComponent;
    let fixture: ComponentFixture<LikeFromMeCComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeFromMeCComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LikeFromMeCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
