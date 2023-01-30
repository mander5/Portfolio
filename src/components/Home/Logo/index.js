import React from 'react'
import './index.scss'
import { motion } from 'framer-motion'

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: 'easeInOut',
    },
  },
}

function Logo() {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="235"
        height="210"
        viewBox="0 0 235 210"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <defs>
          <clipPath id="clip-Custom_Size_1">
            <path d="M0 0H235V210H0z"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#clip-Custom_Size_1)" data-name="Custom Size – 1">
          <motion.path
            fill="rgba(245,245,245,0)"
            d="M0 0H235V210H0z"
            variants={pathVariants}
          ></motion.path>
          <motion.path
            fill="none"
            stroke="gold"
            strokeWidth="1"
            d="M66.5 169.5h25.443l13.2-43.419h26.4"
            data-name="Path 1"
            variants={pathVariants}
          ></motion.path>
          <motion.path
            fill="none"
            stroke="gold"
            strokeWidth="1"
            d="M144.5 169.5h25.732L135.184 51.434"
            data-name="Path 2"
            variants={pathVariants}
          ></motion.path>
          <motion.path
            fill="none"
            stroke="gold"
            strokeWidth="1"
            d="M104.5 108.5h27.043l-9.1-35.673"
            data-name="Path 3"
            variants={pathVariants}
          ></motion.path>
        </g>
      </motion.svg>
    </>
  )
}

export default Logo
