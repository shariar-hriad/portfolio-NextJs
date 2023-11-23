'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex items-center justify-center px-4 py-10'>
                        <div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
                            <h2 className='text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl'>
                                Sign in
                            </h2>
                            <p className='mt-2 text-sm text-gray-600 dark:text-gray-200'>
                                Don&apos;t have an account?
                                <Link
                                    href='#'
                                    title=''
                                    className='font-semibold text-black transition-all duration-200 hover:underline dark:text-white'
                                >
                                    Create a free account
                                </Link>
                            </p>
                            <form action='#' method='POST' className='mt-8'>
                                <div className='space-y-5'>
                                    <div>
                                        <label
                                            htmlFor=''
                                            className='text-base font-medium text-gray-900 dark:text-white'
                                        >
                                            Email address
                                        </label>
                                        <div className='mt-2'>
                                            <Input
                                                type='email'
                                                placeholder='Email'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <label
                                                htmlFor=''
                                                className='text-base font-medium text-gray-900 dark:text-white'
                                            >
                                                Password
                                            </label>
                                            <Link
                                                href='#'
                                                title=''
                                                className='text-sm font-semibold text-black hover:underline dark:text-white'
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className='mt-2'>
                                            <Input
                                                type='password'
                                                placeholder='Password'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Button type='button'>
                                            Get started
                                            <ArrowRight
                                                className='ml-2'
                                                size={16}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-3 flex gap-2'>
                                <Button type='button'>
                                    <span className='mr-2 inline-block'>
                                        <svg
                                            className='h-6 w-6 text-rose-500'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                        >
                                            <path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </Button>
                                <Button type='button'>
                                    <span className='mr-2 inline-block'>
                                        <svg
                                            className='h-6 w-6 text-[#2563EB]'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                        >
                                            <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full'>
                        <Image
                            className='mx-auto h-full w-full rounded-md object-cover'
                            src='/signin.jpg'
                            alt=''
                            width={1366}
                            height={768}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
