import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageSettingCComponent } from './my-page-setting-c.component';

describe('MyPageSettingCComponent', () => {
    let component: MyPageSettingCComponent;
    let fixture: ComponentFixture<MyPageSettingCComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MyPageSettingCComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyPageSettingCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
