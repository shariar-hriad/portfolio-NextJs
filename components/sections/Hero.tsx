import Link from 'next/link'
import { FC } from 'react'
import { Container } from '../shared'
import { buttonVariants } from '../ui/button'

type HeroProps = {}

// text-gray-800 dark:text-white

const Hero: FC<HeroProps> = () => {
    return (
        <section className='flex h-[80vh] items-center py-8 lg:py-20'>
            <Container>
                <div className='relative z-[1] mx-auto max-w-3xl text-center'>
                    <div className='p-1'>
                        <span className='mb-3 inline-block rounded-full border border-orange-900 px-3 py-1 text-stone-600 dark:text-stone-100'>
                            Building the Web, Breaking the Mold.
                        </span>
                        <h1 className='relative mb-3 bg-gradient-to-r from-gray-800 to-red-500 bg-clip-text text-4xl font-semibold leading-normal text-transparent dark:from-pink-500 dark:to-red-500 lg:mb-5 lg:text-6xl lg:font-bold lg:leading-[1.3]'>
                            Empowering Businesses through Powerful Web
                            Solutions.
                        </h1>
                        <p className='mb-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 lg:mb-5 lg:text-lg'>
                            I am the architect behind the code, blending
                            creativity with technology. From crafting responsive
                            interfaces to building robust server-side
                            applications, I thrive in the dynamic world of web
                            development.
                        </p>
                        <Link
                            href='/'
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                            })}
                        >
                            Recent Projects
                        </Link>
                    </div>
                    <div className='absolute left-1/2 top-1/2 -z-[1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full to-amber-900 opacity-80 blur-[72px] dark:bg-gradient-to-tr dark:from-zinc-500' />
                </div>
            </Container>
        </section>
    )
}

export default Hero

{
    /* <div className='flex-1 p-1'>
<div>
    <Image
        src='/hero/heroImage.svg'
        alt='Hero Image'
        width={900}
        height={800}
        className='mx-auto w-3/4 object-contain'
    />
</div>
</div> */
}
