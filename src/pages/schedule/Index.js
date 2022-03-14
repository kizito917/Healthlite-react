import { useEffect } from 'react';
import './Index.css';
import { useDispatch, useSelector } from "react-redux";
import PersistentDrawerLeft from '../../components/navbar/Navbar';
import Jumbotron from '../../components/schedule/Jumbotron';
import Calendar from '../../components/calendar/Calendar';
import ActivityList from '../../components/activity/ActivityList';
import AppointmentList from '../../components/schedule/AppointmentList';

function Schedule() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_SCHEDULE_DATA"})
    })
    const scheduleData = useSelector(state => state.scheduleData);
    //console.log(scheduleData.appointments)
    return (
        <section style={{ background: 'whitesmoke'}}>
            <PersistentDrawerLeft />
            <div className="main-container mt-20 text-left">
                <div className="mb-4 mt-4 mr-4">
                    <Jumbotron />
                </div>
                <div class="grid grid-cols-1 gap-2 lg:grid-cols-5 ">
                    <div className="col-span-2 pb-4">
                        <Calendar />
                        <ActivityList />
                    </div>
                    <div className="col-span-3 mr-4">
                        <AppointmentList appointmentList={scheduleData.appointments} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule;