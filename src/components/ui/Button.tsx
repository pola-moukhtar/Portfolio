import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-accent text-white hover:opacity-90 hover:-translate-y-px',
    outline:
      'border border-base bg-base text-primary hover:border-accent-mid hover:text-accent hover:bg-accent-light',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={classes} target={target} rel={rel}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps} onClick={onClick} className={classes}>
      {children}
    </motion.button>
  )
}
