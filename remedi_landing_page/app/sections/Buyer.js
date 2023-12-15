import '../styles/Buyer.scss'

export default function Buyer() {
    return (
        <>
            <div className='quote01'>Medicines are expensive? | Well, Not any more </div>
            <div className="Buyer section" id="Buyer">
                <div className='left'>
                    <img className='bgLeftBuyer' src="/buyerBg.png" alt="illustration buyer" />
                    <div className='buyed'>
                        <img id='buyed1'src='/buyedLeft.png'/>
                        <img id='buyed2'src='/buyedRight.png'/>
                    </div>
                </div>
                <div className='right'>
                    <div className='head'>Buy these medicines at <br/>cheaper price</div>
                    <div className='info'>
                        <span>Don't have to suffer more because of the expensive medicines</span>
                        <span>A contribution towards a better environment</span>
                        <span>Quality verified by remedi ✅</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}