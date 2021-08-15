import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserSearchProps } from 'src/app/general/interfaces/user-search.interface'
import { UserSearchModel } from 'src/app/general/models/user-search.model'

@Component({
    selector: 'app-search-form-p',
    templateUrl: './search-form-p.component.html',
    styleUrls: ['./search-form-p.component.scss'],
})
export class SearchFormPComponent implements OnInit {
    userSearchFormInstance = new UserSearchModel()
    userSearchForm: FormGroup = this.fb.group(this.userSearchFormInstance.formGroupValue)

    @Input() positions!: string[] | null
    @Input() genders!: string[] | null
    @Input() years!: number[] | null
    @Input() months!: number[] | null
    @Input() days!: number[] | null
    @Input() birthPlaces!: string[] | null
    @Input() brothersAndSisters!: string[] | null
    @Input() holiday!: string[] | null

    @Output() submitUserSearch: EventEmitter<UserSearchProps> = new EventEmitter<UserSearchProps>()

    constructor(private readonly fb: FormBuilder) {}

    ngOnInit(): void {}

    onSubmitUserSearch(): void {
        this.submitUserSearch.emit(this.userSearchForm.value)
    }
}
