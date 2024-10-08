import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import React from "react"
import { FiDownload } from "react-icons/fi"

const Home = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Web Developer</span>
						<h1 className="h1 mb-6">
							Salam meniň adym <br />{" "}
							<span className="text-accent">Gülbahar</span>
						</h1>
						<p className="max-w-[600px] mb-9 text-white/80">
							Özim barada kiçiräk maglumat aýdanymda men 4 ýyl programmist bolup
							işleýärin. 4 ýylyň içinde men 7 we ondan köp proýektlaryň üstünde
							işledim. Olaryň içinde Halal söwda, Hilli söwda, Readit Store,
							Lomaý söwda ýaly saýtlar girýär. Saýtlardan başgada kiçiräk
							aplicationlary we serverleri(Nginx) işledim.
						</p>
						{/* subs btn */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	)
}

export default Home
