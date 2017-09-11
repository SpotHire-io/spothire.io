import { StatelessComponent } from 'react'
import { Post } from '../../schemas';

interface Props {
    className?: string
    post: Post
    isOpen?: boolean
    isInline?: boolean
    toggleOpenState?: Function
    showOpportunityName?: boolean
}

declare const Post: StatelessComponent<Props>
export default Post
