import axios from './axios';

const ScheduleService = {
    fetchScheduleData: () => {
        return axios.get('/patients')
    }
}

export default ScheduleService;