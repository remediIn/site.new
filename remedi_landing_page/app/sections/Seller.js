import '../styles/Seller.scss';

export default function Seller() {
    return (
        <div className="Seller section" id='Seller'>
            <div className='img'>
                <img src='/seller.png' />
                <img src='/bag.png' id='bag'/>
            </div>
            <div className='sellerDetails'>
                <h1>Sell your extra medicines</h1>
                <div className='keyPoints'>
                    <span>May save a life</span>
                    <span>Earned something</span>
                </div>
                <span>Useless to you can be &nbsp; Usefull for someone</span>
            </div>
        </div>
    );
}