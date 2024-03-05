import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ReviewCard({ data }) {

    return (
        <div className="reviewCard outfit-400">
            <div className="photo"><img src={data.img} alt="profile photo" /></div>
            <div className="name">{data.name}</div>
            <div className="comment">{data.comment}</div>
            <div className="rating">
                <div className="stars">
                    <StarIcon className='star'/>
                    {data.rating >= 2 && (<StarIcon  className='star'/>) || (data.rating == 1.5 && (<StarHalfIcon  className='star'/>) || (<StarBorderIcon  className='star'/>))}
                    {data.rating >= 3 && (<StarIcon  className='star'/>) || (data.rating == 2.5 && (<StarHalfIcon  className='star'/>) || (<StarBorderIcon  className='star'/>))}
                    {data.rating >= 4 && (<StarIcon  className='star'/>) || (data.rating == 3.5 && (<StarHalfIcon  className='star'/>) || (<StarBorderIcon  className='star'/>))}
                    {data.rating == 5 && (<StarIcon  className='star'/>) || (data.rating == 4.5 && (<StarHalfIcon  className='star'/>) || (<StarBorderIcon  className='star'/>))}
                </div>
                <p>{data.rating}</p>
            </div>
        </div>
    )
}