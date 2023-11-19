import React from 'react'

const Services = () => {
    return (
        <section className='bg-stone-50 py-8 lg:py-16'>
            <div className='container'>
                <div className='px-3 py-1 text-center'>
                    <h2 className='relative z-[1] inline-block text-4xl font-medium text-stone-700 lg:text-5xl'>
                        Services
                        <span className='absolute left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-stone-100 lg:text-9xl'>
                            Services
                        </span>
                    </h2>
                </div>

                <div className='mt-10 grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='rounded-md border bg-stone-700 p-5'>
                        <h2 className='text-xl font-medium text-gray-200'>
                            Frontend Development
                        </h2>
                    </div>
                    <div className='rounded-md border bg-stone-700 p-5'>
                        <h2 className='text-xl font-medium text-gray-200'>
                            Backend Development
                        </h2>
                    </div>
                    <div className='rounded-md border bg-stone-700 p-5'>
                        <h2 className='text-xl font-medium text-gray-200'>
                            CSS Bug Fixing
                        </h2>
                    </div>
                    <div className='rounded-md border bg-stone-700 p-5'>
                        <h2 className='text-xl font-medium text-gray-200'>
                            Redesign Website
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
