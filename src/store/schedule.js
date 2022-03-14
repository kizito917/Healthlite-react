import ScheduleService from "../services/schedule.service";

const initialState = {
    appointments: [],
    scheduledAppointments: null,
    totalPatients: null,
    waitingRoom: null
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SCHEDULE_DATA':
            ScheduleService.fetchScheduleData()
            .then((result) => {
                console.log(result.data)
                const { appointments, scheduledAppointments, totalPatients, waitinfRoom } = result.data
                state.appointments = appointments
                state.scheduledAppointments = scheduledAppointments
                state.totalPatients = totalPatients
                state.waitingRoom = waitinfRoom
            })
            .catch((err) => console.log(err))
            break;
        default:
            break;
    }
    return state;
}

export default dashboardReducer;