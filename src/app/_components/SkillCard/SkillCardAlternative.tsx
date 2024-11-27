// IconMap.ts
'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import styles from './skillCardAlternative.module.scss'

export type SkillCardProps = {
  icon: ReactNode
  secondaryIcon: ReactNode

  title: string
  description: string
}

export const SkillCardAlternative: React.FC<SkillCardProps> = ({
  icon,
  secondaryIcon,

  title,
  description,
}) => {
  return (
    <div
      className={cn(
        styles.skill__container,
        'p-5 relative flex flex-row rounded-xl overflow-hidden group',
      )}
    >
      <div
        className={cn(
          styles.skill__layer,
          'z-50 absolute inset-0 flex justify-center items-center backdrop-blur-sm bg-black/5 transition-opacity duration-200 ease-in-out opacity-100 group-hover:opacity-0  group-hover:pointer-events-none',
        )}
      >
        <div
          className={cn(
            styles.icon,
            'transition-transform duration-500 dark:group-hover:rotate-180',
          )}
        >
          {/* para una animacion en icon transition-transform duration-500 group-hover:rotate-180 */}
          <span className="text-foreground">{icon}</span>
        </div>
      </div>
      <div className={cn(styles.content__card, 'flex flex-col gap-2')}>
        <div>
          <span className="text-foreground">{secondaryIcon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
