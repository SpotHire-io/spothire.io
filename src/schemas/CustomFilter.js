import PropTypes from 'prop-types';

const CustomFilterSchema = PropTypes.shape({
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
});

export default CustomFilterSchema;
