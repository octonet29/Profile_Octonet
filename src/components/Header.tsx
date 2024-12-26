import Link from "next/link"
import React from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "./ui/button"
import Image from "next/image"

const Header = () => {
	return (
		<header className="py-8 xl:py-[15px]  text-white">
			<div className="container flex justify-between mx-auto">
				{/* Logo */}
				<div className="h-[68px] w-[322px]">
					<Link href="/" className="h-[100%] w-[100%]">
						<Image
							src="/logo_with_text.svg"
							alt="logo"
							width={0}
							height={0}
							sizes="100%"
							style={{ width: "100%", height: "auto" }}
						/>
					</Link>
				</div>
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
