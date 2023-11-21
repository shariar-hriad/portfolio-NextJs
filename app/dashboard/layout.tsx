import { FC } from 'react'

type LayoutProps = {
    children: React.ReactNode
}

const DashboardLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <section className='py-8'>{children}</section>
        </>
    )
}

export default DashboardLayout
