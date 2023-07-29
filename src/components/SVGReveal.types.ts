import { CustomValueType, MotionValue } from "framer-motion"

export interface SVGRevealProps {
	height: number
	width: number
	viewBox: string
  	path: string[]
	backgroundColor?: string
	stroke?: string
	strokeWidth?: number
	strokeLinecap?: "inherit" | CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | "butt" | "round" | "square" | undefined
}