import PropTypes from 'prop-types';

import AvailabilitySchema from './Availability';

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
        id: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['string', 'number', 'boolean']).isRequired,
        value: PropTypes.string,
    })),
    availability: AvailabilitySchema.isRequired,
    hours: PropTypes.shape({
        worked: PropTypes.number,
        submitted: PropTypes.number,
    }).isRequired,
});

export default PersonSchema;
