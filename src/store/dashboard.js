import DashboardService from "../services/dashboard.service";

const initialState = {
    appointments: [],
    newAppointment: null,
    patientStats: [],
    totalAppointments: null,
    totalPatients: null,
    totalWaitingRoom: null
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DASHBOARD_DATA':
            DashboardService.fetchDashboardData()
            .then((result) => {
                const { appointments, new_appointment, patient_stats, total_appointments, total_patients, total_waiting_room} = result.data
                state.appointments = appointments
                state.newAppointment = new_appointment
                state.patientStats = patient_stats
                state.totalAppointments = total_appointments
                state.totalPatients = total_patients
                state.totalWaitingRoom = total_waiting_room
            })
            .catch((err) => console.log(err))
            break;
        default:
            break;
    }
    return state;
}

export default dashboardReducer;