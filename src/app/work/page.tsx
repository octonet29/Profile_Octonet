"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Pizza Kafe",
		description: "Kiçiräk mini proýekt beta görnüşinde",
		stack: [{ name: "React" }, { name: "Css" }, { name: "TypeScript" }],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "https://github.com/octonet29/Pizza_Restaurant.git",
	},
]

const Work = () => {
	const [project, setProject] = useState(projects[0])

	// const handleSlideChange = ({ swiper }: any) => {
	// 	const currentIndex = swiper.activeIndex
	// 	setProject(project[currentIndex])
	// }

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80px] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							<div className="text-8xl leading-none font-extralight text-transparent text-outline">
								{project.num}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project
							</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{index !== project.stack.length - 1 && ","}
										</li>
									)
								})}
							</ul>
							<div className="border border-white/20"></div>
							<div className="flex items-center gap-4">
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						{projects.map((project, index) => {
							return (
								<div
									key={index}
									className="w-full h-[460px] relative group flex justify-center items-center bg-pink-50"
								>
									<div className=" bg-black/10 z-10"></div>
									<div className="h-full items-center flex">
										<Image
											src={project.image}
											fill
											className="object-cover"
											alt=""
										/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Work
