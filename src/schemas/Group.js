import PropTypes from 'prop-types';

import CustomFilterSchema from './CustomFilter';

const GroupSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.oneOf('static', 'virtual').isRequired,
    filters: PropTypes.arrayOf(CustomFilterSchema),
});

export default GroupSchema;
