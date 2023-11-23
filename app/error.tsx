'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Error() {
    return (
        <div className='flex h-[70vh] items-center justify-center py-10'>
            <div className='text-center'>
                <p className='text-base font-semibold text-black dark:text-white'>
                    404
                </p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl'>
                    Page not found
                </h1>
                <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-300'>
                    Sorry, we couldn&apos:t find the page you&apos;re looking
                    for.
                </p>
                <div className='mt-4 flex items-center justify-center gap-x-3'>
                    <Button variant={'destructive'} type='button'>
                        <ArrowLeft size={16} className='mr-2' />
                        Go back
                    </Button>
                    <Button type='button'>Contact us</Button>
                </div>
            </div>
        </div>
    )
}
