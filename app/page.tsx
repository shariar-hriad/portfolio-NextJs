import { Fragment } from 'react'
import { Hero, RecentProjects, Services } from '@/components/sections'

export default function Home() {
    return (
        <Fragment>
            <Hero />
            <RecentProjects />
            <Services />
        </Fragment>
    )
}
