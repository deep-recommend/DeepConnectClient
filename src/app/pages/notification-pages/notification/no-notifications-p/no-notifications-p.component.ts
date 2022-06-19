import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
    selector: 'app-no-notifications-p',
    templateUrl: './no-notifications-p.component.html',
    styleUrls: ['./no-notifications-p.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoNotificationsPComponent {
    @Input() isMobile: boolean | null = false;
}
