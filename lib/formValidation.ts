import * as z from 'zod'

export const CreateProjectSchema = z.object({
    title: z
        .string()
        .min(4, { message: 'Project title must be at least 4 characters' })
        .max(200, { message: 'Project title must be at least 200 characters' }),
    description: z.string(),
    tags: z.string(),
    links: z.object({
        title: z.string(),
        url: z.string(),
    }),
})
