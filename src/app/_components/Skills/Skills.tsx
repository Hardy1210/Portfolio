import { cn } from '@/lib/utils'
import { Section } from '../Section/Section'
import styles from './skills.module.scss'

export const Skills = () => {
  return (
    <Section className={cn(styles.Skills, 'grid grid-cols-2 gap-10')}></Section>
  )
}
