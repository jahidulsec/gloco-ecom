import { Button } from '@/components/ui/button'
import { AlignRight } from 'lucide-react'
import React from 'react'

function CategoryCard() {
  return (
    <article className='absolute w-[15rem] top-1 bg-primary px-4 text-sm rounded-t-md flex items-center justify-between gap-5'>
        <div className="">
            <h4 className='text-sm'>All Departments</h4>
        </div>

        <Button size={'icon'} variant={'text'} className='w-fit text-background hover:text-background/50'>
            <AlignRight />
        </Button>
    </article>
  )
}

export default CategoryCard