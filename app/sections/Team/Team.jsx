import './team.scss';
import { team } from '@/data';
import LeadsCard from '@/app/components/TeamCard/LeadsCard';
import MembersCard from '@/app/components/TeamCard/MembersCard';

export default function Team() {
    return (
        <div id="team" className="outfit-400">
            <div className="topic">- Team</div>
            <div className="leads">
                <div className="cards">
                    {team?.leads.map((data, i) => {
                        return <LeadsCard data={data} key={i} />
                    })}
                </div>
            </div>
            <div className="members">
                <div className="topic">- Members</div>
                <div className="cards">
                    {team?.members.map((data, i) => {
                        return <MembersCard data={data} key={i} />
                    })}
                </div>
            </div>
        </div>
    );
}