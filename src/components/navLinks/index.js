import classNames from "classnames"
import Link from "next/link"
import { createElement } from "react"
import { transparent } from "tailwindcss/colors"
export const NavLinks = (
    {
    as = null,
    href = '',
    active = false,
    disabled = false,
    icon,
    children,
    color=transparent,
    ...props }) => {
    const _props = {
        ...props,
        className: classNames(
            'relative flex items-center gap-1 text-base py-2 ',
            {
                'before:content-[""] before:h-full berfore: w-[3px]  before: -left-[6px]  before: bg-dar before:absolutebefore:rounded-full ':disabled,
                'pointer-events-none': disabled
            })
    }
    if (as) {
        return createElement(as, _props, icon, children)
    }
    return (<Link href={href} {..._props}>
        {icon}
        {children}
    </Link>)

}