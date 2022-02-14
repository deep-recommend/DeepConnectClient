import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPagePComponent } from './my-page-p.component';

describe('MyPagePComponent', () => {
    let component: MyPagePComponent;
    let fixture: ComponentFixture<MyPagePComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MyPagePComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyPagePComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
