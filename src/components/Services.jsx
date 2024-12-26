"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const items = [
	{ id: "1", title: "Item 1", subtitle: "Subtitle 1" },
	{ id: "2", title: "Item 2", subtitle: "Subtitle 2" },
	{ id: "3", title: "Item 3", subtitle: "Subtitle 3" },
]

const Services = () => {
	const [selectedId, setSelectedId] = useState(null)

	return (
		<div className="item-list">
			{/* Map through items and display them */}
			{items.map((item) => (
				<motion.div
					layoutId={item.id}
					onClick={() => setSelectedId(item.id)}
					key={item.id}
					className="item"
				>
					<motion.h5>{item.subtitle}</motion.h5>
					<motion.h2>{item.title}</motion.h2>
				</motion.div>
			))}

			{/* AnimatePresence manages the expanded view */}
			<AnimatePresence>
				{selectedId && (
					<motion.div layoutId={selectedId} className="expanded-item">
						{/* Find the selected item based on selectedId */}
						{items.map((item) =>
							item.id === selectedId ? (
								<div key={item.id} className="bg-white">
									<motion.h5>{item.subtitle}</motion.h5>
									<motion.h2>{item.title}</motion.h2>
									<motion.button
										onClick={() => setSelectedId(null)}
										className="close-button"
									>
										Close
									</motion.button>
								</div>
							) : null
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Services
