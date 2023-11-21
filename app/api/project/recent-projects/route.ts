import { connectToDB } from '@/lib/db'
import Project from '@/models/project.model'

export async function GET() {
    try {
        await connectToDB()

        const projects = await Project.find({}).sort({ createdAt: -1 }).limit(4)

        if (!projects)
            Response.json({
                message: 'Project not found',
            })

        return Response.json(projects)
    } catch (error) {
        console.log(error)
        return Response.json({ message: 'Failed to get Recent Project' })
    }
}
