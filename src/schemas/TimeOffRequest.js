import PropTypes from 'prop-types';

const TimeOffRequestSchema = PropTypes.shape({
    id: PropTypes.number.isRequired,
    employeeId: PropTypes.number.isRequired,
    reason: PropTypes.string.isRequired,
    isAllDay: PropTypes.bool.isRequired,
    dates: PropTypes.shape({
        start: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
        end: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired
    }).isRequired,
    approvalState: PropTypes.oneOf(['pending', 'approved', 'rejected']).isRequired,
});

export default TimeOffRequestSchema;
