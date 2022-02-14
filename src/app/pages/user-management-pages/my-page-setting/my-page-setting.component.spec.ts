import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageSettingComponent } from './my-page-setting.component';

describe('MyPageSettingComponent', () => {
    let component: MyPageSettingComponent;
    let fixture: ComponentFixture<MyPageSettingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MyPageSettingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyPageSettingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
