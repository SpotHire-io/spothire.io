import * as React from 'react'
import { Post } from '../../schemas';

interface Props {
    className?: string
    posts?: Post[]
    postProps?: any
}

interface State {
    openPosts: number[]
}

export default class PostList extends React.Component<Props, State> {}
