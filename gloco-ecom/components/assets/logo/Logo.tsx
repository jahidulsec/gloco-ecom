import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

function Logo({className, ...props}: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex items-center gap-1 relative', className)}>
        <div className="circle"></div>
        <h1 className='font-bold ml-4'>.Store</h1>
    </div>
  )
}

export default Logo