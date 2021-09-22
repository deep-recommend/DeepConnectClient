import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ProgressSpinnerComponent } from './progress-spinner.component'

@NgModule({
    declarations: [ProgressSpinnerComponent],
    imports: [MatProgressSpinnerModule],
})
export class ProgressSpinnerModule {}
