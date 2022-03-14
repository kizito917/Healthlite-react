import { Button} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Jumbotron(params) {
    return (
        <div className="bg-primary rounded-md">
            <div className="px-7 text-white flex justify-between">
                <div className="pt-4 pb-4">
                    <h1 className="text-2xl pt-4">Your Schedule</h1>
                    <h6 className="text-xs mt-2">All client consultations are available here. You can intiate consultations for each client’s proceedure.</h6>
                    <div className="pt-6">
                        <Button sx={{ fontSize: '10px', border: '1px solid #1976d2', color: 'white' }} startIcon={<VisibilityIcon />}>
                            Add new schedule
                        </Button>
                    </div>
                </div>
                <div className="pt-2 pb-2">
                    <img src="https://health-lite.netlify.app/img/character2.22c12d1a.png" alt="welcome img" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;