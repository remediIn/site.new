import './teamCard.scss';

export default function LeadsCard({data}){
    return (
        <div className="leadsCard teamCard">
            <div className="img">
                <img src={data?.img} alt="Profile image" />
            </div>
            <div className="details">
                <div className="des">{data?.description}</div>
                <div className="name outfit-700">{data?.name}</div>
                <div className="role">{data?.role}</div>
            </div>
        </div>
    )
}