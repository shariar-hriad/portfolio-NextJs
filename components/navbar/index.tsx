'use client'

import { Container } from '../shared'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { ModeToggle } from './theme-toggle'
import { buttonVariants } from '../ui/button'

const Header = () => {
    return (
        <header className='border-b py-1 shadow-md lg:py-2'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='p-1'>
                        <Link href='/'>
                            <h2 className='text-xl font-bold text-gray-800 lg:text-2xl'>
                                Riad
                            </h2>
                            <span className='text-xs font-medium text-gray-500 lg:text-sm'>
                                Mern Developer
                            </span>
                        </Link>
                    </div>
                    <div className='flex items-center gap-5 p-1'>
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link
                                    className={buttonVariants({
                                        size: 'icon',
                                        variant: 'outline',
                                    })}
                                    href='mailto:shariarhossainriad@gmail.com'
                                >
                                    <Mail className='h-6 w-6' />
                                </Link>
                            </li>
                        </ul>
                        <ModeToggle />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
