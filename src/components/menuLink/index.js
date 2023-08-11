import classNames from "classnames"
import Link from "next/link"
import { createElement } from "react"
import { transparent } from "tailwindcss/colors"
export const MenuLink = (
    {
    as = null,
    href = '',
    active = false,
    disabled = false,
    children,
    color=transparent,
    ...props }) => {
    const _props = {
        ...props,
        className: classNames(
            'bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform  border-[1px] border-slate-200 hover:scale-105 hover:shadow-2xl',
           )
    }
    if (as) {
        return createElement(as, _props, icon, children)
    }
    return (<Link href={href} {..._props}>
        
        {children}
    </Link>)

}