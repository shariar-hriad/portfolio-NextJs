'use client'

import { menuItems } from '@/contexts'
import { Mail } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '../shared'
import { Button, buttonVariants } from '../ui/button'
import MobileMenu from './mobile-menu'
import { ModeToggle } from './theme-toggle'

const Header = () => {
    const pathname = usePathname()
    console.log(pathname)
    const { data: session } = useSession()
    console.log(session)

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-stone-950/25 py-1 shadow-md backdrop-blur-md lg:py-2'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='p-1'>
                        <Link href='/'>
                            <h2 className='text-xl font-bold text-gray-800 dark:text-white lg:text-2xl'>Riad</h2>
                            <span className='text-xs font-medium text-gray-500 lg:text-sm'>Mern Developer</span>
                        </Link>
                    </div>

                    <nav className='hidden px-3 lg:block'>
                        <ul className='inline-flex gap-3'>
                            {menuItems.map((item) => {
                                const activeRoute = pathname === item.href
                                const activeStyles = activeRoute ? 'text-amber-900' : ''
                                return (
                                    <li key={item.route}>
                                        <Link
                                            className={`${buttonVariants({
                                                variant: 'ghost',
                                            })} ${activeStyles}`}
                                            href={item.href}
                                        >
                                            {item.route}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className='flex items-center gap-5 p-1'>
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link
                                    className={buttonVariants({
                                        size: 'icon',
                                        variant: 'ghost',
                                    })}
                                    href='mailto:shariarhossainriad@gmail.com'
                                >
                                    <Mail className='h-[1.2rem] w-[1.2rem]' />
                                </Link>
                            </li>
                            <li>
                                <ModeToggle />
                            </li>
                            <li>
                                <Button
                                    variant={'destructive'}
                                    // onClick={() => signIn()}
                                >
                                    Login
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant={'outline'}
                                    // onClick={() => signOut()}
                                >
                                    Log Out
                                </Button>
                            </li>
                            <li>
                                <MobileMenu />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
