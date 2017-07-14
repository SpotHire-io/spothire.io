interface Post {
    id: number
    title: string
    content: React.ReactNode
    excerpt?: React.ReactNode
    date: string
    responseRequired: boolean
    isRespondedTo: boolean
    opportunityId: number
}

export default Post;
