import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

export default function Faq({ data }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq">
            <div className="que outfit-900" onClick={()=>setOpen(!open)}>
                <span>{data.que}</span>
                <div className="toggle">
                    {open && <KeyboardArrowUpIcon/> || <KeyboardArrowDownIcon/>}
                </div>
            </div>
            {open &&
                <div className="ans">{data.ans}</div>
            }
        </div>
    );
}