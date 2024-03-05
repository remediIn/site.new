import './reviews.scss';
import ReviewCard from '@/app/components/Review/ReviewCard';
import { reviews } from '@/data';

export default function Reviews(){
    return (
        <div id="reviews" className="outfit-400">
            <div className="topic">- What Our Customers Say</div>
            <div className="text">See what our customers have to say about us</div>
            <div className="cards">
                {reviews.map((review,i) => {
                    return <ReviewCard data={review}key={i} />
                })}
            </div>
        </div>
    );
}