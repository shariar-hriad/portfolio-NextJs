import { connectToDB } from '@/lib/db'
import Project from '@/models/project.model'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        await connectToDB()

        const body = await request.json()
        // const { title, description } = body

        const project = await Project.create(body)

        return Response.json(project)
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Failed to create new project!',
        })
    }
}
