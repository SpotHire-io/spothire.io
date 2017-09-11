import moment from 'moment'

const shifts = [
    {
        id: 0,
        start: moment(new Date(2017, 4, 1, 8, 0)),
        end: moment(new Date(2017, 4, 1, 16, 0)),
        notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
        isInvited: true,
        isConfirmed: false,
    },
    {
        id: 1,
        start: moment(new Date(2017, 4, 1, 16, 0)),
        end: moment(new Date(2017, 4, 2, 0, 0)),
        notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
        isInvited: true,
        isConfirmed: true,
    },
    {
        id: 2,
        start: moment(new Date(2017, 4, 1, 16, 0)),
        end: moment(new Date(2017, 4, 2, 0, 0)),
        notes: 'Elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis.',
        isInvited: false,
        isConfirmed: false,
    }
]
export default shifts