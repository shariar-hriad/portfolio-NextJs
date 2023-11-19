import React from 'react'
import { SectionTitle } from '../shared'

const Services = () => {
    return (
        <section className='py-8 lg:py-16'>
            <div className='container'>
                <SectionTitle title='Services' subtitle='Services' />

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
