import { cn } from '@/lib/utils'
import { ComponentProps, FC } from 'react'

type SkeletonProps = ComponentProps<'div'>

export const Skeleton: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('animate-pulse rounded-md bg-zinc-50/10', className)}
    />
  )
}
