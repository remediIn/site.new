import './teamCard.scss';

export default function MembersCard({data}){
    return (
        <div className="membersCard teamCard">
            <div className="img">
                <img src={data?.img} alt="Profile image" />
            </div>
            <div className="details">
                <div className="name outfit-700">{data?.name}</div>
                <div className="role">{data?.role}</div>
            </div>
        </div>
    )
}