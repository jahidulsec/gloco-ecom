import { cn } from '@/lib/utils'
import { AudioWaveform } from 'lucide-react'
import React, { ComponentProps } from 'react'

function Logo({className, ...props}: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('text-primary flex items-center gap-2', className)}>
        <AudioWaveform className='size-7' />
    </div>
  )
}

export default Logo