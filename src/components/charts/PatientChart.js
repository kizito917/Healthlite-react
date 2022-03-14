import React, { useState } from 'react';
import Chart from "react-apexcharts";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function PatientChart({stats}) {
    //console.log(stats)
    var [chartInfo, setChartInfo] = useState({
        options: {
            chart: {
                type: "donut"
            },
            labels: ["Male", "Female", "Transgender", "Others"],
            responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
            }]
        },
        series: [stats.male, stats.female, stats.trans, stats.others]
    })
    return (
        <div className="mt-4 bg-default rounded-md">
            <div className="px-4 pb-4">
                <div className="flex justify-between pt-4">
                    <div>
                        <h4 className="text-md font-bold mb-2">Patients by Gender</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4" fill="none">
                            <path d="M0 2H48" stroke="#1565D8" stroke-width="3"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm text-primary">
                            This Month
                            <span>
                                <KeyboardArrowDownIcon sx={{ color: '#1565D8'}} />
                            </span>
                        </h4>
                    </div>
                </div>
                <Chart
                options={chartInfo.options}
                series={chartInfo.series}
                type="donut"
                width="400"
                />
                <h5 className="font-bold">Total Patients : 12,345</h5>
            </div>
        </div>
    )
}

export default PatientChart;