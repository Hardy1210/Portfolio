'use client'
import { DownloadIcon } from 'lucide-react'
import { cn } from '../../../lib/utils'
import styles from './Button.module.scss'
export const Button = () => {
  return (
    <button
      onClick={() => window.open('/cv.pdf', '_blank')}
      className={cn(styles.button, 'flex flex-1 gap-2.5 p-2')}
    >
      Download CV
      <DownloadIcon size={15} className="" />
    </button>
  )
}
