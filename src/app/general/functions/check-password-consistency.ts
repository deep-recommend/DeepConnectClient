import { FormGroup } from '@angular/forms';

export const checkPasswordConsistency = (group: FormGroup) => {
    const password = group.controls.password.value;
    const passwordConfirmation = group.controls.passwordConfirmation.value;

    return password === passwordConfirmation ? undefined : { notSame: true };
};
