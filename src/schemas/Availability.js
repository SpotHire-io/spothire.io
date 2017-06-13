import PropTypes from 'prop-types';

const TimeSlotSchema = PropTypes.shape({
    id: PropTypes.bool.isRequired,
    start: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
    end: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
})

const DayAvailabilitySchema = PropTypes.oneOf([ PropTypes.bool, PropTypes.arrayOf(TimeSlotSchema) ]);

const AvailabilitySchema = PropTypes.shape({
    monday: DayAvailabilitySchema.isRequired,
    tuesday: DayAvailabilitySchema.isRequired,
    wednesday: DayAvailabilitySchema.isRequired,
    thursday: DayAvailabilitySchema.isRequired,
    friday: DayAvailabilitySchema.isRequired,
    saturday: DayAvailabilitySchema.isRequired,
    sunday: DayAvailabilitySchema.isRequired,
});

export default AvailabilitySchema;
