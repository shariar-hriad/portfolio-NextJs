import { ProjectType } from '@/types'
import { Schema, model, models } from 'mongoose'

const ProjectSchema = new Schema<ProjectType>(
    {
        title: {
            type: String,
            required: [true, 'Project title is required!'],
        },
        description: {
            type: String,
            required: [true, 'Description is required!'],
        },
        image: {
            type: String,
        },
        tags: {
            type: [String],
        },
        links: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
)

const Project = models.Project || model('Project', ProjectSchema)

export default Project
