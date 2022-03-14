import { Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Salutation({newAppointment, totalWaitingRoom}) {
    return (
        <div className="bg-primary rounded-md">
            <div className="px-7 text-white flex justify-between">
                <div className="pt-4 pb-4">
                    <h1 className="text-2xl pt-4">Welcome, <b>Dr. Fayemi David</b></h1>
                    <h6 className="text-xs mt-2">You have { newAppointment } new appointments and there are currently { totalWaitingRoom.toLocaleString() } patients in the waiting room. Have a nice day at work!</h6>
                    <div className="pt-6">
                        <Button sx={{ fontSize: '10px', border: '1px solid #1976d2', color: 'white' }} startIcon={<VisibilityIcon />}>
                            View your appointments
                        </Button>
                        <Button sx={{ marginLeft: '1rem', fontSize: '10px', border: '1px solid #1976d2', color: 'white' }} endIcon={<ArrowForwardIcon />}>
                            Go to waiting room
                        </Button>
                    </div>
                </div>
                <div className="pt-2 pb-2">
                    <img src="	https://health-lite.netlify.app/img/character.d98dfa2e.png" alt="welcome img" />
                </div>
            </div>
        </div>
    )
}

export default Salutation;