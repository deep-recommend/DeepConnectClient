import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { toBlob } from 'src/app/general/functions/to-blob'
import { UserProps } from 'src/app/states/user/user.model'

@Component({
    selector: 'app-my-page-p',
    templateUrl: './my-page-p.component.html',
    styleUrls: ['./my-page-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPagePComponent implements OnInit {
    @Input() profile!: UserProps | null

    constructor(
        private readonly sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {}

    async transform(){
      return await toBlob(String(this.profile?.profilePicture))
      //return this.sanitizer.bypassSecurityTrustResourceUrl(String(this.profile?.profilePicture));
    }
}
