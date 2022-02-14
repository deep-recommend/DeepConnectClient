import { PartialDeep } from 'type-fest';
import * as merge from 'deepmerge';
import { ValidationError } from '../../utilities/custom-error';
import { SideNavMenuProps } from '../../interfaces/layout/sidenav-menu.interface';

export type SideNavMenu = Readonly<Required<SideNavMenuProps>>;

const validateHeaderIconMenu: (props: SideNavMenuProps) => void = (
    props: SideNavMenuProps
) => {
    if (!props.icon) {
        throw new ValidationError('tooltip is required property.');
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
            'routerLink, hrefLink, and disabled are exclusive'
        );
    }
};

export const createSideNavMenu: (props: SideNavMenuProps) => SideNavMenu = (
    props: SideNavMenuProps
) => {
    validateHeaderIconMenu(props);
    return Object.freeze({
        icon: props.icon,
        label: props.label,
        routerLink: props.routerLink ?? null,
        hrefLink: props.hrefLink ?? null,
        disabled: props.disabled ?? false,
        isVisibleTopBorder: props.isVisibleTopBorder ?? false,
    });
};

export const changeSideNavMenu: (
    sideNavMenu: SideNavMenu,
    props: PartialDeep<SideNavMenuProps>
) => SideNavMenu = (
    sideNavMenu: SideNavMenu,
    props: PartialDeep<SideNavMenuProps>
) => {
    return createSideNavMenu(
        merge<SideNavMenu, PartialDeep<SideNavMenuProps>>(sideNavMenu, props)
    );
};
