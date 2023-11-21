import { ProjectType } from '@/types'
import ProjectCard from '../ProjectCard'
import { SectionTitle } from '../shared'

const fetchRecentProjects = async () => {
    const response = await fetch(process.env.BASE_URL + '/api/project')
    const data = await response.json()

    return data
}

const RecentProjects = async () => {
    const projects = await fetchRecentProjects()

    return (
        <section className='py-8 lg:py-16'>
            <div className='container'>
                <SectionTitle title='Recent Projects' subtitle='Projects' />

                {/* ========== Latest Projects ===========  */}
                <div className='mt-10 grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
                    {projects.map((project: ProjectType) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentProjects
