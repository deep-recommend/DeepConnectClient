import { FooterItemProps } from '../../interfaces/layout/footer.interface'
import { ValidationError } from '../../utilities/custom-error'

export type FooterItem = Readonly<Required<FooterItemProps>>

const validateFooterItem: (props: FooterItemProps) => void = (props: FooterItemProps) => {
    if (!props.icon) {
        throw new ValidationError('icon is required property.')
    }

    if (!props.label) {
        throw new ValidationError('label is required property.')
    }

    if (
        (props.routerLink && (props.hrefLink || props.disabled)) ||
        (props.hrefLink && (props.routerLink || props.disabled)) ||
        (props.disabled && (props.routerLink || props.hrefLink))
    ) {
        throw new ValidationError('routerLink, hrefLink and disabled are exclusive.')
    }
}

export const createFooterItem: (props: FooterItemProps) => FooterItem = (props: FooterItemProps) => {
    validateFooterItem(props)
    return Object.freeze({
        icon: props.icon,
        label: props.label,
        routerLink: props.routerLink ?? null,
        hrefLink: props.hrefLink ?? null,
        disabled: props.disabled ?? false,
    })
}
