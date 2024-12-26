"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { reverse } from "dns"
const Photo = () => {
	return (
		<div className="w-full h-full ">
			<div className="relative w-[298px] h-[298px] flex items-center xl:w-[498px] xl:[498px] xl:top-[90px] mix-blend-lighten ">
				<Image
					src="/heroImg.svg"
					alt="Avatar"
					priority
					quality={100}
					fill
					className=""
				/>
			</div>
		</div>
	)
}

export default Photo
