import PropTypes from 'prop-types';

const PostSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    excerpt: PropTypes.node,
    date: PropTypes.string.isRequired,
    responseRequired: PropTypes.bool.isRequired,
    isRespondedTo: PropTypes.bool.isRequired,
});

export default PostSchema;
