import Link from "next/link"
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa"

const socials = [
	{
		icon: <FaGithub />,
		path: "https://github.com/octonet29",
	},
	{
		icon: <FaInstagram />,
		path: "https://www.instagram.com/octonet29/",
	},
	{
		icon: <FaTelegram />,
		path: "https://t.me/OcToNeT_29",
	},
]

const Social = ({ containerStyles, iconStyles }: any) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link href={item.path} key={index} className={iconStyles}>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Social
