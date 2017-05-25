import PropTypes from 'prop-types';

const PersonSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['employee', 'manager', 'admin']).isRequired,
    imageSrc: PropTypes.string.isRequired,
    emergencyContactInformation: PropTypes.node.isRequired,
    metadata: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string,
    })),
    hours: PropTypes.shape({
        worked: PropTypes.number,
        submitted: PropTypes.number,
    }).isRequired,
});

export default PersonSchema;
