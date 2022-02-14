import * as loadImage from 'blueimp-load-image';
import { Observable } from 'rxjs';

export const toBlob = (
    file: string,
    options?: loadImage.LoadImageOptions
): Observable<Blob> => {
    return new Observable((subscriber) => {
        loadImage(
            file,
            (image) => {
                (image as HTMLCanvasElement).toBlob((blob) => {
                    if (blob) {
                        subscriber.next(blob);
                        subscriber.complete();
                    }
                });
            },
            {
                canvas: true,
                meta: true,
                orientation: true,
                ...options,
            }
        );
    });
};
