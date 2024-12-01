"use client"
import { NAV_LINKS } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import { useState } from "react"

const Navbar = () => {
    // Renaming the state hook for clarity
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav className="padding-container relative z-30 py-5 max-container flexBetween">
            <Link href='/'>
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            {isNavOpen ? <Image
                src='/close-menu.svg'
                onClick={toggleNav}
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                aria-label="Open navigation menu"
            /> : <Image
                src='/menu.svg'
                onClick={toggleNav}
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                aria-label="Open navigation menu"
            />}



            {/* Mobile Navigation */}
            <div
                className={`absolute z-40 top-0 left-0 bg-gray-90 sm:w-80 w-10/12 p-10  py-16 lg:hidden transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}
            >
                <ul className="h-full pt-10 gap-12 lg:hidden">
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                            className="regular-16 text-gray-200 flex flex-col cursor-pointer mb-5 transition-all hover:font-bold"
                            onClick={toggleNav}
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div className="lg:hidden mt-10">
                    <Button
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn_dark_green"

                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
