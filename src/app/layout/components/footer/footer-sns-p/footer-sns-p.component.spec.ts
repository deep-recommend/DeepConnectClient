import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSnsPComponent } from './footer-sns-p.component';

describe('FooterSnsPComponent', () => {
    let component: FooterSnsPComponent;
    let fixture: ComponentFixture<FooterSnsPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterSnsPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterSnsPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
