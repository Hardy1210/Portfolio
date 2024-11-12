'use client'
import { DownloadIcon } from 'lucide-react'
import { cn } from '../../../lib/utils'
import styles from './Button.module.scss'
export const Button = () => {
  const handleDownLoad = () => {
    const link = document.createElement('a')
    link.href = '/cv-Hardy-LINO.pdf'
    link.download = 'cv-Hardy-LINO.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <button
      onClick={handleDownLoad}
      className={cn(
        styles.button,
        'flex flex-1 items-center justify-center gap-2.5 p-2 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-black',
      )}
    >
      Download CV
      <DownloadIcon size={15} className="" />
    </button>
  )
}
{
  /**onClick={() => window.open('/cv-Hardy-LINO.pdf', '_blank')} */
}
