import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserDetailPComponent } from './dashboard-user-detail-p.component';

describe('DashboardUserDetailPComponent', () => {
    let component: DashboardUserDetailPComponent;
    let fixture: ComponentFixture<DashboardUserDetailPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardUserDetailPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardUserDetailPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
