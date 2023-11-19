import { FC } from 'react'

type ProjectType = {}

const ProjectCard: FC<ProjectType> = () => {
    return (
        <div className='rounded-md border p-5'>
            <h3 className='mb-3 text-xl font-medium'>
                Furniro E-Commerce Website
            </h3>
            <p className='mb-3 text-stone-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                porro eius ...
            </p>
            <ul className='inline-flex flex-wrap gap-1'>
                <li className='rounded-full bg-stone-700 px-2 py-1 text-xs text-white'>
                    #React
                </li>
                <li className='rounded-full bg-stone-700 px-2 py-1 text-xs text-white'>
                    #NextJs 14
                </li>
                <li className='rounded-full bg-stone-700 px-2 py-1 text-xs text-white'>
                    #Shadcn
                </li>
                <li className='rounded-full bg-stone-700 px-2 py-1 text-xs text-white'>
                    #TailwindCss
                </li>
            </ul>
        </div>
    )
}

export default ProjectCard
