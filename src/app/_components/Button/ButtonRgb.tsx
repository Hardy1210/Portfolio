'use client'
import { DownloadIcon } from 'lucide-react'
import { cn } from '../../../lib/utils'
import styles from './buttonRgb.module.scss'
export const ButtonRgb = () => {
  const handleDownLoad = () => {
    const link = document.createElement('a')
    link.href = '/CV-13.pdf'
    link.download = 'CV-13.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <button
      onClick={handleDownLoad}
      className={cn(
        styles.button,
        'flex flex-row flex-1 justify-center border-2 border-foreground dark:hover:border-transparent z-50  transition-colors duration-500 ease-in-out',
      )}
    >
      <span
        className={cn(
          styles.text,
          'flex flex-row justify-center items-center gap-3 text-foreground dark:bg-black',
        )}
      >
        Download CV
        <DownloadIcon size={15} />
      </span>
    </button>
  )
}
{
  /**onClick={() => window.open('/cv-Hardy-LINO.pdf', '_blank')} */
}
