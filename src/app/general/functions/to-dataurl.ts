import * as loadImage from 'blueimp-load-image'
import { Observable } from 'rxjs'

export const toDataUrl = (file: string | File | Blob, options?: loadImage.LoadImageOptions): Observable<string> => {
    return new Observable<string>((subscriber) => {
        loadImage(
            file,
            (image) => {
                subscriber.next((image as HTMLCanvasElement).toDataURL());
                subscriber.complete();
            },
            {
                canvas: true,
                meta: true,
                orientation: true,
                ...options,
            }
        )
    })
}
