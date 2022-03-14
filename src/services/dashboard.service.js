import axios from './axios';

const DashboardService = {
    fetchDashboardData: () => {
        return axios.get('/welcome')
    }
}

export default DashboardService;