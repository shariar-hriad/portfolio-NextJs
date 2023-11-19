import ProjectCard from '../ProjectCard'
import { SectionTitle } from '../shared'

const RecentProjects = () => {
    return (
        <section className='py-8 lg:py-16'>
            <div className='container'>
                <SectionTitle title='Recent Projects' subtitle='Projects' />

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
