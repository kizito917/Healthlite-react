import React from 'react';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from "moment";

function AppointmentList({appointmentList}) {
    const [patients,setPatients] = useState(appointmentList)
    return (
        <div className="bg-default rounded-md px-4">
            <div className="flex justify-between pt-4">
                <div>
                    <h4 className="text-md font-bold mb-2">Thursday - 18th February, 2021</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4" fill="none">
                        <path d="M0 2H48" stroke="#1565D8" stroke-width="3"></path>
                    </svg>
                </div>
                <div>
                    <h4 className="text-sm text-primary">
                        Show by Day
                        <span>
                            <ArrowForwardIcon sx={{ color: '#1565D8'}} />
                        </span>
                    </h4>
                </div>
            </div>
            <div className="list mt-4">
                {
                    appointmentList.map((patient) => {
                        return (
                            <div className="flex gap-4 mb-4" key={patient.name}>
                                <h4 className="text-sm">{moment(patient.createdAt).format('h:mm a')}</h4>
                                <div className="flex justify-between bg-patientList rounded-md px-4 pt-2 pb-2 w-screen">
                                    <div className="flex gap-4">
                                        <Avatar alt="Remy Sharp" src={ patient.img } />
                                        <h5 className="pt-2 text-sm">
                                            { patient.name }
                                        </h5>
                                    </div>
                                    <div className="pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#1D2B4F"></path>
                                            <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#1D2B4F"></path>
                                            <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#1D2B4F"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppointmentList;