import PropTypes from 'prop-types';

const PersonSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['talent', 'admin']).isRequired,
});

export default PersonSchema;
