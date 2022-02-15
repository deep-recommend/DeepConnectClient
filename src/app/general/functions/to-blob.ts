import * as loadImage from 'blueimp-load-image';
import { Observable } from 'rxjs';

export const toBlobAsObservable = (
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

export const toBlobAsPromise = (
    file: string,
    options?: loadImage.LoadImageOptions
): Promise<Blob> => {
    return new Promise((resolve) => {
        loadImage(
            file,
            (image) => {
                (image as HTMLCanvasElement).toBlob((blob) => {
                    if (blob) resolve(blob);
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
