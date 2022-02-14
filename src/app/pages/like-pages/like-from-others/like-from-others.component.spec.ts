import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromOthersComponent } from './like-from-others.component';

describe('LikeFromOthersComponent', () => {
    let component: LikeFromOthersComponent;
    let fixture: ComponentFixture<LikeFromOthersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeFromOthersComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LikeFromOthersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
