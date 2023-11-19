import React, { FC } from 'react'
import { Container } from '../shared'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'

type HeroProps = {}

const Hero: FC<HeroProps> = () => {
    return (
        <section className='flex h-[80vh] items-center bg-gray-50 py-8 lg:py-20'>
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <div className='p-1'>
                        <span className='mb-3 inline-block rounded-full border border-amber-900 px-3 py-1 text-stone-600'>
                            Building the Web, Breaking the Mold.
                        </span>
                        <h1 className='relative mb-3 text-4xl font-semibold leading-normal text-gray-800 lg:mb-5 lg:text-6xl lg:font-bold lg:leading-[1.3]'>
                            Empowering Businesses through Powerful Web
                            Solutions.
                        </h1>
                        <p className='mb-3 text-base leading-relaxed text-gray-600 lg:mb-5 lg:text-lg'>
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
