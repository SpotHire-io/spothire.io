import PropTypes from 'prop-types';

const TimeSlotSchema = PropTypes.shape({
    id: PropTypes.bool.isRequired,
    start: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
    end: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
})

const DayAvailabilitySchema = PropTypes.oneOf([ PropTypes.bool, PropTypes.arrayOf(TimeSlotSchema) ]);

const AvailabilitySchema = PropTypes.shape({
    Monday: DayAvailabilitySchema.isRequired,
    Tuesday: DayAvailabilitySchema.isRequired,
    Wednesday: DayAvailabilitySchema.isRequired,
    Thursday: DayAvailabilitySchema.isRequired,
    Friday: DayAvailabilitySchema.isRequired,
    Saturday: DayAvailabilitySchema.isRequired,
    Sunday: DayAvailabilitySchema.isRequired,
});

export default AvailabilitySchema;
