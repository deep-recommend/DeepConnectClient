import { CustomError } from 'ts-custom-error';

export class ValidationError extends CustomError {
    constructor(message?: string) {
        super(message);
    }
}
