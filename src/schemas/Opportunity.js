import PropTypes from 'prop-types';

const OpportunitySchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    isShift: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isAllDay: PropTypes.bool.isRequired,
    selectedDates: PropTypes.shape({
        start: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
        end: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired
    }).isRequired,
    employees: PropTypes.shape({
        invited: PropTypes.oneOf(['all', 'available', 'selected']).isRequired,
        confirmed: PropTypes.array
    }).isRequired
});

export default OpportunitySchema;
