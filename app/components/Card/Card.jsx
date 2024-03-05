export default function Card({ data }) {
    return (
        <div className="card">
            <h1>{data.heading}</h1>
            <p>{data.description}</p>
            <div className="watermark">
                <img src="capsule.png" alt="" />
                <img src="capsule.png" alt="" />
            </div>
        </div>
    )
}