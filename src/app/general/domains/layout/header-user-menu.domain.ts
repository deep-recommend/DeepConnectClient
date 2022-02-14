import { HeaderAccountMenuProps } from '../../interfaces/layout/header-user-menu.interface';
import { ValidationError } from '../../utilities/custom-error';

export type HeaderAccountMenu = Readonly<Required<HeaderAccountMenuProps>>;

const validateHeaderAccountMenu: (props: HeaderAccountMenuProps) => void = (
    props: HeaderAccountMenuProps
) => {
    if (!props.icon) {
        throw new ValidationError('icon is required property.');
    }

    if (!props.label) {
        throw new ValidationError('label is required property.');
    }

    if (
        (props.routerLink && (props.hrefLink || props.disabled)) ||
        (props.hrefLink && (props.routerLink || props.disabled)) ||
        (props.disabled && (props.routerLink || props.hrefLink))
    ) {
        throw new ValidationError(
            'routerLink, hrefLink and disabled are exclusive.'
        );
    }
};

export const createHeaderAccountMenu: (
    props: HeaderAccountMenuProps
) => HeaderAccountMenu = (props: HeaderAccountMenuProps) => {
    validateHeaderAccountMenu(props);
    return Object.freeze({
        icon: props.icon,
        label: props.label,
        routerLink: props.routerLink ?? null,
        hrefLink: props.hrefLink ?? null,
        disabled: props.disabled ?? false,
        isHideWhenWindowWidthWide: props.isHideWhenWindowWidthWide ?? false,
    });
};
