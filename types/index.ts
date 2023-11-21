export type ProjectType = {
    _id: string
    image: string
    title: string
    description: string
    tags: string[]
    links: Link[]
}

type Link = {
    title: string
    url: string
}
