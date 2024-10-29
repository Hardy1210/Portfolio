// IconMap.ts

import { iconMap } from '@/app/skillData/skillData'
import { cn } from '@/lib/utils'
import styles from './skillCard.module.scss'

export type SkillCardProps = {
  skillImgSrc: string
  skillImgAlt: string
  title: string
  description: string
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skillImgSrc,
  skillImgAlt,
  title,
  description,
}) => {
  // Seleccionar el ícono correspondiente basado en skillImgSrc
  const IconComponent = iconMap[skillImgSrc]
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
          'absolute inset-0 flex justify-center items-center backdrop-blur-sm bg-black/5 transition-opacity duration-200 ease-in-out opacity-100 group-hover:opacity-0  group-hover:pointer-events-none',
        )}
      >
        <div className={cn(styles.icon, '')}>
          {/* para una animacion en icon transition-transform duration-500 group-hover:rotate-180 */}
          {IconComponent && (
            <IconComponent size={80} aria-label={skillImgAlt} />
          )}
        </div>
      </div>
      <div className={cn(styles.content__card, 'flex flex-col gap-2')}>
        <div>
          {IconComponent && (
            <IconComponent size={40} aria-label={skillImgAlt} />
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
