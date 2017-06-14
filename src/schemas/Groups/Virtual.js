import PropTypes from 'prop-types';

import PersonSchema from './Person';

const VirtualGroupSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    employees: PropTypes.arrayOf(PersonSchema),
});

export default VirtualGroupSchema;
