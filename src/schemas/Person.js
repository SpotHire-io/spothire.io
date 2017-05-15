import PropTypes from 'prop-types';

const PersonSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['talent', 'admin']).isRequired,
});

export default PersonSchema;
