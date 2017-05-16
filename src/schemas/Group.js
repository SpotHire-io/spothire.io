import PropTypes from 'prop-types';

import PersonSchema from './Person';

const GroupSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    talent: PropTypes.arrayOf(PersonSchema),
});

export default GroupSchema;