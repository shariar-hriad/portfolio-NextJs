import Image from 'next/image'
import { FC } from 'react'

import { ProjectType } from '@/types'

type ProjectCardProps = {
    project: ProjectType
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className='rounded-md border p-5'>
            <div className='mb-3 overflow-hidden rounded-md border'>
                <Image
                    src='/project/furniro.png'
                    alt='Screenshot of Furniro E-Commerce Website'
                    className='w-full'
                    width={1024}
                    height={768}
                />
            </div>
            <h3 className='mb-3 text-xl font-medium'>{project.title}</h3>
            <p className='mb-3 text-stone-500'>{project.description}</p>
            <ul className='inline-flex flex-wrap gap-1'>
                {project.tags?.map((tag) => (
                    <li
                        key={tag}
                        className='rounded-full bg-stone-700 px-2 py-1 text-xs text-white'
                    >
                        #{tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard
