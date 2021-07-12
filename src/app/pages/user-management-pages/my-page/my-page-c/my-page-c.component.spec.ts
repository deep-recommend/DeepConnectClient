import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyPageCComponent } from './my-page-c.component'

describe('MyPageCComponent', () => {
    let component: MyPageCComponent
    let fixture: ComponentFixture<MyPageCComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MyPageCComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(MyPageCComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
