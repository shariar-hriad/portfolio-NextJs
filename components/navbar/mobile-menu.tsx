import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { menuItems } from '@/contexts'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                <HamburgerMenuIcon className='h-[1.2rem] w-[1.2rem]' />
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle>Proffesional Full Stack Web Developer</SheetTitle>
                    <SheetDescription>Building the Web, Breaking the Mold.</SheetDescription>
                </SheetHeader>
                <ul className='mt-10 space-y-10'>
                    {menuItems.map((item) => (
                        <li key={item.route}>
                            <Link href={item.href}>{item.route}</Link>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
