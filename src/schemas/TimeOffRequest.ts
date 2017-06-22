interface TimeOffRequest {
    id: number
    employeeId: number
    reason: string
    isAllDay: boolean
    dates: {
        start: string
        end: string
        [key: string]: any
    }
    approvalState: 'pending' | 'approved' | 'rejected'
}

export default TimeOffRequest;
