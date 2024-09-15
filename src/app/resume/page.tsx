"use client"

import { describe } from "node:test"
import { title } from "process"
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaPython,
	FaNodeJs,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

const about = {
	title: "Men barada",
	description:
		"Men 2019-njy ýylda HTML CSS dilini öwrenip Sap Çözgüt-e front end developer bolup işe girdim soňra Python öwrendim we şol dilde kiçiräk api ýazym ondan soňra react geçdim emma react-da parkowkanyň proýektini dynyp Flutter diline geçmeli boldym ol dilde hem sap sargyt ýaly telefon programmasyny düzdim. Şu wagtky ýagdaýda bolsa men React we Server ugrundan işleýarin",
	info: [
		{ fieldName: "Addym", fieldValue: "Gülbahar" },
		{ fieldName: "Telefon belgim", fieldValue: "+99361099273" },
		{ fieldName: "Iş tejribäm", fieldValue: "4 Ýyl" },
		{ fieldName: "Milletim", fieldValue: "Türkmen" },
		{ fieldName: "Gmail", fieldValue: "20shamballa01@gmail.com" },
		{ fieldName: "Dil", fieldValue: "Iňlis dili, Rus dili, Turk dili" },
	],
}

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Iş tejribäm",
	description: "",

	items: [
		{
			company: "Sap Çözgüt. Front End Developer 2020-2022",
			position:
				"Bu saýt meniň ilkinji döreden saýdym we ol saýtda elektron söwdany ýerine ýetirip bolýardy.",
			duration: "hilli.com.tm",
		},
		{
			company: "Sap Çözgüt. Front End Developer 2021-2024",
			position:
				"Lomaý we bölekleýin elektron söwda. Bu saýt esasan hem telekeçiler üçin niýetlenen saýtdy.",
			duration: "ls.com.tm",
		},

		{
			company: "Sap Çözgüt. Front End Developer 2022-2024",
			position: "Halal söwda atly elektron söwda.",
			duration: "hs.com.tm",
		},

		{
			company: "Sap Çözgüt. Front End Developer 2022",
			position:
				"Parkowka üçin front endini yazdym. Bu proýektiň üsti bilen gelýän awtoulaglar naçe sagat parkowkada boldy we naçe manat tölemelidigi barada maglumat çykarýar",
			duration: "Parking Projeýekt",
		},
		{
			company: "Sap Çözgüt. Mobile Developer 2022-2023",
			position:
				"Flutterde ýasalan kiçiräk marketplace. Bu proýektiň üsti bilen men telefonda nähili application döreilýändigini öwrendim. ",
			duration: "Sap Sargyt",
		},

		{
			company: "Sap Çözgüt. Front End Developer 2024",
			position: "Bitum öndürýän reklamny Landing Page ",
			duration: "çaly.com.tm",
		},
	],
}

const education = {
	icon: "/assets/resume/cap.svg",
	title: "Okaýan ýerim",
	description:
		"2022-nji ýylda men Türkmenistanyň Telekommunikasiýa we Informatika institutynyň Maglumat Tehnologiýalaryny Programmirleme fakultetiniň Kompýuter Ulgamlarynyň Programma Üpjunçiligi toparynyň 1-nji ýyl talyby boldym. Şu wagt men TT&II okuwyň 3-nji ýyl talyby",

	items: [
		{
			institute: "TT & II.",
			degree: "MTP",
			duration: "2022 - 2027",
		},
	],
}

const skills = {
	icon: "/assets/resume/badge.svg",
	title: "Bilýän dillerim",
	description: "",

	skillList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 5",
		},
		{
			icon: <FaJs />,
			name: "js",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <FaPython />,
			name: "Python",
		},
		{
			icon: <FaNodeJs />,
			name: "Node Js",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind css",
		},
		{
			icon: <SiNextdotjs />,
			name: "Next js",
		},
	],
}
const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Iş Tejribäm</TabsTrigger>
						<TabsTrigger value="education">Okaýan ýerim</TabsTrigger>
						<TabsTrigger value="skills">Bilýän dillerim</TabsTrigger>
						<TabsTrigger value="about">Men barada</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[100%] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-lg max-w-[100%] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60 text-sm py-6">
															{item.company}
														</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institute}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skills, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skills.icon}
															</div>
														</TooltipTrigger>
														<TooltipTrigger>
															<p className="capitalize">{skills.name}</p>
														</TooltipTrigger>
													</Tooltip>
												</TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-[60px] max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
