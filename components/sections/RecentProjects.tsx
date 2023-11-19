import ProjectCard from '../ProjectCard'

const RecentProjects = () => {
    return (
        <section className='py-8 lg:py-16'>
            <div className='container'>
                <div className='px-3 py-1 text-center'>
                    <h2 className='relative z-[1] inline-block text-4xl font-medium text-stone-700 lg:text-5xl'>
                        Recent Projects
                        <span className='absolute left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-stone-100 lg:text-9xl'>
                            Projects
                        </span>
                    </h2>
                </div>

                {/* Latest Projects */}
                <div className='mt-10 grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default RecentProjects
