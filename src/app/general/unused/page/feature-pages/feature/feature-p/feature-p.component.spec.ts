import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePComponent } from './feature-p.component';

describe('FeaturePComponent', () => {
    let component: FeaturePComponent;
    let fixture: ComponentFixture<FeaturePComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeaturePComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturePComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
