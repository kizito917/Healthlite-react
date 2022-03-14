import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Index.css';
import PersistentDrawerLeft from '../../components/navbar/Navbar';
import Salutation from '../../components/dashboard/Salutation';
import Statistics from '../../components/dashboard/Statistics';
import PatientList from '../../components/dashboard/PatientList';
import AppointmentStats from '../../components/dashboard/AppointmentStats';
import Calendar from '../../components/calendar/Calendar';
import PatientChart from '../../components/charts/PatientChart';
import ActivityList from '../../components/activity/ActivityList';

function Dashboard() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_DASHBOARD_DATA"})
    })
    const dashboardData = useSelector(state => state.dashboardData);
    setTimeout(() => {
        setIsLoading(true)
    }, 500);
    //console.log(dashboardData.patientStats[0])
    return (
        <>
            {
                !isLoading && <h1 className="text-7xl loading-text">Loading</h1>
            }
            {
                isLoading && <section style={{ background: 'whitesmoke'}}>
                    <PersistentDrawerLeft />
                    <div className="main-container mt-20 text-left">
                        <div class="grid grid-cols-2 gap-2 lg:grid-cols-5">
                            <div className="col-span-3 pb-4">
                                <Salutation newAppointment={dashboardData.newAppointment} totalWaitingRoom={dashboardData.totalWaitingRoom} />
                                <Statistics totalWaitingRoom={dashboardData.totalWaitingRoom} totalAppointments={dashboardData.totalAppointments} totalPatients={dashboardData.totalPatients}  />
                                <PatientList allPatients={dashboardData.appointments} />
                                <AppointmentStats />
                            </div>
                            <div className="col-span-2 mr-4">
                                <Calendar />
                                <PatientChart stats={dashboardData.patientStats[0]} />
                                <ActivityList />
                            </div>
                        </div>
                    </div>
                </section>
            }   
        </>
    )
}

export default Dashboard;