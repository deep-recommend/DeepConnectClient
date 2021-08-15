import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { convertToDataUrl } from 'src/app/general/functions/convert-to-dataurl'
import { UpdateProfileProps } from 'src/app/general/interfaces/update-profile.interface'
import { UpdateProfileModel } from 'src/app/general/models/update-profile.model'
import { UserProps } from 'src/app/states/user'

@Component({
    selector: 'app-my-page-setting-p',
    templateUrl: './my-page-setting-p.component.html',
    styleUrls: ['./my-page-setting-p.component.scss'],
})
export class MyPageSettingPComponent implements OnInit {
    hide: boolean = true
    hide2: boolean = true
    customFile: any
    updateUserFormInstance = new UpdateProfileModel()
    updateUserForm: FormGroup = this.fb.group(this.updateUserFormInstance.formGroupValue)

    @Input() positions!: string[] | null
    @Input() genders!: string[] | null
    @Input() years!: number[] | null
    @Input() months!: number[] | null
    @Input() days!: number[] | null
    @Input() birthPlaces!: string[] | null
    @Input() brothersAndSisters!: string[] | null
    @Input() holiday!: string[] | null
    @Input() profile!: UserProps | null

    @Output() update: EventEmitter<UpdateProfileProps> = new EventEmitter<UpdateProfileProps>()

    constructor(private readonly fb: FormBuilder) {}

    ngOnInit(): void {
        this.setInitialValue()
    }

    onClickUpdate(): void {
        if (this.updateUserForm.valid) {
            this.update.emit(this.updateUserForm.value)
        }
    }

    setInitialValue(): void {
        const form = this.updateUserForm.controls
        const me = this.profile
        form.realLastName.patchValue(me?.realLastName)
        form.realFirstName.patchValue(me?.realFirstName)
        form.stageName.patchValue(me?.stageName)
        form.position.patchValue(me?.position)
        form.gender.patchValue(me?.gender)
        form.birthYear.patchValue(me?.birthYear)
        form.birthMonth.patchValue(me?.birthMonth)
        form.birthDay.patchValue(me?.birthDay)
        form.birthPlace.patchValue(me?.birthPlace)
        form.agency.patchValue(me?.agency)
        form.description.patchValue(me?.description)
        form.profilePicture.patchValue(me?.profilePicture)
        form.work.patchValue(me?.work)
        form.hobby.patchValue(me?.hobby)
        form.brothersAndSisters.patchValue(me?.brothersAndSisters)
        form.educationalBackground.patchValue(me?.educationalBackground)
        form.height.patchValue(me?.height)
        form.secondLanguage.patchValue(me?.secondLanguage)
        form.holiday.patchValue(me?.holiday)
        form.instrument.patchValue(me?.instrument)
        form.sport.patchValue(me?.sport)
        form.isDrinking.patchValue(Boolean(me?.isDrinking))
        form.isSmoking.patchValue(Boolean(me?.isSmoking))
        form.hasPet.patchValue(Boolean(me?.hasPet))
        form.isMarried.patchValue(Boolean(me?.isMarried))
    }

    async inputProfilePicture(event?: any): Promise<void> {
        const file = event.target.files[0]
        const dataUrl = await convertToDataUrl(file)
        this.updateUserForm.controls.profilePicture.setValue(dataUrl)
    }
}
