import PropTypes from 'prop-types';

const OpportunitySchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    isShift: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isAllDay: PropTypes.bool.isRequired,
    dates: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
    }).isRequired,
    employees: PropTypes.shape({
        invited: PropTypes.oneOf(['all', 'available', 'selected']).isRequired,
        confirmed: PropTypes.array
    }).isRequired
});

export default OpportunitySchema;
