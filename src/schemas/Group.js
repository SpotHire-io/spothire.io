import PropTypes from 'prop-types';

import PersonSchema from './Person';
import CustomFilterSchema from './CustomFilter';

const GroupSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.oneOf('static', 'virtual').isRequired,
    employees: PropTypes.oneOfType([
        PropTypes.arrayOf(PersonSchema),
        PropTypes.arrayOf(CustomFilterSchema),
    ]),
});

export default GroupSchema;
