import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { BlockService } from 'src/app/states/block';
import { mergeMap, first } from 'rxjs/operators';

@Component({
    selector: 'app-unblock-dialog',
    templateUrl: './unblock-dialog.component.html',
    styleUrls: ['./unblock-dialog.component.scss'],
})
export class UnblockDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        private readonly data: { id: number },
        private readonly dialogRef: MatDialogRef<UnblockDialogComponent>,
        private readonly socket: SocketService,
        private readonly blockService: BlockService
    ) {}

    unblock(): void {
        this.socket.unblock(this.data.id);
        this.blockService
            .getBlocks()
            .pipe(
                first(),
                mergeMap(async () => {
                    this.dialogRef.close();
                })
            )
            .subscribe();
    }
}
