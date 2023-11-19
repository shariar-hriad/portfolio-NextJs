import React from 'react'
import { Container } from '../shared'
import Link from 'next/link'
import { Mail } from 'lucide-react'

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
                                <Link href='mailto:shariarhossainriad@gmail.com'>
                                    <Mail className='h-6 w-6 text-amber-900' />
                                </Link>
                            </li>
                        </ul>
                        <button
                            // className='hoverLtext-white lg:text-full rounded-3xl border border-amber-800 bg-transparent px-5 py-3 text-base font-medium tracking-wide text-gray-700 transition-all duration-300 hover:border-transparent hover:bg-amber-800 hover:text-white hover:shadow-md lg:px-8 lg:py-4'
                            className='border-b'
                            type='button'
                        >
                            Contact with me
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
