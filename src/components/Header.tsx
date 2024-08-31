import Link from "next/link"
import React from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "./ui/button"

const Header = () => {
	return (
		<header className="py-8 xl:py-[15px]  text-white bg-pink-50/20">
			<div className="container flex justify-between mx-auto">
				{/* Logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Octonet <span className="text-accent">.</span>
					</h1>
				</Link>
				{/* desktop nav */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
				</div>
				{/* mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
