import { connectToDB } from '@/lib/db'
import Project from '@/models/project.model'

export async function GET() {
    try {
        await connectToDB()

        const projects = await Project.find({})

        return Response.json( projects )
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Failed to get Project',
        })
    }
}
