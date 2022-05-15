import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { toDataUrlAsObservable } from 'src/app/general/functions/to-dataurl';
import { UpdateProfileProps } from 'src/app/general/interfaces/update-profile.interface';
import { UpdateProfileModel } from 'src/app/general/models/update-profile.model';
import { UserProps } from 'src/app/states/user/user.model';

@Component({
    selector: 'app-my-page-setting-p',
    templateUrl: './my-page-setting-p.component.html',
    styleUrls: ['./my-page-setting-p.component.scss'],
})
export class MyPageSettingPComponent implements OnInit {
    hide: boolean = true;
    hide2: boolean = true;
    customFile!: string | File | Blob;
    updateUserFormInstance = new UpdateProfileModel();
    updateUserForm: FormGroup = this.fb.group(
        this.updateUserFormInstance.formGroupValue
    );

    @Input() positions!: string[] | null;
    @Input() genders!: string[] | null;
    @Input() years!: number[] | null;
    @Input() months!: number[] | null;
    @Input() days!: number[] | null;
    @Input() birthPlaces!: string[] | null;
    @Input() brothersAndSisters!: string[] | null;
    @Input() holiday!: string[] | null;
    @Input() profile!: UserProps | null;

    @Output() update: EventEmitter<UpdateProfileProps> =
        new EventEmitter<UpdateProfileProps>();

    constructor(private readonly fb: FormBuilder) {}

    ngOnInit(): void {
        this.setInitialValue();
    }

    onClickUpdate(): void {
        if (this.updateUserForm.valid) {
            this.update.emit(this.updateUserForm.value);
        }
    }

    setInitialValue(): void {
        this.updateUserForm.patchValue({ ...this.profile });
    }

    inputProfilePicture(event: any): void {
        const file = event.target.files[0];
        toDataUrlAsObservable(file, { maxWidth: 640 }).subscribe((dataUrl) => {
            this.updateUserForm.controls.profilePicture.setValue(dataUrl);
        });
    }
}
