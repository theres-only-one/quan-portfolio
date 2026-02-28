import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <div>
            <div className="contact-buttons">
                <Button variant="text" href="https://www.instagram.com/quanpham.trailside/" target="_blank" className="contact-button"><InstagramIcon /></Button>
                {/* <Button variant="contained" href=""></Button>  */}
            </div>
        </div>
    )
}

