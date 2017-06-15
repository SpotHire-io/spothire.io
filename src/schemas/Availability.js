import PropTypes from 'prop-types';

const TimeSlotSchema = PropTypes.shape({
    id: PropTypes.bool.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
});

const DayAvailabilitySchema = PropTypes.oneOf([ false, PropTypes.arrayOf(TimeSlotSchema) ]);

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
