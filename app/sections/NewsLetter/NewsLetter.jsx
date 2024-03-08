import { useState } from 'react';
import { cities } from '@/data';
import './newsLetter.scss';


export default function NewsLetter() {
    const [contact, setContact] = useState("");
    const [city, setCity] = useState(null);
    const handleChange = (event) => {
        setContact(event.target.contact);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div id="newsLetter" className='outfit-400'>
            <div className="l">
                <div className="up">
                    <div className="l"><img src="newsLetter.png" alt="newsLetter" /></div>
                    <div className="r">
                        <span>Subscribe to our</span>
                        <span>Newsletter</span>
                    </div>
                </div>
                <div className="down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda saepe a. Necessitatibus, vel suscipit?</div>
            </div>
            <div className="line"></div>
            <div className="r outfit-400">
                <form onSubmit={handleSubmit}>
                    <label>
                        <select name="city" id="city">
                            <option value="">City</option>
                            {cities.map((city,i) => (<option value={city} key={i}>{city}</option>))}
                        </select>
                    </label>
                    <label>
                        <input type="text" value={contact} onChange={handleChange} placeholder='Email or Whatsapp Number' name='contact'/>
                    </label>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    )
}