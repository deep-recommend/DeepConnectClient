import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from './perfect-scrollbar/perfect-scrollbar.directive';

@NgModule({
    declarations: [PerfectScrollbarDirective],
    imports: [CommonModule],
    exports: [PerfectScrollbarDirective],
})
export class DirectiveModule {}
