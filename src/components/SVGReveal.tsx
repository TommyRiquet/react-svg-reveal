import React, { FC } from 'react'
import { motion } from 'framer-motion'

import { SVGRevealProps } from './SVGReveal.types'


const SVGReveal: FC<SVGRevealProps> = ({path, width, height, viewBox, stroke, strokeWidth, strokeLinecap, backgroundColor}) => {

	const draw = {
		hidden: {
		  opacity: 0,
		  pathLength: 0
		},
		visible: {
		  opacity: 1,
		  pathLength: 1,
		  transition: {
				pathLength: { type: 'spring', duration: 30, bounce: 0.2 },
				opacity: { duration: 0.1 },
			}
		}
	}

	return (
		<motion.div style={{ display: 'flex', justifyContent:'center', backgroundColor: backgroundColor || 'transparent' }}>
			<motion.svg
				width={width}
				height={height}
				viewBox={viewBox}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				initial='hidden'
				animate='visible'
				>
				{
					path.map((d, i) => (
						<motion.path
							key={i}
							d={d}
							variants={draw}
							stroke={stroke || 'black'}
							strokeWidth={strokeWidth || '20'}
							strokeLinecap={strokeLinecap || 'round'}
						/>
					))
				}
			</motion.svg>
		</motion.div>
	)
}

export default SVGReveal
