import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPComponent } from './sidenav-p.component';

describe('SidenavPComponent', () => {
    let component: SidenavPComponent;
    let fixture: ComponentFixture<SidenavPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidenavPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SidenavPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
