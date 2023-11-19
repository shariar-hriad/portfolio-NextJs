import { FC } from 'react'

type SectionTitleType = {
    title: string
    subtitle?: string
}

const SectionTitle: FC<SectionTitleType> = ({ title, subtitle }) => {
    return (
        <div className='px-3 py-1 text-center'>
            <h2 className='relative z-[1] inline-block text-4xl font-medium text-stone-700 dark:text-white lg:text-5xl'>
                {title}
                {subtitle && (
                    <span className='absolute left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-stone-100 dark:text-stone-900 lg:text-9xl'>
                        {subtitle}
                    </span>
                )}
            </h2>
        </div>
    )
}

export default SectionTitle
