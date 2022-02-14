import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromMeDetailPComponent } from './like-from-me-detail-p.component';

describe('LikeFromMeDetailPComponent', () => {
    let component: LikeFromMeDetailPComponent;
    let fixture: ComponentFixture<LikeFromMeDetailPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeFromMeDetailPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LikeFromMeDetailPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
